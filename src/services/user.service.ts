import { AxiosInstance } from 'axios'
import { ApiResponse } from './api.types'
import { ApiService } from './api.service'
import { UserResponse, UserListQueryParameters, UserPasswordUpdateRequest, UserCreateRequest, UserUpdateRequest } from './user.types'

/**
 * Function implementations for actions on Users. Not to be accessed directly by the end-user.
 */
export class UserService {
  static urlPath = '/users'

  /** https://api.cryptlex.com/v3/docs#tag/Users/operation/get/v3/users */

  static getUsers(httpClient: AxiosInstance, page: number, limit: number, parameters?: UserListQueryParameters): Promise<ApiResponse<UserResponse[]>> {
    return ApiService.getList(httpClient, this.urlPath, page, limit, parameters)
  }

  static createUser(httpClient: AxiosInstance, user: UserCreateRequest): Promise<ApiResponse<UserResponse>> {
    return ApiService.post(httpClient, this.urlPath, user)
  }

  static getUser(httpClient: AxiosInstance, id: string): Promise<ApiResponse<UserResponse>> {
    return ApiService.get(httpClient, `${this.urlPath}/${id}`)
  }

  static updateUser(httpClient: AxiosInstance, id: string, user: UserUpdateRequest): Promise<ApiResponse<UserResponse>> {
    return ApiService.patch(httpClient, `${this.urlPath}/${id}`, user)
  }

  static deleteUser(httpClient: AxiosInstance, id: string): Promise<ApiResponse<any>> {
    return ApiService.delete(httpClient, `${this.urlPath}/${id}`)
  }


  static updateUserPassword(httpClient: AxiosInstance, id: string, updateRequest: UserPasswordUpdateRequest): Promise<ApiResponse<any>> {
    return ApiService.patch(httpClient, `${this.urlPath}/${id}/update-password`, updateRequest)
  }
}
