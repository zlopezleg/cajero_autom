let cuentas = [
    { nombre: "Mali", saldo: 200, pass: '1' },
    { nombre: "Gera", saldo: 290, pass: '12' },
    { nombre: "Maui", saldo: 67, pass: '123' }
    ];
let usuarioActual = "";


function login(event){
    
    //declaración de variables
    event.preventDefault();
    let isLogin = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //validacion para usuario y contraseña
    for(let i=0; i<cuentas.length; i++){
        if(cuentas[i].nombre === username && cuentas[i].pass === password){
            usuarioActual = username;
            console.log(usuarioActual);
            window.location.href="cuenta.html";
            localStorage.setItem("name",JSON.stringify(usuarioActual));
            isLogin = true;
        }
    }
    if(isLogin == false){ //en caso que sea incorrecto el login hace esto
        alert("Usuario y/o contraseña incorrectos");
    }
}
/* Persistencia de datos
    localStorage
    setItem------> guarda datos
    getItem-------> leemos datos
*/
console.log(cuentas);
localStorage.setItem("usuarios",JSON.stringify(cuentas));

