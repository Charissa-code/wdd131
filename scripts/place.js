const today = new Date();
const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const temp = 10;
const speed = 10;

function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * speed ** .16)
}
console.log(calculateWindChill(temp, speed));

document.querySelector("#windChill").textContent = calculateWindChill(temp, speed).toFixed(1);

if (temp <= 10 && speed > 4.8) {
  document.querySelector("#windChill").textContent = calculateWindChill(temp, speed).toFixed(1);
}

else {
   document.querySelector("#windChill").textContent = ("N/A");
}