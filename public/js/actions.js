function modalUpdateTarea(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/"+ id +"?token=erickhi", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            Swal.fire({
                html:
                `
                <form onsubmit="updateTarea(${ result[0].id })">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Status</th>
                            <th>Fecha</th>
                            <th>Comentarios</th>
                            <th>Descripción</th>
                            <th>Tags</th>
                            <th>Actualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><input type="text" class="form-control" id="titleInputUpdate" required value="${ result[0].title }"></th>
                            <th><input type="checkbox" class="form-check-input" id="isCompletedInputUpdate" ${ result[0].is_completed === 1 ? "checked" : ""}></th>
                            <th><input type="date" class="form-control" id="dueDateInputUpdate" value="${ result[0].due_date }"></th>
                            <th><input type="text" class="form-control" id="commentsInputUpdate" value="${ result[0].comments ? result[0].comments : "" }"></th>
                            <th><input type="text" class="form-control" id="descriptionInputUpdate" value="${ result[0].description  ? result[0].description : "" }"></th>
                            <th><input type="text" class="form-control" id="tagsInputUpdate" value="${ result[0].tags  ? result[0].tags : "" }"></th>

                            <th><button type="submit" class="btn btn-primary">Guardar</button></th>
                        </tr>
                    </tbody>
                </table>
                </form>`,
            width: "90%",
            showConfirmButton: false
              });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Hubo un error al acceder a la tarea' + error,
          })
        });
}

// Actualizar tarea
function updateTarea(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", document.getElementById("titleInputUpdate").value);
    urlencoded.append("is_completed", document.getElementById("isCompletedInputUpdate").checked ? 1 : 0);
    if(document.getElementById("dueDateInputUpdate").value) urlencoded.append("due_date", document.getElementById("dueDateInputUpdate").value);
    if(document.getElementById("commentsInputUpdate").value) urlencoded.append("comments", document.getElementById("commentsInputUpdate").value);
    if(document.getElementById("descriptionInputUpdate").value) urlencoded.append("description", document.getElementById("descriptionInputUpdate").value);
    if(document.getElementById("tagsInputUpdate").value) urlencoded.append("tags", document.getElementById("tagsInputUpdate").value);
    urlencoded.append("token", "erickhi");

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/"+ id, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha actualizado la tarea',
            showConfirmButton: false,
            timer: 1500
          }).then(
            setTimeout(function(){
                window.location.reload();
            }, 1600)
        );
    })
    .catch(error => console.log('error', error));
}

// Get tarea individual
function getTarea(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/"+ id +"?token=erickhi", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            Swal.fire({
                html:
                `<table class="table">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Status</th>
                        <th>Fecha</th>
                        <th>Comentarios</th>
                        <th>Descripción</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>${ result[0].title }</th>
                        <th>${ result[0].is_completed === 1 ? "<span class='badge text-bg-success'>Completado</span>" : "<span class='badge text-bg-danger'>No completado</span>" }</th>
                        <th>${ result[0].due_date }</th>
                        <th>${ result[0].comments }</th>
                        <th>${ result[0].description }</th>
                        <th>${ result[0].tags }</th>
                    </tr>
                </tbody>
            </table>`,
            width: "90%"
              });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Hubo un error al ver la tarea' + error,
          })
        });
}

// Borrar tarea
function deleteTarea(id){
    event.preventDefault();
    var confirmValue = confirm("¿Desea eliminar la tarea " + id + " ?");
    if(confirmValue === true){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/"+ id +"?token=erickhi", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Tarea eliminada");
            window.location.reload();
        })
        .catch(error => {
            alert("Error al eliminar la tarea");
            console.log('error', error);
            window.location.reload();
        });
    }
}

// Crear nueva tarea
function postTarea(){
    event.preventDefault();
    var titleInput = document.getElementById("titleInput");
    var isCompletedInput = document.getElementById("isCompletedInput");
    var dueDateInput = document.getElementById("dueDateInput");
    var commentsInput = document.getElementById("commentsInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var tagsInput = document.getElementById("tagsInput");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd");

    var formdata = new FormData();
                                    formdata.append("token", "erickhi");
                                    formdata.append("title", titleInput.value);
    isCompletedInput.checked ?      formdata.append("is_completed", "1") : formdata.append("is_completed", "0")
    dueDateInput.value != "" ?      formdata.append("due_date", dueDateInput.value) : console.log("Fecha vacia")
    commentsInput.value != "" ?     formdata.append("comments", commentsInput.value) : console.log("Comentarios vacios")
    descriptionInput.value != "" ?  formdata.append("description", descriptionInput.value) : console.log("Descripcion vacia")
    tagsInput.value != "" ?         formdata.append("tags", tagsInput.value) : console.log("Tags vacias")


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        alert("Tarea guardada")
        window.location.reload()
    })
    .catch(error => console.log('error', error));
}