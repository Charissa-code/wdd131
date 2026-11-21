const today = new Date();
const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;


const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");
menuButton.addEventListener("click", () => {
	menuButton.classList.toggle("show");
  nav.classList.toggle("show");
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fort Worth Texas",
    location: "Fort Worth, Texas USA",
    dedicated: "2027, January, 10",
    area: 29630,
    imageUrl:
      "https://charissa-code.github.io/wdd131/images/fort-worth-temple-wide.webp"
  },
  {
    templeName: "Frankfurt Germany",
    location: "Frankfurt Germany",
    dedicated: "1987, August, 28",
    area: 32895,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/320x200/frankfurt-temple-3-2278181.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen  Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
]



createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
  const pageTitle = document.querySelector("main h1");
  pageTitle.textContent = "Home"
  createTempleCard(temples);
})

oldLink.addEventListener("click", () => {
  let old = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  const pageTitle = document.querySelector("main h1");
  pageTitle.textContent = "Old";
  createTempleCard(old)
})

newLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  const pageTitle = document.querySelector("main h1");
  pageTitle.textContent = "New";
  createTempleCard(newTemples)
})

largeLink.addEventListener("click", () => {
  let large = temples.filter(temple => (temple.area > 90000));
  const pageTitle = document.querySelector("main h1");
  pageTitle.textContent = "Large";
  createTempleCard(large)
})

smallLink.addEventListener("click", () => {
  let small = temples.filter(temple => (temple.area < 10000));
  const pageTitle = document.querySelector("main h1");
  pageTitle.textContent = "Small"
  createTempleCard(small)
})


function createTempleCard(filteredTemples) {
  document.querySelector(".cards-grid").innerHTML = "";

  filteredTemples.forEach(function (temple) {
    const templeCard = document.createElement("section");
    const name = document.createElement("h3");   
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedication: </span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area Square Feet: </span> ${temple.area}`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");

    templeCard.append(name, location, dedication, area, image);
    
    document.querySelector(".cards-grid").appendChild(templeCard);
    

  }); 

}



