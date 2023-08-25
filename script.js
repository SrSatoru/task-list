/*/Obtener elementos por ID
const inputElement = document.getElementById("inputId");
const fechaElement = document.getElementById("fechaId");
const listaElement = document.getElementById("listaId");
const agregarBoton = document.getElementById("agregarBotonId");

// Botón Agregar
agregarBoton.addEventListener("click", () => {
  const valorInput = inputElement.value;
  const valorFecha = fechaElement.value;
  agregarBoton.textContent = "Agregar";
  
  if (valorInput !== "") {
    agregarTareaALista(valorInput, valorFecha, false);
    guardarLista();
    inputElement.value = "";
  }
});

// Agregar tarea a lista
function agregarTareaALista(input, fecha, tachado) {
  const li = document.createElement("li");

  const pInput = document.createElement("p");
  pInput.textContent = input;
  pInput.classList.add("tarea");
  pInput.addEventListener("click", () => {
    pInput.classList.toggle("tachado");
    pFecha.classList.toggle("tachado");
    guardarLista();
  });

  const pFecha = document.createElement("p");
  pFecha.textContent = fecha;
  pFecha.classList.add("fecha");
  pFecha.addEventListener("click", () => {
    pInput.classList.toggle("tachado");
    pFecha.classList.toggle("tachado");
    guardarLista();
  });
  const fechaActual = new Date();
  if(new Date(fecha) < fechaActual && !tachado){
    alert("funca");
    pInput.classList.add("tachado");
    pFecha.classList.add("tachado");
    guardarLista();
  }
  li.appendChild(pInput);
  li.appendChild(pFecha);

  if (tachado) {
    pInput.classList.toggle("tachado");
    pFecha.classList.toggle("tachado");
    guardarLista();
  }

// Botón Arriba
const botonArriba = document.createElement("button");
botonArriba.innerHTML = "&#8593;"; // Símbolo de flecha hacia arriba
botonArriba.addEventListener("click", () => {
  const index = Array.from(listaElement.children).indexOf(li);
  if (index > 0) {
    const auxiliar = listaElement.children[index - 1];
    listaElement.insertBefore(li, auxiliar);
    guardarLista();
  }
});

// Botón Abajo
const botonAbajo = document.createElement("button");
botonAbajo.innerHTML = "&#8595;"; // Símbolo de flecha hacia abajo
botonAbajo.addEventListener("click", () => {
  const index = Array.from(listaElement.children).indexOf(li);
  if (index < listaElement.children.length - 1) {
    const auxiliar = listaElement.children[index + 1];
    listaElement.insertBefore(auxiliar, li);
    guardarLista();
  }
});

li.appendChild(botonArriba);
li.appendChild(botonAbajo);

  // Agregar botón borrar
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.addEventListener("click", () => {
    listaElement.removeChild(li);
    guardarLista();
  });
  
  li.appendChild(botonBorrar);

  // Crear botón Editar
const botonEditar = document.createElement("button");
botonEditar.textContent = "Editar";
botonEditar.addEventListener("click", () => {
  editarTarea(input, fecha);
  listaElement.removeChild(li);
  guardarLista();
});

li.appendChild(botonEditar);

  listaElement.appendChild(li);
  guardarLista()
}

// Función para guardar la lista en el localstorage
function guardarLista() {
    const array = [];
    Array.from(listaElement.children).forEach(li => {
        const tarea = li.querySelector(".tarea").textContent;
        const fecha = li.querySelector(".fecha").textContent;
        const tachado = li.querySelector("p").classList.contains("tachado");
        array.push({ tarea, fecha, tachado });
    });
    localStorage.setItem("listaTareas", JSON.stringify(array));
}

// Función para cargar la lista desde el localstorage
function cargarLista() {
  const listaGuardada = JSON.parse(localStorage.getItem("listaTareas"));
  if (listaGuardada) {
    listaGuardada.forEach((tarea) => {
      agregarTareaALista(tarea.tarea, tarea.fecha, tarea.tachado);
    });
  }
}

// Función para editar la tarea
function editarTarea(tarea, fecha) {
  inputElement.value = tarea;
  fechaElement.value = fecha;
  agregarBoton.textContent = "Editar";
}

// Cargar la lista al cargar la página

*/

//Menu Barra de tareas
let botones_barra = document.querySelectorAll(".boton_barra");
botones_barra.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    botones_barra.forEach((boton, boton_index) => {
      if(index == boton_index){
        boton.querySelector('.menu_cerrado').classList.toggle("abierto")
      }
      else{
        boton.querySelector('.menu_cerrado').classList.remove("abierto")
      }
    })
  })
  console.log(boton.innerHTML)
});


//Mostrar ventana nueva tarea
let nueva_tarea_option = document.getElementById("nueva_tarea_option");
let button_cerrar_tarea = document.getElementById("boton_cerrar");
let ventana_nueva_tarea = document.getElementById("nueva_tarea");
nueva_tarea_option.addEventListener("click", () =>{
  
  ventana_nueva_tarea.style.display = "block";
})
button_cerrar_tarea.addEventListener("click", () => {
  ventana_nueva_tarea.style.display = "none";
})

//Ventana Nueva tarea
const boton_agregar_tarea = document.getElementById("boton_agregar_tarea");
const inputElement = document.getElementById("inputId");
const fechaElement = document.getElementById("fechaId");

boton_agregar_tarea.addEventListener("click", () => {
  const valorInput = inputElement.value;
  const valorFecha = fechaElement.value;
  boton_agregar_tarea.textContent = "Agregar";
  
  if (valorInput !== "") {
    agregarTareaATabla(valorInput, valorFecha, false);
    inputElement.value = "";
  }
});

function agregarTareaATabla(input, fecha, tachado){
  let tabla = document.getElementById("tabla_tareas")
  let fila = document.createElement("tr");

  //check data
  let checkData = document.createElement("input");
  checkData.type = "checkbox";
  checkData.checked = tachado;
  fila.appendChild(checkData);

  let inputData = document.createElement("td");
  inputData.textContent = input;
  fila.appendChild(inputData);

  let fechaValue = new Date(fecha);
  let mes = fechaValue.getMonth() + 1;
  let dia = fechaValue.getDate();
  let hora = fechaValue.getHours();
  let min = fechaValue.getMinutes();

  let horaData = document.createElement("td");
  horaData.textContent = `${hora}:${min}`
  fila.appendChild(horaData);

  let fechaData = document.createElement("td");
  fechaData.textContent = `${dia}/${mes}`
  fila.appendChild(fechaData);

  tabla.appendChild(fila);
}