const formGuardar = document.getElementById("formGuardar");
const nombre = document.getElementById("nombreGuardar");
const resultadoGuardar = document.getElementById("resultadoGuardar");

formGuardar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const varNombre = nombre.value.trim();
    if (varNombre === "") {
        resultadoGuardar.textContent = "Escribe un nombre antes de guardarlo.";
        return;
    }

    localStorage.setItem("nombre", varNombre);
    resultadoGuardar.textContent = "Nombre guardado correctamente.";
    formGuardar.reset();
});


const formMostrar = document.getElementById("formMostrar");
const resultadoMostrar = document.getElementById("resultadoMostrar");

formMostrar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreGuardado = localStorage.getItem("nombre");
    resultadoMostrar.textContent = nombreGuardado === null
        ? "No hay un nombre guardado."
        : "Nombre guardado: " + nombreGuardado;
});


const formEditar = document.getElementById("formEditar");
const nombreEditar = document.getElementById("nombreEditar");
const resultadoEditar = document.getElementById("resultadoEditar");

formEditar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nuevoNombre = nombreEditar.value.trim();
    if (nuevoNombre === "") {
        resultadoEditar.textContent = "Escribe el nuevo nombre.";
        return;
    }

    localStorage.setItem("nombre", nuevoNombre);
    resultadoEditar.textContent = "Nombre actualizado correctamente.";
    formEditar.reset();
});


const formEliminar = document.getElementById("formEliminar");
const resultadoEliminar = document.getElementById("resultadoEliminar");

formEliminar.addEventListener("submit", function (evento) {
    evento.preventDefault();

    localStorage.removeItem("nombre");
    resultadoEliminar.textContent = "Nombre eliminado.";
});



const formMascota = document.getElementById("formMascota");
const resultadoMascota = document.getElementById("resultadoMascota");

formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const mascota = {
        nombre: document.getElementById("mascota").value,
        raza: document.getElementById("raza").value,
        edad: Number(document.getElementById("edad").value)
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));
    resultadoMascota.textContent = "Mascota guardada correctamente.";
});