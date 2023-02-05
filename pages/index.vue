<!-- Página principal -->
<template>
    <div class="border border-primary border4">
        <h3>Nueva tarea</h3>
        <form onsubmit="postTarea()">
            <table class="table">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Status</th>
                        <th>Fecha</th>
                        <th>Comentarios</th>
                        <th>Descripción</th>
                        <th>Tags</th>
                        <th>Guardar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><input type="text" class="form-control" id="titleInput" required></th>
                        <th><input type="checkbox" class="form-check-input" id="isCompletedInput"></th>
                        <th><input type="date" class="form-control" id="dueDateInput"></th>
                        <th><input type="text" class="form-control" id="commentsInput"></th>
                        <th><input type="text" class="form-control" id="descriptionInput"></th>
                        <th><input type="text" class="form-control" id="tagsInput"></th>
                        <th><button type="submit" class="btn btn-primary" id="guardarInput">Guardar</button></th>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>

    <div class="border border-primary border4">
        <div class="card card-custom">
            <div class="card-header flex-wrap border-0 pt-6 pb-0">
                <div class="card-body">
                    <!--begin: Datatable-->
                    <table class="table table-separate table-hover table-head-custom table-checkable my-1" id="datatable-tarea">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Status</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <!--end: Datatable-->
                </div>
            </div>
            <!--end::Card-->
        </div>
    </div>
    <div style="height: 50px;"></div>
</template>