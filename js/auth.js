const nameElm = document.getElementById("namee");
const emailElm = document.getElementById("emaill");
const passwordElm = document.getElementById("passwordd");
const registerForm = document.getElementById("register-form");

const loginEmail = document.getElementById('email')
const loginPassword = document.getElementById('password')
const loginForm = document.getElementById('login-form')

function handleRegister(e) {
  e.preventDefault();

  const user = {
    name: nameElm.value,
    email: emailElm.value,
    password: passwordElm.value,
  };

  const usersLocal = localStorage.getItem("users");
  if (usersLocal === null) {
    const users = [user];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    const users = JSON.parse(usersLocal);
    console.log(users[0]);
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      if (element.email === user.email) {
        alert("Bi trung email!");
        return;
      }
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
  nameElm.value = "";
  emailElm.value = "";
  passwordElm.value = "";
  alert("Dang ky thanh cong!");
  window.location = "./index.html";
}

registerForm.addEventListener("submit", handleRegister);

function handleLogin(e) {
  e.preventDefault();
  const usersLocal = localStorage.getItem("users");
  const users = JSON.parse(usersLocal);
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    if (element.email === loginEmail.value && element.password === loginPassword.value) {
      alert("Dang nhap thanh cong!");
      window.location = "./index.html";
      return;
    }
  }
  alert("Sai thong tin dang nhap!");
}

loginForm.addEventListener("submit", handleLogin);
