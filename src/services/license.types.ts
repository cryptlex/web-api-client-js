import { MetadataResponse, MetadataRequest } from "./metadata.types.js";
import {
  MeterAttributeResponse,
  MeterAttributesRequest,
} from "./meter-attribute.types.js";
import { UserResponse } from "./user.types.js";

/**
 * String literals defining license.fingerprintMatchingStrategy
 */
export type FingerprintMatchingStrategy = "fuzzy" | "exact" | "loose";

/**
 * String literals defining license.leasingStrategy
 */
export type LeasingStrategy = "per-machine" | "per-instance";

/**
 * String literals defining license.expirationStrategy
 */
export type ExpirationStrategy = "immediate" | "delayed" | "rolling";

/**
 * String literals defining license.type
 */
export type LicenseType =
  | "node-locked"
  | "hosted-floating"
  | "on-premise-floating";

/**
 * Schema for license
 */
export type LicenseResponse = {
  /** Unique identifier */
  id: string;
  /**  */
  updatedAt: string;
  /** */
  totalActivations: number;
  /** */
  totalDeactivations: number;
  /** */
  expiresAt: string;
  /** */
  maintenanceExpiresAt: string;
  /** */
  currentReleaseVersion: string;
  /** */
  reseller?: UserResponse;
  /** */
  user?: UserResponse;
  /** The key associated with the license. If left empty, key is auto - generated. */
  key?: string;
  /** Set true to revoke the license. */
  revoked?: boolean;
  /** Set true to suspend the license. */
  suspended?: boolean;
  /** Strategy for matching machine fingerprint. */
  fingerprintMatchingStrategy?: FingerprintMatchingStrategy;
  /** Allowed number of activations for the license.Set to '0' for unlimited activations. */
  allowedActivations?: number;
  /** Allowed number of deactivations for the license.This setting is ignored for floating licenses. */
  allowedDeactivations?: number;
  /** Duration of lease for floating licenses.Set to '0' for unlimited lease duration. */
  leaseDuration?: number;
  /**  Allow client to set the lease duration for floating licenses. */
  allowClientLeaseDuration?: boolean;
  /** Allowed number of floating clients for on - premise floating licenses */
  allowedFloatingClients?: number;
  /** The duration for which the server sync failure due to network error is acceptable. */
  serverSyncGracePeriod?: number;
  /** The interval at which license data in client is synced with the server. */
  serverSyncInterval?: number;
  /** The allowed clock offset between the network time and the local time. Minimum 60. */
  allowedClockOffset?: number;
  /** Disables clock validation checks on the licensed machine for perpetual licenses. */
  disableClockValidation?: boolean;
  /** The number of seconds to wait before license expiration date to trigger 'license.expiring-soon' webhook event. */
  expiringSoonEventOffset?: number;
  /** Whether to allow an activation inside a virtual machine. */
  allowVmActivation?: boolean;
  /** Whether to allow an activation inside a container. */
  allowContainerActivation?: boolean;
  /** Whether user authentication is required for license activation. */
  requireAuthentication?: boolean;
  /** Whether IP address and geo - location should be stored. */
  disableGeoLocation?: boolean;
  /** Notes to store with the license. */
  notes?: string;
  /** Allowed IP range. Leave empty to ignore. */
  allowedIpRange?: string;
  /** Allowed IP ranges. Leave empty to ignore. <=20 items  */
  allowedIpRanges?: string[];
  /** List of the allowed countries.Leave empty to ignore. <= 256 items */
  allowedCountries?: string[];
  /** List of the disallowed countries.Leave empty to ignore. <= 256 items */
  disallowedCountries?: string[];
  /** List of the allowed ip addresses. Leave empty to ignore. <= 256 items */
  allowedIpAddresses?: string[];
  /** List of the disallowed ip addresses. Leave empty to ignore. <= 256 items */
  disallowedIpAddresses?: string[];
  /** Unique identifier for the user. */
  userId?: string;
  /** Unique identifier for the reseller user. */
  resellerId?: string;
  /** Unique identifier for the additional users. */
  additionalUserIds?: string[];
  /** Unique identifier for the product version. */
  productVersionId?: string;
  /** Unique identifier for the maintenance policy. */
  maintenancePolicyId?: string;
  /**
   * The max allowed release version.
   * This property is ignored if maintenance policy is set for the license.
   * Only following three formats are allowed x.x, x.x.x, x.x.x.x.
   */
  maxAllowedReleaseVersion?: string;
  /** List of tags. <= 5 items */
  tags?: string[];

  /**
   * List of metdata key / value pairs.
   */
  metadata?: MetadataResponse[];
  /**
   * List of metered attributes.
   */
  meterAttributes?: MeterAttributeResponse[];
  /**
   * The duration(in seconds) after which the license will expire. Set to '0' for no expiry.
   */
  validity?: number;
  /**
   * Leasing strategy for hosted - floating and on - premise license.
   */
  leasingStrategy?: LeasingStrategy;
  /**
   * Locks the activation to the machine user.
   */
  userLocked?: boolean;
  /**
   * The strategy to determine the expiration start date.
   */
  expirationStrategy?: ExpirationStrategy;
  /**
   * Type of the license.
   */
  type?: LicenseType;
  /**
   * CAUTION: This property should only be used if importing old licenses.
   */
  createdAt?: string;
  /**
   * Unique identifier for the product.
   */
  productId: string;
  /**
   * Unique identifier for license policy.
   */
  licensePolicyId?: string;
};

