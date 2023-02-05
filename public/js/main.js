var datatabletarea = document.querySelector('#datatable-tarea');

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// Petición para obtener todas las tareas
// Mi token es erickhi
fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=erickhi", requestOptions)
  .then(response => response.json())
  .then(result => {
    llenarTabla(result);
}).catch(error => console.log('error', error));

//Esta función llena la tabla con las tareas mediante un ciclo
function llenarTabla(result){
    for(let valor of result){
        console.log(valor.id);
        datatabletarea.innerHTML += `
        <tr>
            <td>${ valor.id }</td>
            <td>${ valor.title }</td>
            <!-- If para poner una insignea u otra dependiendo si está realizada o no la tarea -->
            <td>${ valor.is_completed === 1 ? "<span class='badge text-bg-success'>Completado</span>" : "<span class='badge text-bg-danger'>No completado</span>" }</td>
            <td>${ valor.due_date }</td>
            <td>
                    <i class="ri-eye-line btn btn-primary btn-sm" onclick="getTarea(${ valor.id })"></i>
                    <i class="ri-edit-box-line btn btn-primary btn-sm" onclick="modalUpdateTarea(${ valor.id })"></i>
                    <i class="ri-delete-bin-6-line btn btn-danger btn-sm" onclick="deleteTarea(${ valor.id })"></i>
            </td>
        </th>
        `
    }
}