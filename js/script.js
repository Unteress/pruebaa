function AgregarDatos() {
    var titulo = document.getElementById("idTitulo").value;
    var fechaVence = document.getElementById("idDate").value;
    var prioridadValue = document.getElementById("IdPrioridad").value;
    var prioridadText = prioridades[prioridadValue];
    var descripcionTarea = document.getElementById("idDescripcion").value;
    var datos = { titulo, descripcionTarea, fechaVence, prioridadText };

    var body = document.getElementById("tbo");
    var index = arrDatosTarea.length;

    var fila = `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${datos.titulo}</td>
            <td>${datos.descripcionTarea}</td>
            <td>${datos.fechaVence}</td>
            <td>${datos.prioridadText}</td>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="estado_${index}" id="completado_${index}">
                    <label class="form-check-label" for="completado_${index}">
                        Completado
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="estado_${index}" id="pendiente_${index}" checked>
                    <label class="form-check-label" for="pendiente_${index}">
                        Pendiente
                    </label>
                </div>
            </td>  
        </tr>`;
    body.innerHTML += fila;

    // Agregar el objeto datos al array arrDatosTarea
    arrDatosTarea.push(datos);

    // Agregar event listener para el botón de opción "Completado"
    document.getElementById(`completado_${index}`).addEventListener('change', function() {
        arrDatosTarea[index].completado = true;
        console.log(`Tarea ${index + 1} marcada como completada`);
    });

    // Agregar event listener para el botón de opción "Pendiente"
    document.getElementById(`pendiente_${index}`).addEventListener('change', function() {
        arrDatosTarea[index].completado = false;
        console.log(`Tarea ${index + 1} marcada como pendiente`);
    });
}
