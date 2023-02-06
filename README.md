# Apliación de tareas

La aplicacion es un sistema de gestión de tareas que permite ver, editar, agregar y eliminar tareas. Este proyecto es un ejercicio práctico desarrollado con Nuxt 3 para aplicar a la vacante de desarrollador front end.

## Tecnologías, frameworks y librerías utilizadas utilizadas

- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="JuveR" width="50px"> Vue
- <img src="https://nuxtjs.org/design-kit/colored-logo.svg" alt="JuveR" width="50px"> Nuxt
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="JuveR" width="50px"> Bootstrap
- <img src="https://img.stackshare.io/service/11002/remixicon-padd.png" alt="JuveR" width="50px"> Remix Icon
- <img src="https://sgo.pm.ce.gov.br/_lib/libraries/grp/sweetalert/sweetalert2-9.7.2/assets/swal2-logo-square.png" alt="JuveR" width="50px"> Sweet Alert

## Estructura de la aplicación

### pages/index.vue

Es la página principal de la aplicación, contiene el formulario para agregar una nueva tarea y la tabla donde se muestran las tareas ya creadas.

### components/

Contiene el Footer y Nabar de la aplicación

### layouts/default.vue

Contiene la estructura de las páginas de la aplicación (el footer y el header); También contiene un script que importa las hojas de estilo y los archivos JavaScript que se utilizan, así como la importación de algunas tecnologías por medio de cdn.

### public/style/styles.css

Es la hoja de estilo utilizada principalmente para que el footer se mantenga hasta abajo de la pantalla.

### public/js/main.js

Es el archivo JavaScript utilizado para llenar la tabla con todas las tareas por medio de un ciclo y con uso del endpoint get de la API

### public/js/actions.js

Este archivo JavaScript se utiliza para mostrar, actualizar, crear y borrar una tarea, también incluye el código necesario para mostrar las ventanas modales con ayuda de sweet alert, estas ventanas se utilizan para mostrar información, mostrar cuadros de confirmación, mostrar alertas, etc.

*El token utilizado para los endpoints en toda la aplicacion es: **erickhi***

# Nuxt 3 Minimal Starter | How to use

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
