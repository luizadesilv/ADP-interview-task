import server from "./src/app.js";
import { PORT } from "./src/constants.js";

// Start the server running at http://localhost:3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
