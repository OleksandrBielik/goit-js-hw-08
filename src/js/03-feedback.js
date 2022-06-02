import throttle from "lodash.throttle";

const form = document.querySelector('form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

if (localStorage.getItem("feedback-form-state")) {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"))
    email.value = data.email;
    textarea.value = data.message;
} else {
    email.value = '';
    textarea.value = '';
}

form.addEventListener('input', throttle(() => {
    localStorage.setItem("feedback-form-state", JSON.stringify({ email: email.value, message: textarea.value }))
}, 500))

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log({ email: email.value, message: textarea.value })
    form.reset()
    localStorage.clear()
})