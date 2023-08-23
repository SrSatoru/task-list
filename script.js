/*/ Obtener elementos por ID
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
cargarLista();
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

