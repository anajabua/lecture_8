const form = document.getElementById("signupForm")
const fullName = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

form.addEventListener("submit", function (e) {
  e. StopSubm()
  let valid = true

  const nameRegex = /^[A-Za-z\s]+$/
  if (!nameRegex.test(fullName.value.trim())) {
    showError(fullName, "Full name must contain only letters and spaces.")
    valid = false
  } else {
    hideError(fullName)
  }

  // ელფოსტის ნიმუშად არი აღებული ეს.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Please enter a valid email address.")
    valid = false
  } else {
    hideError(email)
  }

  // საჭიროა მინიმუმ ერთი ციფრი და სიმბოლოებიდან ერთი მაინც.
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
  if (!passwordRegex.test(password.value)) {
    showError(password, "Password must be at least 8 chars, include 1 number & 1 special char.")
    valid = false
  } else {
    hideError(password)
  }

  // ზუსტად უნდა ემთხვეოდეს პაროლს, რაც შეგვყავს ზემოთ.
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, "Passwords do not match.")
    valid = false
  } else {
    hideError(confirmPassword)
  }

  if (valid) {
    alert("Form submitted successfully!")
    form.reset()
  }
});

function show(input, message) {
  const error = input.parentElement.querySelector(".error")
  error.textContent = message
  error.style.visibility = "visible"
  input.classList.add("invalid")
}

function hide(input) {
  const error = input.parentElement.querySelector(".error")
  error.style.visibility = "hidden"
  input.classList.remove("invalid")
}
