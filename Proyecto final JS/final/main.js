/*  const usuario = document.getElementById("usuario").value;
const contraseña = document.getElementById("contraseña").value;
const boton = document.getElementById("boton-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault;
    let error = validarCampo();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Ingresaste a la Peña"
        resultado.classList.add("green")
        resultado.classList.remove("red")
    }
})

const validarCampo = ()=>{
    let error = [];
    if (usuario.value.lengh < 5){
        error[0] = true;
        error[1] = "El nombre incorrecto";
        return error;
    } else if (contraseña.value.lengh > 30){
        error[0] = true;
        error[1] = "El nombre incorrecto";
        return error;
    } 

    error[0] =false;
    return error;

}  */

let miIngreso = document.getElementById("ingreso");
miIngreso.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault;
    let formulario = e.target;
    if (formulario.children[3].value !== "lmds2023") { 
    }
    else {
        const loginObject = { username: formulario.children[3].value };
        const loginJson = JSON.stringify(loginObject);
        sessionStorage.setItem("ingreso", loginJson);
    }    
}

let usuario = JSON.parse(sessionStorage.getItem("ingreso"));
const verificarUsuario = () => {
	return new Promise((resolve, reject) => {
		resolve("Bienvenido " + usuario.username)
	}, "Ingrese usuario")
};

verificarUsuario()
	.then((res) => {
		bienvenido.innerHTML = res;				
		}
	)
	.catch((reject) => 
	{
		bienvenido.innerHTML = "Ingresa a la pagina";		
	});

if (usuario.username !== "") {
    document.getElementById("prueba").style.visibility = "visible";
	}

	
let misOpciones = document.getElementById("opciones");
misOpciones.addEventListener("submit", validarFormularioOpciones);

function validarFormularioOpciones(e) {
    e.preventDefault;
    let formulario = e.target;
    const selectObject = { opcion: formulario.children[0].value, gastos: formulario.children[4].value };
    const selectJson = JSON.stringify(selectObject);
    sessionStorage.setItem("seleccion", selectJson);
}


//opciones

/* const botonEnviar = document.getElementById(`enviar-nota`);
botonEnviar.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById(`nota`).value)
        if (isNaN(prevRes)){
            throw "Gracioso"
        }
        resultado= veridicarAprobados(8,5,mensaje);
        mensaje= definirMensaje(resultado[1]);
       
    }catch(e){
        resultado = "Sos Gracioso???"
        mensaje = "intentaste hacertye el vivo!!"
    }
    abrirModal(resultado[0],mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: "escribir nota";
        break;
        case 2: "escribir nota";
        break;
        case 3: "escribir nota";
        break;
        case 4: "escribir nota";
        break;
        case 5: "escribir nota";
        break;
        default: resultado = null;
    }
}

const veridicarAprobados = (nota1,nota2,prevRes)=>{
  
    promedio= (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){
        return "<span class='green'>Aprobado</span>";
    }
    return "<span class='red'>desaprobado</span>";
}

const abrirModal = (res,msg)=>{
   document.querySelector(".resultado").innerHTML = res;
   document.querySelector(".mensaje").innerHTML = "yu prueba:" + msg;
   let modal = document.querySelector(".modal-background");
   modal.style.display = "flex";
   modal.style.animarion = "aparecer 1s forwards";
} */