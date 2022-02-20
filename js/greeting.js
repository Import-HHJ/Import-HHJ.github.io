const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginH1 = document.querySelector("#login-h1");
const br1 = document.querySelector("#aaaa");
const br2 = document.querySelector("#aaa");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_STR = "username";

function onLoginSubmit(info) {
  info.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_STR, username);

  loginForm.classList.add(HIDDEN_CLASS_NAME);
  printH1(username);
}

function printH1(username) {
  loginH1.innerText = `Hello ${username}!`;
  loginH1.classList.remove(HIDDEN_CLASS_NAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_STR);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS_NAME);
  br1.classList.remove(HIDDEN_CLASS_NAME);
  br2.classList.remove(HIDDEN_CLASS_NAME);
} else {
  printH1(savedUsername);
}
