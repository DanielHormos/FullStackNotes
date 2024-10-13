window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:3232/notes");
    console.log("Response: ", response);

    if (!response.ok)
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );

    const notes = await response.json();
    console.log("Notes data: ", notes);

    if (Array.isArray(notes)) {
      notes.forEach(displayNote);
    } else console.error("Error: Notes is not an array", notes);
  } catch (error) {
    console.error("Fetch error: ", error);
  }
});

document
  .getElementById("noteForm")
  ?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const noteInput = (document.getElementById("noteInput") as HTMLInputElement)
      .value;

    if (!noteInput) return;

    const response = await fetch("http://localhost:3232/notes", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ content: noteInput }),
    });

    const result = await response.json();

    displayNote(result);

    (document.getElementById("noteInput") as HTMLInputElement).value = "";
  });

function displayNote(note: { content: string }) {
  const notesList = document.querySelector("#notesList ul");
  if (!notesList) return;
  const noteItem = document.createElement("li");
  noteItem.textContent = note.content;
  notesList.appendChild(noteItem);
}
