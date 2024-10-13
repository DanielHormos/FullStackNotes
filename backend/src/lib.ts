export function getResponseText(): string {
  return "Response message fron lib.ts file";
}

type Note = {
  id: number;
  content: string;
};

const notes: Note[] = [];

export function addNote(content: string): Note {
  const newNote = { id: notes.length + 1, content };
  notes.push(newNote);
  return newNote;
}
