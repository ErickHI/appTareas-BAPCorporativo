<template>
    <footer class="mt-1">
        <div>Todos los derechos reservados</div>
        <div>©</div>
        <div>|</div>
        <div>Erick Hernández Islas | {{ anho }}</div>
    </footer>
</template>

<script setup>

const anho = new Date().getFullYear();

</script>