const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");




button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    deleteButton.addEventListener("click", function () {
      li.remove();
    })
    list.append(li);
    input.value = "";
  }
    input.focus();

});







