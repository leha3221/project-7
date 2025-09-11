const form=document.getElementById('ContactForm');  //получаем элемент формы
const emailInput=document.getElementById('Email');//получаем поле ввода email
const button=document.getElementById('Submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail()
}); //на событие ввода email будет вызываться функция validateEmail()

function validateEmail(){
  //функция проверки корректности email
  const emailRegex=/[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}/;
  if(emailRegex.test(emailInput.value)){
    removeError(emailInput);
    return True;

  }
  else{
    showError(emailInput, "Email не соответствует формату. Пример: ivanov@mail.ru");
    return false;
  }
}
function showError(input, message){   //функция показа ошибки
  const formControl = input.parentElement;  //получаем родительскую форму
  const errorElement = formControl.querySelector('error') || document.createElement('div');

  errorElement.className='error';
  errorElement.textContent = message;

  formControl.appendChild(errorElement);
  input.style.borderColor = 'red';
}
function removeError(input){    //функция скрытия ошибки
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('error');

  if(errorElement){
    formControl.removeChild(errorElement);
  }
  input.style.borderColor = 'green';
}