/**
 * License fields that cannot be edited, or set. These are determined by the Web API itself.
 */
type LicenseReadOnlyProperties =
  | "id"
  | "updatedAt"
  | "totalActivations"
  | "totalDeactivations"
  | "expiresAt"
  | "maintenanceExpiresAt"
  | "currentReleaseVersion"
  | "reseller"
  | "user";

/**
 * Request object schema for creating a license.
 */
export type LicenseCreateRequest = Omit<
  LicenseResponse,
  LicenseReadOnlyProperties | "metadata" | "meterAttributes"
> & {
  meterAttributes?: MeterAttributesRequest[];
  metadata?: MetadataRequest[];
};

/**
 * Request object schema for updating license.
 * The `key`, `createdAt`, `type` and `validity` of a license cannot be updated.
 * `licensePolicyId` is a way to conveniently create licenses. It is not relevant when updating licenses.
 */
export type LicenseUpdateRequest = Omit<
  LicenseResponse,
  | LicenseReadOnlyProperties
  | "key"
  | "licensePolicyId"
  | "createdAt"
  | "type"
  | "validity"
  | "metadata"
  | "meterAttributes"
> & {
  meterAttributes?: MeterAttributesRequest[];
  metadata?: MetadataRequest[];
};

/**
 * Supported query parameters for listing licenses
 */
