const myButton = document.getElementById("my-button");
const addButton = document.getElementById("add-item");
const list = document.getElementById("list");
const text = document.getElementById("area-of-text");

function prntHW() {
  console.log("hello world");
  let header = document.getElementById("main-header");
  header.innerText = "My notebook";
}

function addItem() {
  const listItem = document.createElement("li");

  listItem.innerText = text.value;
  list.appendChild(listItem);
}

myButton.onclick = prntHW;
addButton.onclick = addItem;
