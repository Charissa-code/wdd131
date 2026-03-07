const today = new Date();
const year = document.querySelector("#currentyear");

year.textContent = today.getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;
