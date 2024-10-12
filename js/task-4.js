const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const userEmail = form.elements.email.value.trim();
  const userPassword = form.elements.password.value.trim();
  if (userEmail === "" || userPassword === "") {
    form.reset();
    return alert("All form fields must be filled in");
  }
  const userInfo = {
    email: userEmail,
    password: userPassword,
  };
  console.log("userInfo:", userInfo);

  form.reset();
}