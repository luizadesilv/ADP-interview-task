import { createServer } from "http";
import axios from "axios";
import { GET_TASK_URL, POST_TASK_URL, TransactionTypes } from "./constants.js";
import { getTopEarnerTransactionIds } from "./utils.js";

// Create server
const server = createServer(async (req, res) => {
  try {
    // Make an HTTP GET request to get-task endpoint
    const response = await axios.get(GET_TASK_URL);

    // Extract the id and transactions from the response data
    const id = response.data.id;
    const transactions = response.data.transactions;

    // Get the 'alpha' type transaction IDs of the top earner employee
    const topEarnerTransactionIds = getTopEarnerTransactionIds(
      transactions,
      TransactionTypes.ALPHA
    );

    // Make an HTTP POST request to submit-task endpoint
    const postResponse = await axios.post(POST_TASK_URL, {
      id: id,
      result: topEarnerTransactionIds,
    });

    // Throw an error if the status code is not 200 (Success)
    if (postResponse.status !== 200) {
      throw new Error(`HTTP error! status: ${postResponse.status}`);
    }

    console.log({
      id: response.data.id,
      result: topEarnerTransactionIds,
    });

    // Log the status code of the response
    console.log("submit-task endpoint return: ", postResponse.status);

    // Send the response data as JSON
    res.write(JSON.stringify(postResponse.data));
    res.end();
  } catch (error) {
    // Catch and log any errors on the server
    console.error(error);
  }
});

export default server;
