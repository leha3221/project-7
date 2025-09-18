var emailInput = document.getElementById("email");

emailInput.addEventListener('input', validateEmail);

function validateEmail(input) {
    var regex = /[A-Za-z0-9]{2,10}@[a-z0-9]{1,10}\.[a-z]{2,3}/
    if(regex.test(emailInput.value))
    {
        removeError(emailInput);
        return true;
    }
    else{
        showError(emailInput, "email не соответствует формату");
        return false;
    }
}

function showError(input, message) {
    const form = input.parentElement;
    const errorElement = form.querySelector('.error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    form.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input) {
    const form = input.parentElement;
    const errorElement = form.querySelector('.error');
    if(errorElement)    // если элемент ошибки существует
    {
        form.removeChild(errorElement);
    }
    input.style.borderColor = 'purple';
}