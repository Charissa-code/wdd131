const today = new Date();
const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("show");
	nav.classList.toggle("show");
});
