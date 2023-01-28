import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(inputFormData, 500));

populateForm();

//Вешаем на форму прослушивание инпута

function inputFormData(event) {
  //console.log(e.target.name);
  //console.log(e.target.value);
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

//- Поведение по умолчанию
//- Убираем сообщения из хранилища remove
//- Очищаем форму reset

function onFormSubmit(event) {
  event.preventDefault();
  console.log('отправляем форму');
  localStorage.getItem(STORAGE_KEY);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

//Получаем значение поля, сохраняем в хранилище

//function onTextareaInput(event) {
//const value = event.currentTarget.value;
//console.log(value);
//const message = event.target.value;
//localStorage.setItem(STORAGE_KEY, message);
//}

//Получаем значение из хранилища
//Если savedMessage есть- мы можем с ним работать (вставить в поле)
// Если нет - возвращаетмя null
//Обновляем DOM refs.textarea.value

function populateForm() {
  const formValues = localStorage.getItem(STORAGE_KEY);
  if (formValues) {
    formData = JSON.parse(formValues);
    console.log(formData);
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}
