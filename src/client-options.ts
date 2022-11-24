export const DEFAULT_BASE_URL = 'https://api.cryptlex.com/v3'

/**
 * Defines a set of options for the CryptlexWebApiClient.
 * @constructor
 */
export class CryptlexWebApiClientOptions {
  /** The accessToken for accessing the Cryptlex Web API */
  accessToken: string

  /** Base URL relative to which all requests are made. This defaults to https://api.cryptlex.com/v3  */
  baseUrl: string

  /** Request timeout */
  timeout: number

  /**
   * @param {string} accessToken Access Token
   * @param {string} baseUrl URL relative to which all requests are made. Defaults to 'https://api.cryptlex.com/v3'.
   * @param {number} timeout HTTP request timeout. Defaults to 5000.
   */
  constructor (accessToken: string, baseUrl: string = DEFAULT_BASE_URL, timeout = 5000) {
    this.accessToken = accessToken

    // TODO add validations on baseUrl
    this.baseUrl = baseUrl

    this.timeout = timeout
  }
}
