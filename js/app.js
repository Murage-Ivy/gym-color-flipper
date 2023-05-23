const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const simpleColor = getRandomNumber();
  color.textContent = colors[simpleColor];
  document.body.style.backgroundColor = colors[simpleColor];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
