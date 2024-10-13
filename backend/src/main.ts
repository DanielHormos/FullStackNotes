import * as http from "node:http";
import { getResponseText, addNote, getNotes } from "./lib";

const port = 3232;
const host = "localhost";

export function main() {
  const server = http.createServer((req, res) => {
    if (req.method === "get" && req.url === "/notes") {
      const notes = getNotes();
      res.statusCode = 200;
      res.setHeader("contentType", "text/plain");
      res.end(JSON.stringify(notes));
    }
    if (req.method === "post" && req.url === "/notes") {
    }
  });

  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}
