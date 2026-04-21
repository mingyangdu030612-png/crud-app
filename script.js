const nameInput = document.getElementById("nameInput");
const descInput = document.getElementById("descInput");
const createBtn = document.getElementById("createBtn");
const listContainer = document.getElementById("listContainer");

let items = [];
let editIndex = -1;

function renderItems() {
  listContainer.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p >
      <div class="card-buttons">
        <button onclick="editItem(${index})">Update</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </div>
    `;

    listContainer.appendChild(card);
  });
}

createBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const description = descInput.value.trim();

  if (!name || !description) {
    alert("Please enter both name and description.");
    return;
  }

  if (editIndex === -1) {
    items.push({ name, description });
  } else {
    items[editIndex] = { name, description };
    editIndex = -1;
    createBtn.textContent = "Create";
  }

  nameInput.value = "";
  descInput.value = "";
  renderItems();
});

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function editItem(index) {
  nameInput.value = items[index].name;
  descInput.value = items[index].description;
  editIndex = index;
  createBtn.textContent = "Save Update";
}

renderItems();