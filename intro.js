/*
// The beginning - 2009, Ryan Dahl's vision

In 2009, a software engineer named Ryan Dahl from the US created Node.js.

At that time:
    - JavaScript was only used in browsers.
    - Servers were built using PHP, Python or Java.
    - Each request on the server would create a new thread, consuming memory and slowing things down under heavy load.

Ryan found this inefficient, especially after seeing how web browsers handled asynchronous events (non-blocking operations).

He wanted the same non-blocking behaviour on the server.
That's how Node.js was born - to bring JavaScript to the backend, but in a faster and more scalable way.


// The Core Idea - Event-Driven & Non-Blocking I/O

Ryan built Node.js using:
    - Google's V8 Engine (the same engine that powers chrome)
    - libuv (a C library for asynchronous I/O)

This contribution allowed Node.js to:
    - Handle many requests at once using a single thread
    - Avoid blocking while waiting for tasks like file reading or database queries

In short:
Node.js introduced a single-threaded, event-driven architecture that made servers lightweight and fast.


// Early Days (2009-2011)
    - 2009: Node.js was released at the JSConf EU conference.
    - 2010: npm (Node Package Manager) was introduced - the game changer. Developers could easily install and share reusable packages.
    - 2011: Companies like LinkedIn and Uber started using Node.js for their backends due to its speed and scalability.

Example:
LinkedIn moved from Ruby on Rails to Node.js and saw their servers handle 10x more traffic with fewer machines.


// Rise in Popularity (2012-2015)
Node.js rapidly became the go-to choice for building:
    - APIs
    - Real-time applications (chat, live updates)
    - Command-line tools
    - Developer utilities

Big companies joined:
    - Netflix (for streaming)
    - PayPal (for faster APIs)
    - eBay, Walmart and NASA adopted Node.js in production.

However, around 2014, there was community tension - development was slow and contributors were frustrated.



// Today's Ecosystem
The Node.js ecosystem is massive:
    - Over 2 million+ packages on npm
    - Used by 90%+ of modern web developers
    - Foundation for frameworks like Express.js, Fastify and AdonisJS

It's no longer "just JavaScript on the server" - it's the backbone of the modern web, connecting APIs, microservices and tools.



Summary Timeline
----------------
Year            Event
2009            Ryan Dahl creates Node.js
2010            npm(Node Package Manager) is launched
2011            LinkedIn & Uber adopt Node.js
2014            io.js fork due to governance issues
2015            io.js merges back -> Node.js Foundation formed
2017+           Async/await, ES modules and major improvements
2020s           Node.js becomes a global standard for web servers
*/