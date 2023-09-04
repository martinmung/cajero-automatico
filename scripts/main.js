var cuentas = [
    { nombre: 'Mali', saldo: 200, password: 1234 },
    { nombre: 'Gera', saldo: 290, password: 5678},
    { nombre: 'Maui', saldo: 67, password: 4321},
  ];

var validUser = false

var userName = document.getElementById("inputUserName")
var password = document.getElementById("inputPassword")
var submitBtn = document.getElementById("submitBtn")
var accessForm = document.getElementById("accessForm")
var userWindow = document.getElementById("userWindow")
var welcome = document.getElementById("welcome")
var depositBtn = document.getElementById("depositBtn")
var withdrawBtn = document.getElementById("withdrawBtn")
var exitBtn = document.getElementById("exitBtn")



  // Ciclo para encontrar si el usuario y contraseña son correctos, usé la variable validUser para tener mejor control de esa manera

submitBtn.addEventListener("click", function(){

    for(let index=0; index < cuentas.length; index++){
        if((userName.value == cuentas[index].nombre) && (password.value == cuentas[index].password)){
            validUser = true
            i = index
         }
        }

    if(validUser == true){
        console.log("Usario correcto")
        accessForm.classList.add("hide")
        userWindow.classList.remove("hide")

        saldo = cuentas[i].saldo
        index = i

        welcome.innerHTML += ", " + cuentas[i].nombre
        userSaldo.innerHTML = "Tu saldo es de: $" + saldo

    }else{
        alert("usuario y/o contraseña incorrecto")
    }
});


// Función para depositar dinero

depositBtn.addEventListener("click", function(){
    var deposit = parseInt(prompt("Ingrese la cantidad a depositar"))

    if ((saldo + deposit) > 990){
        alert("El saldo excede el límite de $990");
    } else{
        alert("has depositado " + deposit);
        saldo = saldo + deposit
        cuentas[i].saldo = saldo
        userSaldo.innerHTML = "Tu saldo es de: $" + saldo
    }
});


// Función para retirar dinero 

withdrawBtn.addEventListener("click", function(){
    var retiro = parseInt(prompt("Ingrese la cantidad a retirar"))

    if ((saldo - retiro) < 10){
        alert("El saldo mínimo permitido es de $10");
    } else{
        alert("has retirado " + retiro);
        saldo = saldo - retiro
        cuentas[i].saldo = saldo
        userSaldo.innerHTML = "Tu saldo es de: $" + saldo
    }
});

// Función para salir de la cuenta

exitBtn.addEventListener("click", function(){
    accessForm.classList.remove("hide")
    userWindow.classList.add("hide")
    welcome.innerHTML = "Bienvenidx"
    validUser = false
});








