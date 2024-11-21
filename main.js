// var es para las variables
//var cantidad = 6;
//let es la mejor manera porque a evolucionado de var
let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');
let boton = document.getElementById('generar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwzyz0123456789!"#$%&/()=?|°¡¨*[]_:;><,.-{}+¿';

function generar() {
    let numdig = parseInt(cantidad.value);
    if (numdig < 8) {
        //alert es para mandar mensaje
        alert("La cantidad de caracteres debe ser mayor o igual a 8");
    } else {

        let password = '';
        for (let i = 0; i < numdig; i++) {
            let aleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += aleatorio;

        };

        contrasena.value = password;

        validar(password);
    };
}

function limpiar (){
    contrasena.value = "";
}

function validar(password){
    const Mayuscula = /[A-ZÑ]/.test(password);
    const minuscula = /[a-zñ]/.test(password);
    const numero = /\d/.test(password);
    const especiales = /[!"#$%&/()=?|°¡¨*[\]_:;><,.-{}+¿]/.test(password);

    if ( Mayuscula && minuscula && numero && especiales){
        alert('La contraseña es fuerte');
    }else{
        alert('La contraseña no es fuerte');
    }
}

//console.log() es una funcion llamada en la consola
//console.log(typeof cantidad);

/*if(cantidad < 8){
    //alert es para mandar mensaje
    alert("La cantidad de caracteres debe ser mayor o igual a 8");
};*/
