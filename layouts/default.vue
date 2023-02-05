<!-- Estructura básica de las páginas -->
<template>
    <div>
        <Navbar></Navbar>

        <main>
            <slot></slot>
        </main>

        <Footer></Footer>
    </div>
</template>

<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        },
        {
            rel: "stylesheet",
            href: "/style/styles.css"
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.min.css"
        },
    ],
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
            body: true
        },
        {
            src: "/js/main.js",
            body: true
        },
        {
            src: "/js/actions.js",
            body: true
        },
        {
            src: "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.1/dist/sweetalert2.all.min.js",
            body: true
        },
    ]
});
</script>
