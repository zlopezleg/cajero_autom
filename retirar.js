let nombre = JSON.parse( localStorage.getItem("nombreActual"));
console.log("este es el nombre del usuario actual 'nombre' "+nombre);
//obtenermos el arreglo de cuentas
let cuentas = JSON.parse(localStorage.getItem("usuarios"));
console.log(cuentas);

let saldoActual = JSON.parse(localStorage.getItem("saldoActual"));
console.log("este es el saldo actual del usuario" + saldoActual);


let btnRetirarDinero = document.getElementById("retiro").value;
for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].nombre === nombre){
        saldoActual = cuentas[i].saldo;
        console.log(saldoActual);
        localStorage.setItem("saldoActual",JSON.stringify(saldoActual));
    }
}
let monto = 0;

function retiro (){
    monto = document.getElementById("retiro").value;
    if(saldoActual <= 990 && saldoActual >= 10 && parseInt(saldoActual) - parseInt(monto) >= 10){
        alert("Vas a Retirar $" + monto + " MXN");
        saldoActual = parseInt(saldoActual) - parseInt(monto);
        console.log("saldo con retiro " + saldoActual);
            for(let i =0; i<cuentas.length; i++){
                if(cuentas[i].nombre === nombre){
                cuentas[i].saldo = saldoActual;
                console.log(cuentas);
                localStorage.setItem("usuarios",JSON.stringify(cuentas));
                }
            }
            window.open("cuenta.html");
        }else{
            alert("No puedes tener menos de $10 MXN")
        }
    console.log(cuentas);
}
function cerrar(){
    window.close();
}