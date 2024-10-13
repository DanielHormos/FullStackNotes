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
