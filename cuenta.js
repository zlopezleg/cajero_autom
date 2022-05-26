//obtener nombre de usuario actual
let nombre = JSON.parse( localStorage.getItem("name"));
console.log(nombre);
let cuentas = JSON.parse(localStorage.getItem("usuarios"));
console.log(cuentas);

let saldoActual = 0;
for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].nombre === nombre){
        saldoActual = cuentas[i].saldo;
        console.log(saldoActual);
        localStorage.setItem("saldoActual",JSON.stringify(saldoActual));
    }
}

let h2 = document.getElementById("usr_name");
    h2.innerText = "Bienvenido(a) " + nombre;
let h4 = document.getElementById("info_usr");
    h4.innerText = "Saldo: $" + saldoActual + " MXN";


////Funciones Interbancarias
function depositar(event) {
    window.open("deposito.html","","width=500,height=200")
    //codigo de prueba para persistencia de datos
    console.log(cuentas);
    localStorage.setItem("usuarios",JSON.stringify(cuentas));
}
function retirar(event) {
    window.open("retirar.html","","width=500,height=200")
}
function transferir(event){
    window.open("transferir.html","","width=500,height=250")
}

console.log(nombre);
localStorage.setItem("nombreActual", JSON.stringify(nombre));

let btnCerrar = document.getElementById("sesion_close");
btnCerrar.addEventListener("click", function(){
    console.log(cuentas);
    localStorage.setItem("usuarios",JSON.stringify(cuentas));
    window.location.href="login.html";
})