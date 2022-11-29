import { MetadataResponse, MetadataRequest } from "./metadata.types.js";

/**
 * Schema for User
 */
export type UserResponse = {
  /** Unique identifier */
  id: string;
  /** Date of creation  */
  createdAt: string;
  /** Date of last update */
  updatedAt: string;
  /** Generated property from first and last name.  */
  name?: string;
  /** First name */
  firstName: string;
  /** Last name */
  lastName: string;
  /** Email address */
  email: string;
  /** Company */
  company?: string;
  /** True if 2FA is enabled for this user */
  twoFactorEnabled: boolean;
  /**  True if Google SSO is enabled for this user */
  googleSsoEnabled: boolean;
  /**  True is user is allowed access to the Customer Portal */
  allowCustomerPortalAccess?: boolean;
  /**  Role of the user */
  role: string;
  /**  Date of last login */
  lastLoginAt?: string;
  /**  Time when user was last active */
  lastSeenAt?: string;
  /** Key/value pairs to store data related to the user. */
  metadata?: MetadataResponse[];
  /**  List of tags */
  tags?: string[];
};

/** Properties on the User that cannot be set/updated. */
export type UserReadOnlyProperties =
  | "id"
  | "createdAt"
  | "updatedAt"
  | "twoFactorEnabled"
  | "googleSsoEnabled"
  | "roles"
  | "lastLoginAt"
  | "lastSeenAt";

/** Schema for creating a User */
export type UserCreateRequest = Omit<
  UserResponse,
  UserReadOnlyProperties | "metadata"
> & {
  /** Password of the user */
  password: string;
  metadata?: MetadataRequest[];
};

export type UserUpdateRequest = Omit<UserCreateRequest, "password">;

/** The response types of the property `userType` */
export type UserType = "admin" | "user";

/** Supported query parameters for listing users  */
export type UserListQueryParameters = {
  /** Matches values that are equal to a specified value. */
  "role[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "role[ne]": string;

  /** Matches values that start with a specified value. */
  "role[sw]": string;

  /** Matches values that end with a specified value. */
  "role[ew]": string;

  /** Matches values that contain a specified value. */
  "role[cn]": string;

  /** Matches values that does not contain a specified value. */
  "role[nc]": string;

  /** Matches any of the values specified in an array. */
  "role[in]": string[];

  /** Matches none of the values specified in an array. */
  "role[nin]": string[];

  /** Type of the user - admin or user. */
  "userType": UserType;

  /** Matches values that are equal to a specified value. */
  "email[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "email[ne]": string;

  /** Matches values that start with a specified value. */
  "email[sw]": string;

  /** Matches values that end with a specified value. */
  "email[ew]": string;

  /** Matches values that contain a specified value. */
  "email[cn]": string;

  /** Matches values that does not contain a specified value. */
  "email[nc]": string;

  /** Matches any of the values specified in an array. */
  "email[in]": string[];

  /** Matches none of the values specified in an array. */
  "email[nin]": string[];

  "company[eq]": string;
  /** Matches values that are equal to a specified value. */

  /** Matches values that are not equal to a specified value. */
  "company[ne]": string;

  /** Matches values that start with a specified value. */
  "company[sw]": string;

  /** Matches values that end with a specified value. */
  "company[ew]": string;

  /** Matches values that contain a specified value. */
  "company[cn]": string;

  /** Matches values that does not contain a specified value. */
  "company[nc]": string;

  /** Matches any of the values specified in an array. */
  "company[in]": string[];

  /** Matches none of the values specified in an array. */
  "company[nin]": string[];

  /** Matches values that are equal to a specified value. */
  "tag[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "tag[ne]": string;

  /** Matches values that start with a specified value. */
  "tag[sw]": string;

  /** Matches values that end with a specified value. */
  "tag[ew]": string;

  /** Matches values that contain a specified value. */
  "tag[cn]": string;

  /** Matches values that does not contain a specified value. */
  "tag[nc]": string;

  /** Matches any of the values specified in an array. */
  "tag[in]": string[];

  /** Matches none of the values specified in an array. */
  "tag[nin]": string[];

  /** Array of strings <= 10 items
    Tags associated with the user */
  "tags": string[];

  /** Matches values that are equal to a specified value. */
  "metadata.key[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "metadata.key[ne]": string;

  /** Matches values that start with a specified value. */
  "metadata.key[sw]": string;

  /** Matches values that end with a specified value. */
  "metadata.key[ew]": string;

  /** Matches values that contain a specified value. */
  "metadata.key[cn]": string;

  /** Matches values that does not contain a specified value. */
  "metadata.key[nc]": string;

  /** Matches any of the values specified in an array. */
  "metadata.key[in]": string[];

  /** Matches none of the values specified in an array. */
  "metadata.key[nin]": string[];

  /** Matches values that are equal to a specified value. */
  "metadata.value[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "metadata.value[ne]": string;

  /** Matches values that start with a specified value. */
  "metadata.value[sw]": string;

  /** Matches values that end with a specified value. */
  "metadata.value[ew]": string;

  /** Matches values that contain a specified value. */
  "metadata.value[cn]": string;

  /** Matches values that does not contain a specified value. */
  "metadata.value[nc]": string;

  /** Matches any of the values specified in an array. */
  "metadata.value[in]": string[];

  /** Matches none of the values specified in an array. */
  "metadata.value[nin]": string[];

  /** Unique identifier for the product. */
  "productId": string;

  /** Matches values that are equal to a specified value. */
  "activation.appVersion[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "activation.appVersion[ne]": string;

  /** Matches values that start with a specified value. */
  "activation.appVersion[sw]": string;

  /** Matches values that end with a specified value. */
  "activation.appVersion[ew]": string;

  /** Matches values that contain a specified value. */
  "activation.appVersion[cn]": string;

  /** Matches values that does not contain a specified value. */
  "activation.appVersion[nc]": string;

  /** Matches any of the values specified in an array. */
  "activation.appVersion[in]": string[];

  /** Matches none of the values specified in an array. */
  "activation.appVersion[nin]": string[];

  /** Matches values that are equal to a specified value. */
  "createdAt[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "createdAt[ne]": string;

  /** Matches values that are greater than a specified value. */
  "createdAt[gt]": string;

  /** Matches values that are greater than or equal to a specified value. */
  "createdAt[gte]": string;

  /** Matches values that are less than a specified value. */
  "createdAt[lt]": string;

  /** Matches values that are less than or equal to a specified value. */
  "createdAt[lte]": string;

  /** Matches values that are equal to a specified value. */
  "lastSeenAt[eq]": string;

  /** Matches values that are not equal to a specified value. */
  "lastSeenAt[ne]": string;

  /** Matches values that are greater than a specified value. */
  "lastSeenAt[gt]": string;

  /** Matches values that are greater than or equal to a specified value. */
  "lastSeenAt[gte]": string;

  /** Matches values that are less than a specified value. */
  "lastSeenAt[lt]": string;

  /** Matches values that are less than or equal to a specified value. */
  "lastSeenAt[lte]": string;
};

/** Request format for user password update */
export interface UserPasswordUpdateRequest {
  /**
   * >= 8 characters. Old password of the user.
   */
  oldPassword: string;
  /**
   * >= 8 characters. New password of the user.
   */
  newPassword: string;
}
