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

await main();

/**
 * This function creates a User and then subsequently creates a license linked to that user.
 */
async function main() {
  try {
    const userResponse = await cryptlexWebApiClient.createUser({
      email: "doedoe@doedoedoe.com",
      firstName: "Doe Doe",
      lastName: "Doe",
      password: "secret_password_100",
      role: "user",
    });
    console.log(
      "\nSuccessfully created user: " + JSON.stringify(userResponse.data)
    );

    // Create a license which is linked to the new user in the product defined by PRODUCT_ID
    const licenseResponse = await cryptlexWebApiClient.createLicense({
      productId: PRODUCT_ID,
      userId: userResponse.data.id,
    });
    console.log(
      "\nSuccessfully created license: " + JSON.stringify(licenseResponse.data)
    );
  } catch (error) {
    console.error(error);
  }
}
