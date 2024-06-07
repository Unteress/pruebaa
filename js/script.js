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
    var datos = { titulo, descripcionTarea, fechaVence, prioridadText, completado: false }; // Añadir una propiedad "completado"
    arrDatosTarea.push(datos);
    console.log(arrDatosTarea);

    var body = document.getElementById("tbo");
    body.innerHTML = "";

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
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Pendiente
                        </label>
                    </div>
                </td>  
            </tr>`;
        body.innerHTML += fila;
    });
}

function MarcarCompletado(index) {
    arrDatosTarea[index].completado = true; // Marcar la tarea como completada
    console.log(arrDatosTarea);
}
