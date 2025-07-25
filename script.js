const formTitle = document.getElementById('formTitle');
const nameField = document.getElementById('nameField');
const roleField = document.getElementById('roleField');
const localityField = document.getElementById('localityField');
const submitBtn = document.querySelector('.submit-btn');
const toggleText = document.getElementById('toggleText');

let isSignIn = false;

function toggleForm() {
  isSignIn = !isSignIn;

  if (isSignIn) {
    formTitle.innerText = 'Welcome Back';
    nameField.style.display = 'none';
    roleField.style.display = 'none';
    localityField.style.display = 'none';
    submitBtn.innerText = 'Sign In';
    toggleText.innerHTML ="Don't have an account? <a href=\"#\" id=\"toggleBtn\">Sign Up</a>";

  } else {
    formTitle.innerText = 'Create Account';
    nameField.style.display = 'block';
    roleField.style.display = 'block';
    localityField.style.display = 'block';
    submitBtn.innerText = 'Sign Up';
    toggleText.innerHTML = 'Already have an account? <a href="#" id="toggleBtn">Sign In</a>';
  }

  // Re-bind toggle button each time
  document.getElementById('toggleBtn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm();
  });
}

// Initial binding
document.getElementById('toggleBtn').addEventListener('click', (e) => {
  e.preventDefault();
  toggleForm();
});