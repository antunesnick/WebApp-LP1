const form = document.getElementById("formPrincipal");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkError();
})

function checkError() {
    
    if(userName.value === "") {
        setErrorFor(userName, "O nome de usuário é obrigatório.");
    }else {
        setSuccessFor(userName);
    }


    if(email.value === "") {
        setErrorFor(email, "O email é obrigatório.");
    }
    else if(!checkEmail(email.value)) {
        setErrorFor(email, "Por favor, insira um e-mail válido.");
    } else {
        setSuccessFor(email);
    }

    if(password.value === "") {
        setErrorFor(password, "A senha é obrigatória.");
    }
    else if(password.value.length < 7 ) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    }
    else {
        setSuccessFor(password);
    }

    if(confirmPassword.value === "") {
        setErrorFor(confirmPassword, "Por favor, confirme sua senha.");
    }
    else if(confirmPassword.value != password.value) {
        setErrorFor(confirmPassword, "As senhas não conferem.");
    }
    else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email);
}