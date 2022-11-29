import { AxiosInstance } from "axios";
import { ApiResponse, QueryParmeters, RequestBody } from "./api.types.js";

/**
 * Generic functions to create requests to the Cryptlex Web API. Functions from this class are not to be used directly by the end-user.
 */
export default class ApiService {
  /**
   * Get paginated data from the API
   * @param {AxiosInstance} httpClient AxiosInstance
   * @param {string} urlPath Relative path from baseUrl to the entity
   * @param {number} page Page number
   * @param {number} limit Page size
   * @param {QueryParmeters} parameters Optional query parameters
   * @returns {Promise<ApiResponse<T>>} Promise that resolves to ApiResponse
   */
  static getList<T>(
    httpClient: AxiosInstance,
    urlPath: string,
    page: number,
    limit: number,
    parameters?: QueryParmeters
  ): Promise<ApiResponse<T>> {
    const params = {
      page,
      limit,
    };
    if (parameters != null) {
      Object.assign(params, parameters);
    }

    return httpClient.get<T>(urlPath, { params });
  }

  /**
   * Make a GET request to the Web API
   * @param {AxiosInstance} httpClient AxiosInstance
   * @param {string} urlPath Relative path from baseUrl to the entity
   * @returns {Promise<ApiResponse<T>>} Promise that resolves to ApiResponse
   */
  static get<T>(
    httpClient: AxiosInstance,
    urlPath: string
  ): Promise<ApiResponse<T>> {
    return httpClient.get<T>(urlPath);
  }

  /**
   * Make a POST request to the Web API
   * @param {AxiosInstance} httpClient AxiosInstance
   * @param {string} urlPath Relative path from baseUrl to the entity
   * @param {RequestBody} body Request body
   * @returns {Promise<ApiResponse<T>>} Promise that resolves to ApiResponse
   */
  static post<T>(
    httpClient: AxiosInstance,
    urlPath: string,
    body?: RequestBody
  ): Promise<ApiResponse<T>> {
    return httpClient.post<T>(urlPath, body);
  }

  /**
   * Make a PATCH request to the Web API
   * @param {AxiosInstance} httpClient AxiosInstance
   * @param {string} urlPath Relative path from baseUrl to the entity
   * @param {RequestBody} body Request body
   * @returns {Promise<ApiResponse<T>>} Promise that resolves to ApiResponse
   */
  static patch<T>(
    httpClient: AxiosInstance,
    urlPath: string,
    body: RequestBody
  ): Promise<ApiResponse<T>> {
    return httpClient.patch<T>(urlPath, body);
  }

  /**
   * Make a DELETE request to the Web API
   * @param {AxiosInstance} httpClient AxiosInstance
   * @param {string} urlPath Relative path from baseUrl to the entity
   * @returns {Promise<ApiResponse<T>>} Promise that resolves to ApiResponse
   */
  static delete(
    httpClient: AxiosInstance,
    urlPath: string
  ): Promise<ApiResponse<any>> {
    return httpClient.delete(urlPath);
  }
}
