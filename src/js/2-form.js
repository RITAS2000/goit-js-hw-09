'use strikt';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  event.preventDefault();
  console.log(formData);
  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(localStorageKey);
  form.reset();
});