export type LicenseListQueryParameters = {
  /** Unique identifier for the product. */
  "productId"?: string;

  /** Unique identifier for the product version.  */
  "productVersionId"?: string;

  /** Unique identifier for the user.  */
  "userId"?: string;

  /** Unique identifier for the reseller.  */
  "resellerId"?: string;

  /** Matches an email address that is equal to the specified value. */
  "user.email[eq]"?: string;

  /** Matches an email address that is not equal to the specified value. */
  "user.email[ne]"?: string;

  /** Matches an email address  start with the specified value. */
  "user.email[sw]"?: string;

  /**  Matches an email address  end with the specified value. */
  "user.email[ew]"?: string;

  /** Matches an email address contain the specified value. */
  "user.email[cn]"?: string;

  /** Matches an email address does not contain the specified value. */
  "user.email[nc]"?: string;

  /** Matches any of the user emails specified in an array. */
  "user.email[in]"?: string[];

  /** Matches none of the user emails specified in an array. */
  "user.email[nin]"?: string[];

  /** Matches the users whose company name are equal to the specified value. */
  "user.company[eq]"?: string;

  /** Matches the users whose company name are not equal to the specified value. */
  "user.company[ne]"?: string;

  /** Matches the users whose company name start with the specified value. */
  "user.company[sw]"?: string;

  /** Matches the users whose company name end with the specified value. */
  "user.company[ew]"?: string;

  /** Matches the users whose company name contain the specified value. */
  "user.company[cn]"?: string;

  /** Matches the users whose company name does not contain the specified value. */
  "user.company[nc]"?: string;

  /** Matches any of the user company names specified in an array. */
  "user.company[in]"?: string[];

  /* Matches none of the user company names specified in an array. */
  "user.company[nin]"?: string[];

  /** Matches license key(s) are equal to the specified value. */
  "key[eq]"?: string;

  /** Matches license key(s) are not equal to the specified value. */
  "key[ne]"?: string;

  /** Matches license key(s) start with the specified value. */
  "key[sw]"?: string;

  /** Matches license key(s) end with the specified value. */
  "key[ew]"?: string;

  /** Matches license key(s) contain the specified value. */
  "key[cn]"?: string;

  /** Matches license key(s) does not contain the specified value. */
  "key[nc]"?: string;

  /* Matches any of the license keys specified in an array. */
  "key[in]"?: string[];

  /*     Matches none of the license keys specified in an array. */
  "key[nin]"?: string[];

  /** Whether a license is revoked. */
  "revoked"?: boolean;

  /** Whether a license is suspended. */
  "suspended"?: boolean;

  /** License type */
  "type"?: LicenseType;

  /** Matches validity (in seconds) are equal to the specified value. */
  "validity[eq]"?: number;

  /** Matches validity(in seconds) that is not equal to the specified value. */
  "validity[ne]"?: number;

  /** Matches validity(in seconds) that is greater than the specified value. */
  "validity[gt]"?: number;

  /** Matches validity(in seconds) that is greater than or equal to the specified value. */
  "validity[gte]"?: number;

  /** Matches validity(in seconds) that is less than the specified value. */
  "validity[lt]"?: number;

  /** Matches validity(in seconds) that is less than or equal to the specified value. */
  "validity[lte]"?: number;

  /** Matches Allowed Activations that are equal to the specified value. */
  "allowedActivations[eq]"?: number;

  /** Matches Allowed Activations that are not equal to the specified value. */
  "allowedActivations[ne]"?: number;

  /** Matches Allowed Activations that are greater than the specified value. */
  "allowedActivations[gt]"?: number;

  /** Matches Allowed Activations that are greater than or equal to the specified value. */
  "allowedActivations[gte]"?: number;

  /** Matches Allowed Activations that are less than the specified value. */
  "allowedActivations[lt]"?: number;

  /** Matches Allowed Activations that are less than or equal to the specified value. */
  "allowedActivations[lte]"?: number;

  /** Matches Allowed Deactivations that are equal to the specified value. */
  "allowedDeactivations[eq]"?: number;

  /** Matches Allowed Deactivations that are not equal to the specified value. */
  "allowedDeactivations[ne]"?: number;

  /** Matches Allowed Deactivations that are greater than the specified value. */
  "allowedDeactivations[gt]"?: number;

  /** Matches Allowed Deactivations that are greater than or equal to the specified value. */
  "allowedDeactivations[gte]"?: number;

  /** Matches Allowed Deactivations that are less than the specified value. */
  "allowedDeactivations[lt]"?: number;

  /** Matches Allowed Deactivations that are less than or equal to the specified value. */
  "allowedDeactivations[lte]"?: number;

  /** Matches Total Activations that are equal to the specified value. */
  "totalActivations[eq]"?: number;

  /** Matches Total Activations that are not equal to the specified value. */
  "totalActivations[ne]"?: number;

  /** Matches Total Activations that are greater than the specified value. */
  "totalActivations[gt]"?: number;

  /** Matches Total Activations that are greater than or equal to the specified value. */
  "totalActivations[gte]"?: number;

  /** Matches Total Activations that are less than the specified value. */
  "totalActivations[lt]"?: number;

  /** Matches Total Activations that are less than or equal to the specified value. */
  "totalActivations[lte]"?: number;

  /** Matches Total Deactivations that are equal to the specified value. */
  "totalDeactivations[eq]"?: number;

  /** Matches Total Deactivations that are not equal to the specified value. */
  "totalDeactivations[ne]"?: number;

  /** Matches Total Deactivations that are greater than the specified value. */
  "totalDeactivations[gt]"?: number;

  /** Matches Total Deactivations that are greater than or equal to the specified value. */
  "totalDeactivations[gte]"?: number;

  /** Matches Total Deactivations that are less than the specified value. */
  "totalDeactivations[lt]"?: number;

  /** Matches Total Deactivations that are less than or equal to the specified value. */
  "totalDeactivations[lte]"?: number;

  /* Whether activation is allowed inside a virtual machine. */
  "allowVmActivation"?: boolean;

  /* Whether activation is locked to the machine user. */
  "userLocked"?: boolean;

  /* Whether license is expired. */
  "expired"?: boolean;

  /* Expiration strategy of the license. */
  "expirationStrategy"?: ExpirationStrategy;

  /** Matches the creation date that is equal to the specified value. */
  "createdAt[eq]"?: string;

  /** Matches the creation date that is not equal to the specified value. */
  "createdAt[ne]"?: string;

  /** Matches the creation date that is greater than the specified value. */
  "createdAt[gt]"?: string;

  /** Matches the creation date that is greater than or equal to the specified value. */
  "createdAt[gte]"?: string;

  /** Matches the creation date that is less than the specified value. */
  "createdAt[lt]"?: string;

  /** Matches the creation date that is less than or equal to the specified value. */
  "createdAt[lte]"?: string;

  /** Matches a tag name that is equal to the specified value. */
  "tag[eq]"?: string;

  /** Matches a tag name that is not equal to the specified value. */
  "tag[ne]"?: string;

  /** Matches a tag name that start with the specified value. */
  "tag[sw]"?: string;

  /** Matches a tag name that end with the specified value. */
  "tag[ew]"?: string;

  /** Matches a tag name that contain the specified value. */
  "tag[cn]"?: string;

  /** Matches a tag name that does not contain the specified value. */
  "tag[nc]"?: string;

  /* Matches any of the tag names specified in an array. */
  "tag[in]"?: string[];

  /* Matches none of the tag names specified in an array. */
  "tag[nin]"?: string[];

  /** Matches a metadata key that is equal to the specified value. */
  "metadata.key[eq]"?: string;

  /** Matches a metadata key that is not equal to the specified value. */
  "metadata.key[ne]"?: string;

  /** Matches a metadata key that start with the specified value. */
  "metadata.key[sw]"?: string;

  /** Matches a metadata key that end with the specified value. */
  "metadata.key[ew]"?: string;

  /** Matches a metadata key that contain the specified value. */
  "metadata.key[cn]"?: string;

  /** Matches a metadata key that does not contain the specified value. */
  "metadata.key[nc]"?: string;

  /* Matches any of the metadata keys specified in an array. */
  "metadata.key[in]"?: string[];

  /* Matches none of the metadata keys specified in an array. */
  "metadata.key[nin]"?: string[];

  /** Matches a metadata value that is equal to the specified value. */
  "metadata.value[eq]"?: string;

  /** Matches a metadata value that is not equal to the specified value. */
  "metadata.value[ne]"?: string;

  /** Matches a metadata value that start with the specified value. */
  "metadata.value[sw]"?: string;

  /** Matches a metadata value that end with the specified value. */
  "metadata.value[ew]"?: string;

  /** Matches a metadata value that contain the specified value. */
  "metadata.value[cn]"?: string;

  /** Matches a metadata value that does not contain the specified value. */
  "metadata.value[nc]"?: string;

  /** Matches any of the metadata values specified in an array. */
  "metadata.value[in]"?: string[];

  /** Matches none of the metadata values specified in an array. */
  "metadata.value[nin]"?: string[];
};
