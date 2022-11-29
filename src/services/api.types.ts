/** Generic type for query parameters */
export type QueryParmeters = {
  [key: string]: string | number | string[] | boolean;
};

/** Generic type for the request body */
export type RequestBody = {
  [key: string]: any;
};

import { AxiosResponse } from "axios";

/**
 * Alias for AxiosResponse type.
 */
export type ApiResponse<T = any> = AxiosResponse<T, any>;
