
// Todos los datos que se pueden encontrar en la pagina
const singUpForm = document.getElementById("singUpForm")
const email = document.getElementById("email")
const errorEmail= document.getElementById("errorEmail")
const password = document.getElementById("password")
const showHide = document.getElementById('showHide')
const errorPassword = document.getElementById("errorPassword")
const confirmPassword = document.getElementById("confirmPassword")
const errorConfirmPassword = document.getElementById("errorConfirmPassword")
const submitSingUp = document.getElementById("submitSingUp")
let valido = true
validar()
singUpForm.addEventListener("submit", function (event){
    event.preventDefault()
    if(valido == true){
        location.reload()
        alert("Login exitoso")
        localStorage.setItem("Email", email.value.trim())
        const body = function bodyBuilderJSON() {
            return {
                "email": email.value,
                "password": password.value
            }
        }
        console.log(body)
    }
})

function validar (){

    email.addEventListener("blur", funcion = () => {
        if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)){
            mostarError(errorEmail, "¡Ingresa un mail valido!")
            valido = false
        }else if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)){
            ocultarError(errorEmail)
        }
    })

    password.addEventListener("blur", funcion = () => {
        if(password.value.length < 6){
            mostarError(errorPassword, "¡La contraseña debe tener al menos <br> 6 caracteres!")
            valido = false
        }else{
            ocultarError(errorPassword)
        }
    })

    confirmPassword.addEventListener("blur", funcion = () => {
        if(confirmPassword.value != password.value){
            mostarError(errorConfirmPassword, "¡Las contraseñas deben coincidir")
            valido = false
        }else{
            ocultarError(errorConfirmPassword)
        }
    })
}


const mostarError = (error, mensaje) => {
    error.innerHTML = mensaje
    error.style.marginBottom = "5px"
    error.style.display = "inline-block";
}
const ocultarError = (error) => {
    error.style.display = "none"
}

showHide.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        showHide.classList.replace("bxs-hide", "bxs-show");;
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        showHide.classList.replace("bxs-show", "bxs-hide");
    }
});