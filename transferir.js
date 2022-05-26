let nombre = JSON.parse( localStorage.getItem("nombreActual"));
console.log("este es el nombre del usuario actual 'nombre' "+nombre);
//obtenermos el arreglo de cuentas
let cuentas = JSON.parse(localStorage.getItem("usuarios"));
console.log(cuentas);

let saldoActual = JSON.parse(localStorage.getItem("saldoActual"));
console.log("este es el saldo actual del usuario" + saldoActual);

for(let i=0; i<cuentas.length; i++){
    if(cuentas[i].nombre === nombre){
        saldoActual = cuentas[i].saldo;
        console.log(saldoActual);
        localStorage.setItem("saldoActual",JSON.stringify(saldoActual));
    }
}

let suma = 0;
let monto = 0;
let usr = "";
let isT = false;
function transferir(){
    usr = document.getElementById("receipt").value;
    console.log(usr);//obtiene el nombre de la cuenta receptora
    monto = document.getElementById("monto").value;
    console.log(monto);//obtiene el monto a transferir
    if(saldoActual-parseInt(monto) >= 10){
        for(let i=0; i<cuentas.length; i++){
            if(cuentas[i].nombre == usr){
                console.log("vamos bien");
                isT = true
            }
        }
    }else{
        alert("No puedes tener menos de $10 MXN");
    }
    if (isT == false){
        console.log("Cuenta receptora inválida");
    }
}