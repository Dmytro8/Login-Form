/* Here goes your JS code */
const popup = document.getElementById("popup");
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const buttonOpenForm = document.getElementById("show-popup-form");
const iconCloseForm = document.getElementById("icon-close-form");

buttonOpenForm.addEventListener("click", (e) => {
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
  buttonOpenForm.style.opacity = "0";
  buttonOpenForm.style.visibility = "hidden";
});
iconCloseForm.addEventListener("click", (e) => {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
  buttonOpenForm.style.opacity = "1";
  buttonOpenForm.style.visibility = "visible";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
