import {
  LicenseResponse,
  LicenseCreateRequest,
  LicenseListQueryParameters,
  LicenseUpdateRequest,
} from "./license.types";
import { ApiResponse } from "./api.types";
import { AxiosInstance } from "axios";
import { ApiService } from "./api.service";

/**
 * Function implementations for actions on Licenses. Not to be accessed directly by the end-user.
 */
export class LicenseService {
  static urlPath = "/licenses";

  static getLicenses(
    httpClient: AxiosInstance,
    page: number,
    limit: number,
    parameters?: LicenseListQueryParameters
  ): Promise<ApiResponse<LicenseResponse[]>> {
    return ApiService.getList(
      httpClient,
      this.urlPath,
      page,
      limit,
      parameters
    );
  }

  static createLicense(
    httpClient: AxiosInstance,
    license: LicenseCreateRequest
  ): Promise<ApiResponse<LicenseResponse>> {
    return ApiService.post(httpClient, this.urlPath, license);
  }

  static getLicense(
    httpClient: AxiosInstance,
    id: string
  ): Promise<ApiResponse<LicenseResponse>> {
    return ApiService.get(httpClient, `${this.urlPath}/${id}`);
  }

  static updateLicense(
    httpClient: AxiosInstance,
    id: string,
    license: LicenseUpdateRequest
  ): Promise<ApiResponse<LicenseResponse>> {
    return ApiService.patch(httpClient, `${this.urlPath}/${id}`, license);
  }

  static deleteLicense(
    httpClient: AxiosInstance,
    id: string
  ): Promise<ApiResponse<any>> {
    return ApiService.delete(httpClient, `${this.urlPath}/${id}`);
  }

  static renewLicense(
    httpClient: AxiosInstance,
    id: string
  ): Promise<ApiResponse<LicenseResponse>> {
    return ApiService.post(httpClient, `${this.urlPath}/${id}/renew`);
  }

  static extendLicense(
    httpClient: AxiosInstance,
    id: string,
    extensionLength: number
  ): Promise<ApiResponse<LicenseResponse>> {
    return ApiService.post(httpClient, `${this.urlPath}/${id}/extend`, {
      extensionLength: extensionLength,
    });
  }
}
