let nombre = JSON.parse( localStorage.getItem("nombreActual"));
console.log("este es el nombre del usuario actual 'nombre' "+nombre);
//obtenermos el arreglo de cuentas
let cuentas = JSON.parse(localStorage.getItem("usuarios"));
console.log(cuentas);

let saldoActual = JSON.parse(localStorage.getItem("saldoActual"));
console.log("este es el saldo actual del usuario" + saldoActual);
//solicitar la cantidad a depositar

let btnIngresarDinero = document.getElementById("deposito").value;
for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].nombre === nombre){
        saldoActual = cuentas[i].saldo;
        console.log(saldoActual);
        localStorage.setItem("saldoActual",JSON.stringify(saldoActual));
    }
}
let monto = 0;

function deposito(){
    monto = document.getElementById("deposito").value;
    if(saldoActual <= 990 && saldoActual >= 10 && parseInt(saldoActual)+parseInt(monto) <= 990){
        alert("Vas a Depositar $" + monto + " MXN");
    saldoActual = parseInt(saldoActual) + parseInt(monto);
    console.log("saldo con depósito " + saldoActual);
        for(let i =0; i<cuentas.length; i++){
            if(cuentas[i].nombre === nombre){
            cuentas[i].saldo = saldoActual;
            console.log(cuentas);
            localStorage.setItem("usuarios",JSON.stringify(cuentas));
            }
        }
        window.open("cuenta.html");
    }else{
        alert("No puedes tener más de $990 MXN");
    }
}
console.log(cuentas);

function cerrar(){
    window.close();
}