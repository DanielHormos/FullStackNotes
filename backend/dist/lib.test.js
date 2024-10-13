"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const lib_1 = require("./lib");
(0, node_test_1.describe)(`Note functions`, () => {
    it("Should add a new note and return it", () => {
        const note = (0, lib_1.addNote)("note1");
        expect(note.content).toBe("note1");
    });
    it("should get all notes", () => {
        (0, lib_1.addNote)("note2");
        const result = (0, lib_1.getNotes)();
        expect(result[0].content).toBe("note1");
        expect(result[1].content).toBe("note2");
    });
});
