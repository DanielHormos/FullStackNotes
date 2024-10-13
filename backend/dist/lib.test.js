"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const lib_1 = require("./lib");
(0, node_test_1.describe)(`Note functions`, () => {
    it("Should add a new note and return it", () => {
        const note = (0, lib_1.addNote)("this is first tried note");
        expect(note.content).toBe("this is first tried note");
    });
});
