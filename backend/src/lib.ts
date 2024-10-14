type Note = {
  id: number;
  content: string;
};

let notes: Note[] = [];

export function addNote(note: { content: string }): Note {
  const newNote = { id: notes.length + 1, content: note.content };
  notes.push(newNote);
  return newNote;
}

export function getNotes(): Note[] {
  return notes;
}
