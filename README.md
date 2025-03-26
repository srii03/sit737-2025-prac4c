Advanced Calculator Microservice
Overview
This project expands the functionality of a basic calculator microservice by introducing advanced arithmetic operations such as exponentiation, square root, and modulo operations. The microservice is built using Node.js and is designed to be simple, yet highly extensible for future enhancements.

Setup
Step 1: Install Dependencies
Before you can run the microservice, ensure you have Node.js installed. If you don’t have it installed yet, download and install it from here.

Once Node.js is installed, navigate to your project directory and run the following command to install the necessary dependencies:

nginx
Copy
Edit
npm install
Step 2: Run the Service
To run the service locally, use the following command:

nginx
Copy
Edit
node app.js
The microservice will be up and running at http://localhost:3000.

API Endpoints
The following API endpoints are available:

1. Exponentiation
Endpoint: GET /exponentiation?base=<base>&exponent=<exponent>

Description: Returns the result of raising the base to the power of the exponent.

Example:

Request: GET /exponentiation?base=2&exponent=3

Response: 8

2. Square Root
Endpoint: GET /sqrt?number=<number>

Description: Returns the square root of the given number.

Example:

Request: GET /sqrt?number=16

Response: 4

3. Modulo
Endpoint: GET /modulo?dividend=<dividend>&divisor=<divisor>

Description: Returns the remainder of the division of dividend by divisor.

Example:

Request: GET /modulo?dividend=10&divisor=3

Response: 1

Error Handling
The calculator microservice employs robust error handling to ensure smooth operation. In case of invalid input or division by zero, the API will return an error message indicating the problem.

For instance:

Invalid input:

Request: GET /exponentiation?base=2&exponent=non-number

Response: {"error": "Invalid input. Please provide valid numbers."}

Division by zero:

Request: GET /modulo?dividend=10&divisor=0

Response: {"error": "Cannot divide by zero."}

How to Test the Service
You can test the service by sending HTTP requests to the various endpoints mentioned above. You can use tools such as:

Postman

curl

Your browser (for simple GET requests)

For example, you can test the Exponentiation endpoint by navigating to this URL in your browser:

bash
Copy
Edit
http://localhost:3000/exponentiation?base=2&exponent=3
Future Improvements
This microservice can be further enhanced by:

Adding more advanced operations like logarithms and trigonometric functions.

Implementing a more sophisticated error handling system using a centralized error handler.

Adding a logging mechanism to track usage patterns.

Repository
This project is hosted on GitHub. You can access the repository and submit contributions at:

https://github.com/srii03/sit737-2025-prac4c
