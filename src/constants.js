// This file contains the constants used in the application
const API_BASE_URL = "https://interview.adpeai.com/api/v2";

const GET_TASK_URL = `${API_BASE_URL}/get-task`;
const POST_TASK_URL = `${API_BASE_URL}/submit-task`;
const PORT = 3000;

const TransactionTypes = {
  ALPHA: "alpha",
  BETA: "beta",
};

export { GET_TASK_URL, POST_TASK_URL, PORT, TransactionTypes };
