const container = document.querySelector('.container');
const br = document.createElement("br")
const hr = document.createElement("hr")

const addList = () => {
    const list = document.createElement("div");
    list.className = "list";

    const listTitle = document.createElement("input");
    listTitle.className = "list-title list-item";
    listTitle.value = "New List";

    const deleteButton = document.createElement("span");
    deleteButton.className = "material-symbols-outlined btn-delete list-item";
    deleteButton.innerText = "cancel";
    deleteButton.addEventListener("click", () => {
        container.removeChild(list);
    });

    const addButton = document.createElement("button")
    addButton.className = "btn-add material-symbols-outlined list-item"
    addButton.innerText = "add"
    addButton.addEventListener("click", () => {
        noteTitle = document.createElement("input")
        noteText = document.createElement("textarea")
        noteTitle.value = "Note Title"
        noteTitle.className = "note-title list-item"

        const deleteNote = document.createElement("span");
        deleteNote.className = "material-symbols-outlined note-delete";
        deleteNote.innerText = "cancel";
        deleteNote.addEventListener("click", () => {
            list.removeChild(deleteNote);
            list.removeChild(noteText);
            list.removeChild(noteTitle);
        });

        list.appendChild(deleteNote)
        list.appendChild(noteTitle)
        list.appendChild(noteText);

    })

    list.appendChild(deleteButton);
    list.appendChild(br)
    list.appendChild(listTitle);
    list.appendChild(br)
    list.appendChild(addButton);

    container.appendChild(list);
}
