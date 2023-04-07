const bigContainer = document.querySelector(".big-container");
const smallContainers = document.querySelectorAll(".smaller-container");
const inner = document.querySelector(".inner");
const remainingText = document.querySelector(".remaining");
const firstContainer = document.getElementById("1");
const secondContainer = document.getElementById("2");
const thirdContainer = document.getElementById("3");
const fourthContainer = document.getElementById("4");
const fifthContainer = document.getElementById("5");
const sixthContainer = document.getElementById("6");
const seventhContainer = document.getElementById("7");
const eightContainer = document.getElementById("8");

let clicked = false;

const fillLargeContainer = () => {
  inner.style.height = "blue";
};

// const fillFirstContainer = () => {
//   firstContainer.style.backgroundColor = "blue";
//   firstContainer.style.color = "white";
// };

let innerHeight = 0;
let remaining = 8;

const fillContainer = (container) => {
  if (innerHeight < 292 && container.style.backgroundColor != "blue") {
    innerHeight += 36.5;
    --remaining;
    container.style.backgroundColor = "blue";
    container.style.color = "white";
    inner.style.height = `${innerHeight}px`;
    remainingText.textContent = `${remaining}, 250ml bottles remaining`;
    remainingText.classList = "show-remaining";
  } else if (container.style.color == "white") {
    innerHeight -= 36.5;
    ++remaining;
    container.style.backgroundColor = "white";
    container.style.color = "blue";
    inner.style.height = `${innerHeight}px`;
    remainingText.textContent = `${remaining}, 250ml bottles remaining`;
  }
  if (innerHeight === 0) {
    remainingText.classList = "remaining";
  }
  if (remaining === 0) {
    remainingText.textContent = "Kudos! Goal Reached";
  }
};

firstContainer.addEventListener("click", () => fillContainer(firstContainer));
secondContainer.addEventListener("click", () => fillContainer(secondContainer));
thirdContainer.addEventListener("click", () => fillContainer(thirdContainer));
fourthContainer.addEventListener("click", () => fillContainer(fourthContainer));
fifthContainer.addEventListener("click", () => fillContainer(fifthContainer));
sixthContainer.addEventListener("click", () => fillContainer(sixthContainer));
seventhContainer.addEventListener("click", () =>
  fillContainer(seventhContainer)
);
eightContainer.addEventListener("click", () => fillContainer(eightContainer));
