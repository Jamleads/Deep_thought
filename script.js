// // for controls of keybored
// const textarea = document.getElementById("myTextarea");
// let textHistory = [textarea.value];
// let currentIndex = 0;

// textarea.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.key === "z") {
//     event.preventDefault();
//     undo();
//   } else if (event.ctrlKey && event.key === "y") {
//     event.preventDefault();
//     redo();
//   }
// });

// function updateHistory() {
//   textHistory = textHistory.slice(0, currentIndex + 1);
//   textHistory.push(textarea.value);
//   currentIndex = textHistory.length - 1;
// }

// function undo() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     textarea.value = textHistory[currentIndex];
//   }
// }

// function redo() {
//   if (currentIndex < textHistory.length - 1) {
//     currentIndex++;
//     textarea.value = textHistory[currentIndex];
//   }
// }

// document.querySelectorAll(".accordian-btn").forEach((accBtn) => {
//   accBtn.addEventListener("click", () => {
//     document.querySelectorAll(".accordian-body").forEach((accBody) => {
//       accBody.classList.toggle("hide");
//     });
//   });
// });
// console.log(document.querySelector(".accordian-btn"));

const accBtns = document.querySelectorAll(".accordian-btn");
const accBodys = document.querySelectorAll(".accordian-body");

accBtns.forEach((accBtn, index) => {
  accBtn.addEventListener("click", () => {
    accBodys[index].classList.toggle("hide");
    accBtn.classList.toggle("rotate");
  });
});

const boardBtn = document.querySelector(".journey-board-btn");
const journeyBoard = document.querySelector(".journey-board");

boardBtn.addEventListener("click", () => {
  console.log("I am clicked");
  boardBtn.classList.toggle("rotate");

  journeyBoard.classList.toggle("moving-in");
  journeyBoard.classList.toggle("moving-out");
});
