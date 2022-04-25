import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';
populateText();

const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const messageObject = JSON.parse(saveMessage);
  console.log(messageObject);

  if (messageObject) {
    email.value = messageObject.email;
    message.value = messageObject.message;
  }

}
