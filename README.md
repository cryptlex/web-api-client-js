# @cryptlex/web-api-client

[![latest-npm-version](https://badge.fury.io/js/@cryptlex%2Fweb-api-client.svg)](https://www.npmjs.com/package/@cryptlex/web-api-client) ![build](https://github.com/cryptlex/web-api-client-js/actions/workflows/release.yml/badge.svg)

The Cryptlex Web API Client library provides access to the Cryptlex Web API from applications written in JavaScript. The library maintains types for supporting TypeScript(=>3.5).

# Requirements

Node 14 or higher

# Installation

```
npm install @cryptlex/web-api-client
```

# Usage

The library needs to be configured with the a valid access token. This is done in the `CryptlexWebApiClientOptions` instantiation.

```ts
import {
  CryptlexWebApiClient,
  CryptlexWebApiClientOptions,
} from "@cryptlex/web-api-client";

const ACCESS_TOKEN = "**ACCESS_TOKEN**";
const PRODUCT_ID = "**PRODUCT_ID**";

const cryptlexWebApiClientOptions = new CryptlexWebApiClientOptions(
  ACCESS_TOKEN
);
const cryptlexWebApiClient = new CryptlexWebApiClient(
  cryptlexWebApiClientOptions
);

try {
  // Create a license in the product defined by PRODUCT_ID
  const licenseResponse = await cryptlexWebApiClient.createLicense({
    productId: PRODUCT_ID,
  });
  console.log(
    "\nSuccessfully created license: " + JSON.stringify(licenseResponse.data)
  );
} catch (error) {
  console.error(error);
}
```

# Functions

The extent of this library can be seen in the [complete list of functions](https://github.com/cryptlex/web-api-client-js/blob/main/docs/functions.md) available.
