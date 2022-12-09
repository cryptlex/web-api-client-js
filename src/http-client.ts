import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import CryptlexWebApiClientOptions from "./client-options";

/** An extension of AxiosRequestConfig to store   */
type AxiosRetryConfig = AxiosRequestConfig<any> & {
  /** Stores the number of retries made for a request */
  retries?: number;

  /** Stores the time when the request was made. UTC timestamp. */
  lastRequestTime?: number;
};

type AxiosErrorWithRetries = AxiosError & {
  config: AxiosRetryConfig;
};

type Milliseconds = number;

/**
 * Default time to stall program
 */
const DEFAULT_SLEEP_TIME: Milliseconds = 30000;

/**
 * Maximum allowed retries.
 */
const MAX_RETRIES = 3;

/**
 * The HttpClient class abstracts any customizations on the underlying client(Axios) from the CryptlexWebApiClient class.
 */
export class HttpClient {
  /** Axios instance */
  instance: AxiosInstance;

  constructor(options: CryptlexWebApiClientOptions) {
    this.instance = axios.create({
      baseURL: options.baseUrl,
      timeout: options.timeout,
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    });

    this.setupInterceptors();
  }

  /**
   * @private
   * @internal
   * Initializes interceptors for Axios client
   * @returns {void}
   */
  private setupInterceptors() {
    // Setup the request interceptor to maintain retry state.
    this.instance.interceptors.request.use((config: AxiosRetryConfig) => {
      // Determine the number of retries attempted
      const retries = config.retries || 0;
      // Initialize config.retries for every request to 0, or previous value to maintain state.
      config.retries = retries;
      // Initialize config.lastRetryTime for every request to allow debouncing.
      config.lastRequestTime = Date.now();
      // Return mutated config
      return config;
    });

    // Setup the response interceptor to handle retrying of 429, and 5xx errors.
    this.instance.interceptors.response.use(
      // For valid response of range 2xx, do nothing.
      undefined,
      // For responses beyond 2xx.
      async (error: AxiosErrorWithRetries) => {
        if (
          // Error exists
          error &&
          // Error is AxiosError
          error.response &&
          // AxiosError has all the request parameters of the failed request
          error.config
        ) {
          if (
            // Response status is 429
            error.response.status === 429 &&
            // Response headers exist
            error.response.headers &&
            // Response header 'retry-after' is less than or equal to 60 seconds
            Number(error.response.headers["retry-after"]) <= 60
          ) {
            // Wait for ('retry-after' + 2) seconds.
            await sleep(
              Number(error.response.headers["retry-after"]) * 1000 + 2000
            );

            // Retry request
            return handleRetry(error);
          }
          // handle 5xx
          else if (
            error.response.status >= 500 &&
            error.response.status <= 599
          ) {
            // Wait for the default sleep time.
            await sleep();

            // Retry request
            return handleRetry(error);
          }
          // Other errors
          else {
            // Thrown error propagates.
            return Promise.reject(error);
          }
        } else {
          // If none of the conditions match, let the error thrown propogate.
          return Promise.reject(error);
        }
      }
    );

    /**
     * Generic handler for retries. Increments the number for retries and returns the initial request.
     * @param {AxiosErrorWithRetries} axiosError AxiosError with AxiosRetryConfig
     * @returns {Promise} Promise with retried request OR rejection.
     */
    const handleRetry = (axiosError: AxiosErrorWithRetries) => {
      if (axiosError.config && axiosError.config.headers) {
        // Safely get retries (even if undefined)
        const retries = axiosError.config.retries || 0;
        // Set retries in the AxiosRetryConfig
        axiosError.config.retries = retries + 1;

        if (axiosError.config.retries < MAX_RETRIES) {
          /*
           * Workaround for https://github.com/axios/axios/issues/5143
           * Some computations that axios.request() makes on the object mangles
           * the headers and leads to a 401 if we pass the object as is.
           *
           * Hence we delete the httpAgent, httpsAgent, and pass the headers after destructuring.
           */
          delete axiosError.config.httpAgent;
          delete axiosError.config.httpsAgent;
          return this.instance.request({
            ...axiosError.config,
            headers: { ...axiosError.config.headers },
          });
        } else {
          return Promise.reject(axiosError);
        }
      } else {
        /**
         * Error propogates if config is not correct
         */
        return Promise.reject(axiosError);
      }
    };
  }
}

/**
 * @internal
 * @private
 *
 * Stalls the program.
 * @param {number} ms Time to stall in milliseconds
 * @returns {Promise<void>} Promise that stalls program as per the parameter passed when awaited.
 */
function sleep(ms: Milliseconds = DEFAULT_SLEEP_TIME): Promise<void> {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
