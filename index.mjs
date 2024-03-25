import server from "./src/app.mjs";
import { PORT } from "./src/constants.mjs";

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
