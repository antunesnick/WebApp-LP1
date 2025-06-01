const form = document.getElementById("formPrincipal");
const userName = document.getElementById("floatingInput user-name");
const password = document.getElementById("floatingInput password");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkError();
})

function checkError() {
    if(userName.value === "") {
        setErrorFor(userName, "Usuário não pode estar em branco.");
    }
    else {
        setSuccessFor(userName);
    }

    if(password.value === "") {
        setErrorFor(password, "Senha não pode estar em branco");
    } else if (password.value.length < 7){
        password.value = "";
        setErrorFor(password, "Senha menor que 8 caracteres.")
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    input.placeholder = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}