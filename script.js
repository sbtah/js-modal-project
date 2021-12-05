"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModals = document.querySelectorAll(".show-modal");

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

const openModal = function () {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

for (let i = 0; i < btnOpenModals.length; i++) {
	btnOpenModals[i].addEventListener("click", openModal);
}

let loggerArray = [];
let logger = "";

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		closeModal();
	}
	console.log(event.key);
});
