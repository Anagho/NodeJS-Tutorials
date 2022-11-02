##### Tutorial 11
# JWT Authentication
This tutorial covers authentication with json web token (jwt).
## JWT - JSON WEB TOKEN
> JWT is a form of user identification that is issued after the initial user authentication has taken place.
* When a user completes their registration and they are authenticated, our REST API will issue the client application an **access token** and a **refresh token.**
* The access token is given a short time before it expires, for example: 5 - 15 minutes.
* The refresh token is given a longer duration before it expires possibly, several hours, a day or even days.

### Hazards of JWT
1. **XSS:** Cross-Site Scripting.
2. **CSRF:** Cross-Site Request Forgery.

#### Access Token
> API sends and receives access token as json data. To avoid the above risks(hazards), it is recommended for frontend client applications to only store access token in memory, so they will be automatically lost when the application is closed. Do not store access tokens in local storage or in a cookie.
> Essientially, if you store access tokens with javascript, a hacker can also retrieve it with javascript, so it is also a risk.
> We will keep access token in memory which is also referred to as the current application state.

#### Refresh Token
> API issues refresh tokens in an *httpOnly Cookie*. This type of cookie is not accessible with javascript. The refresh token do need to have an expiration which will then require users to log in again.
> Reresh tokens should not have the ability to issue new refresh token, because this will grant indefinite access if the refresh token falls into the wrong hands.

#### Access Token Process
* Access token is issued during user authorization.
* User application can then access the REST API protected routes with the access token until it expires.
* API will verify the access token with middleware everytime the access token is used to make a request.
* When the access token is expired, the user application will need to sed a refresh token to the API refresh endpoint to get a new access token.

#### Refresh Token Process
* Refresh token is issued during user authorization.
* REST API refresh endpoint will verify the token and cross reference the refresh token in a database.
* Storing a reference to a refresh token in a database will allow refresh tokens to be terminated only when the user decides to logout.
* Refresh tokens needs to be allowed to expire so indefinite access will not be gained.

