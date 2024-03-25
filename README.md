# ADP Interview Task

## :pencil: Description:

JavaScript (node.js) server application that makes an HTTP GET request to the `get-task` endpoint and handles data related to employee transactions.

It also makes an HTTP POST request to the `submit-task` endpoint with a JSON object containing the largest 'alpha' type transactions of the employee with the highest total earnings in the year prior (`2023`) to the current one.

The final goal is to receive a `200` status code from the `submit-task` endpoint that means the requests were successful.

## :computer: Getting started:

Make sure you have installed [noje.js](https://nodejs.org/en) on your machine to be able to use `npm`.

1. Use `git clone` to clone this repo
2. Use `npm install`
3. use `npm start` to run the application

Server running at http://localhost:3000

## :dart: Expected Behavior:

After setting up and running the application, you should be able to see "Correct" on the browser if the status code is `200` (Success).

In the terminal, you will see the `id` and `results` sent, as well as the status code.

## :books: Libraries Used:

`Axios` library was used to make HTTP requests.
