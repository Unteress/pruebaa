var arrDatosTarea = [];

var prioridades = {
    "1": "Alta",
    "2": "Baja"
};

function AgregarDatos() {
    var titulo = document.getElementById("idTitulo").value;
    var fechaVence = document.getElementById("idDate").value;
    var prioridadValue = document.getElementById("IdPrioridad").value;
    var prioridadText = prioridades[prioridadValue];
    var descripcionTarea = document.getElementById("idDescripcion").value;
    var datos = { titulo, descripcionTarea, fechaVence, prioridadText, completado: false };
    arrDatosTarea.push(datos);

    // Renderizar la tabla y el select
    RenderizarTareas();
}

function RenderizarTareas() {
    var body = document.getElementById("tbo");
    var selectTareas = document.getElementById("selectTareas");
    body.innerHTML = "";
    selectTareas.innerHTML = "<option selected>Seleccione una tarea para eliminar</option>";

    arrDatosTarea.forEach((element, index) => {
        var fila = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element.titulo}</td>
                <td>${element.descripcionTarea}</td>
                <td>${element.fechaVence}</td>
                <td>${element.prioridadText}</td>
                <td>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="idCompletado${index}" onchange="MarcarCompletado(${index})">
                        <label class="form-check-label" for="idCompletado${index}">
                            Completado
                        </label>
                    </div>
                </td>  
            </tr>`;
        body.innerHTML += fila;

        // Agregar opción al select de tareas
        var option = document.createElement("option");
        option.text = element.titulo;
        option.value = index.toString(); // Asignar el valor del índice para identificar la tarea
        selectTareas.add(option);
    });
}

function MarcarCompletado(index) {
    arrDatosTarea[index].completado = true;
    console.log(arrDatosTarea);
}

function EliminarTarea() {
    var selectTareas = document.getElementById("selectTareas");
    var selectedIndex = selectTareas.selectedIndex;
    if (selectedIndex !== 0) { // Verificar que se haya seleccionado una tarea
        var index = parseInt(selectTareas.value);
        arrDatosTarea.splice(index, 1); // Eliminar la tarea del array
        RenderizarTareas(); // Volver a renderizar la tabla y el select
    } else {
        alert("Por favor, seleccione una tarea para eliminar.");
    }
}
