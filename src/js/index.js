/* Here goes your JS code */
const popup = document.getElementById("popup");
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
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
  checkbox.checked = false;
  clearValue(email);
  clearValue(password);
  removeError(email);
  removeError(password);
  removeError(checkbox);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const isAgreement = checkbox.checked;

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Not a valid email");
  } else {
    removeError(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else if (
    !passwordValue.match(lowerCaseLetters) ||
    !passwordValue.match(upperCaseLetters) ||
    passwordValue.length < 8
  ) {
    setError(
      password,
      "Password must contain 8 characters with at least 1 upper case and 1 lower case"
    );
  } else {
    removeError(password);
  }
  if (!isAgreement) {
    setError(checkbox, "Terms and Conditions are required");
  } else {
    removeError(checkbox);
  }
}

function clearValue(input) {
  input.value = "";
}

function removeError(element) {
  element.classList.remove("error");
  const formControl = element.parentElement;
  const spanError = formControl.querySelector("span");
  spanError.style.display = "none";
}

function setError(element, message) {
  element.classList.add("error");
  const formControl = element.parentElement;
  const spanError = formControl.querySelector("span");
  spanError.style.display = "block";
  spanError.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
