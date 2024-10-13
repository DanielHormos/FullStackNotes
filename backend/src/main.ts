import * as http from "node:http";
import { addNote, getNotes } from "./lib";

const port = 3232;

export function main() {
  console.log(getNotes());

  const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method === "GET" && req.url === "/notes") {
      const notes = getNotes();
      console.log("Notes array: ", notes);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(notes));
    } else if (req.method === "POST" && req.url === "/notes") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const note = JSON.parse(body);
        const result = addNote(note);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
    }
  });

  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
