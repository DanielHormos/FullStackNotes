import * as http from "node:http";
import { addNote, getNotes } from "./lib";

const port = 3232;

export function main() {
  const server = http.createServer((req, res) => {
    if (req.method === "get" && req.url === "/notes") {
      const notes = getNotes();
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(notes));
    }
    if (req.method === "post" && req.url === "/notes") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const note = JSON.parse(body);

        const result = addNote(note);
        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify(result));
      });
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not found");
    }
  });

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
