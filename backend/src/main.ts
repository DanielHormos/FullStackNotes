import * as http from "node:http";
import { getResponseText } from "./lib";

const port = 3232;
const host = "localhost";

export function main() {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("contentType", "text/plain");
    const responsText = getResponseText();
    res.end(responsText);
  });

  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}
