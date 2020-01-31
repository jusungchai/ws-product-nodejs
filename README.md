Get Started
---
1. Clone this repository
2. Run "npm install" to install all dependencies
3. Run "npm run dev"
4. Navigate to "localhost:5555" on your browser

### Notes
---
- For demonstration purpose, rate limit has been set up to 10 requests with timeout of 10 seconds from first request which causes the timeout
- Some extra routes have been added to support Question 2a of the assignment
- Limiter has been applied as a global limiter to the server
- Limiter is implemented to handle unique ip addresses to demonstrate in real life case
- Should technically change limiter value based on user's id to allow more access for paid users
- IP addresses currently gets stored in an object. However as data increases, it should be stored on a separate database

#### Deployment
---
- https://jay-eq-api-limiter.herokuapp.com/

- Author: EQ Works
- Contributer: Jay Chai
