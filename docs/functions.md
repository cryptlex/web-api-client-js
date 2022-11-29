## Functions

<dl>
<dt><a href="#createLicense">createLicense(license)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Create a license.</p>
</dd>
<dt><a href="#updateLicense">updateLicense(id, license)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Updates the specified license by setting the values of the existing license to the properties passed.
Any properties not provided will be left unchanged.</p>
</dd>
<dt><a href="#deleteLicense">deleteLicense(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Permanently deletes a license. WRANING: This cannot be undone.</p>
</dd>
<dt><a href="#getLicenses">getLicenses(page, limit, parameters)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;Array.&lt;LicenseResponse&gt;&gt;&gt;</code></dt>
<dd><p>Returns a list of licenses. The licenses are returned sorted by creation date in ascending order.</p>
</dd>
<dt><a href="#getLicense">getLicense(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Retrieves the details of an existing license.</p>
</dd>
<dt><a href="#renewLicense">renewLicense(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Extends the license expiry by it&#39;s validity.</p>
</dd>
<dt><a href="#extendLicense">extendLicense(id, extensionLength)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code></dt>
<dd><p>Extends the license expiry by extension length.</p>
</dd>
<dt><a href="#createUser">createUser(user)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code></dt>
<dd><p>Creates a new user.</p>
</dd>
<dt><a href="#deleteUser">deleteUser(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code></dt>
<dd><p>Permanently deletes an user. It cannot be undone.</p>
</dd>
<dt><a href="#getUser">getUser(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code></dt>
<dd><p>Retrieves the details of an existing user.</p>
</dd>
<dt><a href="#getUsers">getUsers(page, limit, parameters)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;Array.&lt;UserResponse&gt;&gt;&gt;</code></dt>
<dd><p>Returns a list of users. The users are returned sorted by creation date in ascending order.</p>
</dd>
<dt><a href="#updateUser">updateUser(id, user)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code></dt>
<dd><p>Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
</dd>
<dt><a href="#generateResetPasswordToken">generateResetPasswordToken(id)</a> ⇒ <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code></dt>
<dd><p>Generates the reset password token (url encoded) for users with &#39;user&#39; role.
It should only be used for custom portals to implement password reset.</p>
</dd>
</dl>

<a name="createLicense"></a>

## createLicense(license) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Create a license.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param   | Type                              | Description              |
| ------- | --------------------------------- | ------------------------ |
| license | <code>LicenseCreateRequest</code> | License object to create |

<a name="updateLicense"></a>

## updateLicense(id, license) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Updates the specified license by setting the values of the existing license to the properties passed.
Any properties not provided will be left unchanged.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param   | Type                              | Description                                    |
| ------- | --------------------------------- | ---------------------------------------------- |
| id      | <code>string</code>               | Unique identifier for the license.             |
| license | <code>LicenseUpdateRequest</code> | License object containing properties to update |

<a name="deleteLicense"></a>

## deleteLicense(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Permanently deletes a license. WRANING: This cannot be undone.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                        |
| ----- | ------------------- | ---------------------------------- |
| id    | <code>string</code> | Unique identifier for the license. |

<a name="getLicenses"></a>

## getLicenses(page, limit, parameters) ⇒ <code>Promise.&lt;ApiResponse.&lt;Array.&lt;LicenseResponse&gt;&gt;&gt;</code>

Returns a list of licenses. The licenses are returned sorted by creation date in ascending order.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;Array.&lt;LicenseResponse&gt;&gt;&gt;</code> - Promise that resolves to the Web API response

| Param      | Type                                    | Description                                                                     |
| ---------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| page       | <code>number</code>                     | Page number. Starts with 1                                                      |
| limit      | <code>number</code>                     | The number of licenses to fetch or 'Page size'. Value can be between 1 and 100. |
| parameters | <code>LicenseListQueryParameters</code> | Parameters to filter the result of the list                                     |

<a name="getLicense"></a>

## getLicense(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Retrieves the details of an existing license.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                        |
| ----- | ------------------- | ---------------------------------- |
| id    | <code>string</code> | Unique identifier for the license. |

<a name="renewLicense"></a>

## renewLicense(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Extends the license expiry by it's validity.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                        |
| ----- | ------------------- | ---------------------------------- |
| id    | <code>string</code> | Unique identifier for the license. |

<a name="extendLicense"></a>

## extendLicense(id, extensionLength) ⇒ <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code>

Extends the license expiry by extension length.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;LicenseResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param           | Type                | Description                                                           |
| --------------- | ------------------- | --------------------------------------------------------------------- |
| id              | <code>string</code> | Unique identifier for the license.                                    |
| extensionLength | <code>number</code> | License extension duration (in seconds) to extend the license expiry. |

<a name="createUser"></a>

## createUser(user) ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code>

Creates a new user.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                           | Description                |
| ----- | ------------------------------ | -------------------------- |
| user  | <code>UserCreateRequest</code> | User creation request body |

<a name="deleteUser"></a>

## deleteUser(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code>

Permanently deletes an user. It cannot be undone.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                     |
| ----- | ------------------- | ------------------------------- |
| id    | <code>string</code> | Unique identifier for the user. |

<a name="getUser"></a>

## getUser(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code>

Retrieves the details of an existing user.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                     |
| ----- | ------------------- | ------------------------------- |
| id    | <code>string</code> | Unique identifier for the user. |

<a name="getUsers"></a>

## getUsers(page, limit, parameters) ⇒ <code>Promise.&lt;ApiResponse.&lt;Array.&lt;UserResponse&gt;&gt;&gt;</code>

Returns a list of users. The users are returned sorted by creation date in ascending order.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;Array.&lt;UserResponse&gt;&gt;&gt;</code> - Promise that resolves to the Web API response

| Param      | Type                                 | Description                                                         |
| ---------- | ------------------------------------ | ------------------------------------------------------------------- |
| page       | <code>number</code>                  | The page number.                                                    |
| limit      | <code>number</code>                  | The number of records per page. Must be a number between 1 and 100. |
| parameters | <code>UserListQueryParameters</code> | Parameters to filter the result of the list                         |

<a name="updateUser"></a>

## updateUser(id, user) ⇒ <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code>

Updates the specified user by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;UserResponse&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                           | Description                    |
| ----- | ------------------------------ | ------------------------------ |
| id    | <code>string</code>            | Unique identifier for the user |
| user  | <code>UserUpdateRequest</code> | User update request object     |

<a name="generateResetPasswordToken"></a>

## generateResetPasswordToken(id) ⇒ <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code>

Generates the reset password token (url encoded) for users with 'user' role.
It should only be used for custom portals to implement password reset.

**Kind**: global function  
**Returns**: <code>Promise.&lt;ApiResponse.&lt;any&gt;&gt;</code> - Promise that resolves to the Web API response

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| id    | <code>string</code> | Unique identifier for the user |
