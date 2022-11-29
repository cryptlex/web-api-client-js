/**
 * All imports should explicitly define the .js extension.
 * This is because TypeScript does not modify the import statement after compilation. This leads to the
 * import statements being non-functional in many runtimes.
 *
 * https://github.com/microsoft/TypeScript/issues/40878
 */
import CryptlexWebApiClient from "./client.js";
import CryptlexWebApiClientOptions from "./client-options.js";

export { CryptlexWebApiClient, CryptlexWebApiClientOptions };
