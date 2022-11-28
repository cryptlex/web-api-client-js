import axios, { AxiosInstance } from "axios";
import { CryptlexWebApiClientOptions } from "./client-options";
import { ApiResponse } from "./services/api.types";
import { LicenseService } from "./services/license.service";
import {
  LicenseCreateRequest,
  LicenseListQueryParameters,
  LicenseResponse,
  LicenseUpdateRequest,
} from "./services/license.types";
import { UserService } from "./services/user.service";
import {
  UserCreateRequest,
  UserListQueryParameters,
  UserPasswordUpdateRequest,
  UserResponse,
  UserUpdateRequest,
} from "./services/user.types";

/**
 * The CryptlexWebApiClient class contains the functions to communicate with the Cryptlex Web API.
 * Creating instances of this class require passing a CryptlexWebApiClientOptions instance.
 *
 */
export class CryptlexWebApiClient {
  /**
   * HttpClient to communicate with the Cryptlex Web API
   */
  httpClient: AxiosInstance;

  constructor(options: CryptlexWebApiClientOptions) {
    this.httpClient = axios.create({
      baseURL: options.baseUrl,
      timeout: options.timeout,
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    });
  }

  /**
   * Create a license.
   * @param {LicenseCreateRequest} license License object to create
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  createLicense(
    license: LicenseCreateRequest
  ): Promise<ApiResponse<LicenseResponse>> {
    return LicenseService.createLicense(this.httpClient, license);
  }

  /**
   * Updates the specified license by setting the values of the existing license to the properties passed.
   * Any properties not provided will be left unchanged.
   * @param {string} id Unique identifier for the license.
   * @param {LicenseUpdateRequest} license License object containing properties to update
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  updateLicense(
    id: string,
    license: LicenseUpdateRequest
  ): Promise<ApiResponse<LicenseResponse>> {
    return LicenseService.updateLicense(this.httpClient, id, license);
  }

  /**
   * Permanently deletes a license. WRANING: This cannot be undone.
   * @param {string} id Unique identifier for the license.
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  deleteLicense(id: string): Promise<ApiResponse<any>> {
    return LicenseService.deleteLicense(this.httpClient, id);
  }

  /**
   * Returns a list of licenses. The licenses are returned sorted by creation date in ascending order.
   * @param {number} page Page number. Starts with 1
   * @param {number} limit The number of licenses to fetch or 'Page size'. Value can be between 1 and 100.
   * @param {LicenseListQueryParameters} parameters Parameters to filter the result of the list
   * @returns {Promise<ApiResponse<LicenseResponse[]>>} Promise that resolves to the Web API response
   */
  getLicenses(
    page: number,
    limit: number,
    parameters?: LicenseListQueryParameters
  ) {
    return LicenseService.getLicenses(this.httpClient, page, limit, parameters);
  }

  /**
   * Retrieves the details of an existing license.
   * @param {string} id Unique identifier for the license.
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  getLicense(id: string): Promise<ApiResponse<LicenseResponse>> {
    return LicenseService.getLicense(this.httpClient, id);
  }

  /**
   * Extends the license expiry by it's validity.
   * @param {string} id Unique identifier for the license.
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  renewLicense(id: string): Promise<ApiResponse<LicenseResponse>> {
    return LicenseService.renewLicense(this.httpClient, id);
  }

  /**
   * Extends the license expiry by extension length.
   * @param {string} id Unique identifier for the license.
   * @param {number} extensionLength License extension duration (in seconds) to extend the license expiry.
   * @returns {Promise<ApiResponse<LicenseResponse>>} Promise that resolves to the Web API response
   */
  extendLicense(
    id: string,
    extensionLength: number
  ): Promise<ApiResponse<LicenseResponse>> {
    return LicenseService.extendLicense(this.httpClient, id, extensionLength);
  }

  /**
   * Creates a new user.
   * @param {UserCreateRequest} user User creation request body
   * @returns {Promise<ApiResponse<UserResponse>>} Promise that resolves to the Web API response
   */
  createUser(user: UserCreateRequest): Promise<ApiResponse<UserResponse>> {
    return UserService.createUser(this.httpClient, user);
  }

  /**
   * Permanently deletes an user. It cannot be undone.
   * @param {string} id Unique identifier for the user.
   * @returns {Promise<ApiResponse<any>>} Promise that resolves to the Web API response
   */
  deleteUser(id: string): Promise<ApiResponse<any>> {
    return UserService.deleteUser(this.httpClient, id);
  }

  /**
   * Retrieves the details of an existing user.
   * @param {string} id Unique identifier for the user.
   * @returns {Promise<ApiResponse<UserResponse>>} Promise that resolves to the Web API response
   */
  getUser(id: string): Promise<ApiResponse<UserResponse>> {
    return UserService.getUser(this.httpClient, id);
  }

  /**
   * Returns a list of users. The users are returned sorted by creation date in ascending order.
   * @param {number} page The page number.
   * @param {number} limit The number of records per page. Must be a number between 1 and 100.
   * @param {UserListQueryParameters} parameters Parameters to filter the result of the list
   * @returns {Promise<ApiResponse<UserResponse[]>>} Promise that resolves to the Web API response
   */
  getUsers(
    page: number,
    limit: number,
    parameters?: UserListQueryParameters
  ): Promise<ApiResponse<UserResponse[]>> {
    return UserService.getUsers(this.httpClient, page, limit, parameters);
  }

  /**
   * Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   * @param {string} id Unique identifier for the user
   * @param {UserUpdateRequest} user User update request object
   * @returns {Promise<ApiResponse<UserResponse>>} Promise that resolves to the Web API response
   */
  updateUser(id: string, user: UserUpdateRequest) {
    return UserService.updateUser(this.httpClient, id, user);
  }

  /**
   * Update the user's password. A user's password can only be updated when authenticated as the given user.
   * @param {string} id Unique identifier for the user
   * @param {UserPasswordUpdateRequest} passwordUpdate Password update request body
   * @returns {Promise<ApiResponse<any>>} Promise that resolves to the Web API response
   */
  updateUserPassword(
    id: string,
    passwordUpdate: UserPasswordUpdateRequest
  ): Promise<ApiResponse<any>> {
    return UserService.updateUserPassword(this.httpClient, id, passwordUpdate);
  }
}
