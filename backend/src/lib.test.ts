import { describe } from "node:test";
import { addNote, getNotes } from "./lib";

describe(`Note functions`, () => {
  it("Should add a new note and return it", () => {
    const note = addNote({ content: "note1" });

    expect(note.content).toBe("note1");
  });

  it("should get all notes", () => {
    addNote({ content: "note2" });

    const result = getNotes();
    expect(result[0].content).toBe("note1");
    expect(result[1].content).toBe("note2");
  });
});
