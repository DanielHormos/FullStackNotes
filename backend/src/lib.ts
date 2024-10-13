type Note = {
  id: number;
  content: string;
};

let notes: Note[] = [
  {
    id: 1,
    content: "HejsanHoppsan",
  },
];

export function addNote(note: { content: string }): Note {
  const newNote = { id: notes.length + 1, content: note.content };
  notes.push(newNote);
  return newNote;
}

export function getNotes() {
  return notes;
}

export function getResponseText(): string {
  return "Response message fron lib.ts file";
}
