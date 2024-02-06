document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    window.localStorage.setItem("rememberMe", rememberMe);

    window.localStorage.setItem("loginEmail", email);
    window.localStorage.setItem("loginPassword", password);

    const signupEmail = window.localStorage.getItem("email");
    const signupPassword = window.localStorage.getItem("password");

    if (
      signupEmail == localStorage.getItem("loginEmail") &&
      signupPassword == localStorage.getItem("loginPassword")
    ) {
      alert("Logged in successfully!");
      window.location.href = "index.html";
    } else {
      alert("Enter Correct Credentials");
    }
  });

window.onload = function () {
  var rememberMe = localStorage.getItem("rememberMe");
  if (rememberMe === "true") {
    var email = localStorage.getItem("loginEmail");
    var password = localStorage.getItem("loginPassword");
    if (email && password) {
      document.getElementById("loginEmail").value = email;
      document.getElementById("loginPassword").value = password;
      document.getElementById("rememberMe").checked = true;
    }
  }
};
