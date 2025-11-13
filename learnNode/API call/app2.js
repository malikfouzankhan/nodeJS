// HTTP methods
/*
HTTP methods tell the server what action the client wants to perform.
1. GET
    - Used to fetch data
    - No body
    - Safe & idempotent

    Example: Get a list of users

2. POST
    - Used to create something
    - sends data in body

    Example: Register a new user

3. PUT
    - Used to replace/update full record
    - Idempotent (same request = same result)

    Example: Update entire user data

4. PATCH
    - Used to update partially
    - Modify only selected fields

    Example: Update only user's name

5. DELETE
    - Remove a resource

    Example: Delete user by id

6. OPTIONS
    - Used in CORS
    - Browser checks what methods are allowed
*/

// HTTP Status Codes
/*
1. 1xx - Informational
    - 100 continue -> server ready for request body
    - 101 Switching protocols -> Upgrading to WebSocket

2. 2xx - Success
    - 200 OK -> Request successful
    - 201 Created -> New resource created (POST)
    - 202 Accepted -> Processing but not completed
    - 204 No content -> Success but no response body (DELETE/PUT)

3. 3xx - Redirection
    - 301 Moved Permanently -> New URL
    - 302 Found (Temporary Redirect)
    - 304 Not Modified -> Use cached content

4. 4xx - Client Errors
    - 400 Bad Request -> Wrong input/body
    - 401 Unauthorized -> No/Invalid token
    - 403 Forbidden -> You are not allowed
    - 404 Not Found -> Resource not found
    - 405 Method Not Allowed -> Wrong HTTP method
    - 409 Conflict -> Duplicate record / data conflict
    - 429 Too Many Requests -> Rate limit exceeded

5. 5xx - Server Errors
    - 500 Internal Server Error -> Something crashed
    - 501 Not implemented -> Method not supported
    - 502 Bad Gateway -> Server upstream failed
    - 503 Service Unavailable -> Server down/overloaded
    - 504 Gateway Timedout -> Upstream took too long
*/