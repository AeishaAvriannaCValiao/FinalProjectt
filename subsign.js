document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const reason = document.getElementById("reason").value.trim();
  const sexElement = document.querySelector('input[name="sex"]:checked');

  let hasError = false;

  if (!firstName) {
    document.getElementById("errorFirstName").textContent = "Required";
    hasError = true;
  }

  if (!lastName) {
    document.getElementById("errorLastName").textContent = "Required";
    hasError = true;
  }

  if (!sexElement) {
    document.getElementById("errorSex").textContent = "Required";
    hasError = true;
  }

  if (!email) {
    document.getElementById("errorEmail").textContent = "Required";
    hasError = true;
  }

  if (!password) {
    document.getElementById("errorPassword").textContent = "Required";
    hasError = true;
  }

  if (!reason) {
    document.getElementById("errorReason").textContent = "Required";
    hasError = true;
  }

  if (!hasError) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("contact", contact);
    localStorage.setItem("sex", sexElement.value);
    localStorage.setItem("reason", reason);

    
    window.location.href = "SUBPAGEINFO.html";
  }
});

