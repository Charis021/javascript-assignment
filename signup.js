document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "Login.html";
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return (window.location.href = "SignUp.html");
    }
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("password", password);
    window.localStorage.removeItem("loginEmail");
    window.localStorage.removeItem("loginPassword");
    window.localStorage.removeItem("rememberMe");
    alert("Signed up successfully!");
  });
