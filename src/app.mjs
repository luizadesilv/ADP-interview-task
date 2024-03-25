import { createServer } from "http";
import axios from "axios";
import { GET_TASK_URL, POST_TASK_URL } from "./constants.mjs";
import { getTopEarnerTransactionIds } from "./utils.mjs";

const server = createServer(async (req, res) => {
  try {
    const response = await axios.get(GET_TASK_URL);
    const transactions = response.data.transactions;

    const topEarnerTransactionIds = getTopEarnerTransactionIds(transactions);

    const postResponse = await axios.post(POST_TASK_URL, {
      id: response.data.id,
      result: topEarnerTransactionIds,
    });

    console.log({
      id: response.data.id,
      result: topEarnerTransactionIds,
    });

    res.write(JSON.stringify(postResponse.data));
    res.end();
  } catch (error) {
    console.error(error);
  }
});

export default server;
