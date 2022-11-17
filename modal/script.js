"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  // to remove the hidden from the modal and to allow the pop up when the button is clicked
  modal.classList.remove("hidden");
  ///to add the blurr effect
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

//// Key press events are called global events (becuse they don't happen on a single element)eg. escape on the keyboard, keyboard events
//passing a parameter to the function allows us to identify which key is pressed
// the output is '' KeyboardEvent {isTrusted: true, key: 'k', code: 'KeyK', location: 0, ctrlKey: false, …}''

document.addEventListener("keydown", function (event) {
  // if (event.key === "Escape") {
  //   ///// checking if popup is avaliable so we can use esacpe to close it
  //   if (!modal.classList.contains("hidden")) closeModel();
  // }
  /// or we can also useb
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModel();
});
