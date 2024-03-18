function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (!username.match(usernameRegex)) {
      errorMessage.innerHTML = "Имя Пользователя можем содержать только буквы и цифры.";
      return false;
    }
  
    if (!email.match(emailRegex)) {
      errorMessage.innerHTML = "Неверный адрес электронной почты.";
      return false;
    }
  
    if (password.length < 8) {
      errorMessage.innerHTML = "Пароль должен быть длиной не менее 8 символов.";
      return false;
    }
  
    return true;
  }