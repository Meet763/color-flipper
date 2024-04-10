const colors = ["green", "red", "blue", "yellow", "black", "pink", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', changeColor = () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}