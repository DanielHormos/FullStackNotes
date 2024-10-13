"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const http = __importStar(require("node:http"));
const lib_1 = require("./lib");
const port = 3232;
const host = "localhost";
function main() {
    const server = http.createServer((req, res) => {
        if (req.method === "get" && req.url === "/notes") {
            const notes = (0, lib_1.getNotes)();
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
