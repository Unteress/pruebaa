var arrDatosTarea = [];

var prioridades = {
    "1": "Alta",
    "2": "Baja"
};

function AgregarDatos() {
    var titulo = document.getElementById("idTitulo").value;
    var fechaVence = document.getElementById("idDate").value;
    var prioridadValue = document.getElementById("IdPrioridad").value;
    var prioridadText = prioridades[prioridadValue]; // Obtener el texto correspondiente al valor seleccionado
    var descripcionTarea = document.getElementById("idDescripcion").value;
    var datos = { titulo, descripcionTarea, fechaVence, prioridadText }; // Usar prioridadText en lugar de prioridadValue
    arrDatosTarea.push(datos);
    console.log(arrDatosTarea);

    var body = document.getElementById("tbo");
    // Limpiar la tabla antes de agregar nuevas filas
    body.innerHTML = "";

    arrDatosTarea.forEach((element, index) => {
        var fila = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element.titulo}</td>
                <td>${element.descripcionTarea}</td>
                <td>${element.fechaVence}</td>
                <td>${element.prioridadText}</td> <!-- Usar prioridadText en lugar de prioridadValue -->
                <td><div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="idCompletado">
                <label class="form-check-label" for="flexRadioDefault1">
                  Completado
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Pendiente
                </label>
              </div></td>  
            </tr>`;
        body.innerHTML += fila;
    });
}
