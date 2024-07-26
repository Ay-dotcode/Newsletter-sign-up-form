// const form = document.getElementById("form");

// const handleSubmit = (e) => {
//     e.preventDefault(e);

//     const data = Object.fromEntries(new FormData(e.target));
//     console.log(data);
// };

// form.addEventListener("submit", handleSubmit);

const email = document.getElementById("email");
const submit = document.getElementById("submit");
const emailError = document.getElementById("emailError");
const userEmail = document.getElementById("userEmail");
const mainBody = document.getElementById("mainBody");
const otherSect = document.getElementById("otherSect");

submit.addEventListener("click", validate);
email.addEventListener("input", check);

function validate() {
    if (email.value === "" || !email.value.includes("@")) {
        emailError.style.display = 'block';
        email.classList.add('error');
        email.focus();
    }
    else {
        userEmail.innerHTML = email.value;
        email.value = "";
        emailError.style.display = 'none';
        email.classList.remove('error');
        mainBody.style.display = 'none';
        otherSect.style.display = 'flex';
    }
}
function check() {
    emailError.style.display = 'none';
    email.classList.remove('error');
}