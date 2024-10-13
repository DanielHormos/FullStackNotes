"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = addNote;
exports.getNotes = getNotes;
exports.getResponseText = getResponseText;
const notes = [];
function addNote(content) {
    const newNote = { id: notes.length + 1, content };
    notes.push(newNote);
    return newNote;
}
function getNotes() {
    return notes;
}
function getResponseText() {
    return "Response message fron lib.ts file";
}
