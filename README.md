# Proyecto React Web de Noticias

Este proyecto consiste en una aplicación web desarrollada con React que consume la API proporcionada por Newsdata.io. La aplicación permite al usuario seleccionar diferentes categorías de noticias a través de un formulario y muestra las noticias correspondientes en cards.

## Componentes

- Título
El componente Título representa el encabezado de la aplicación.

- Formulario
El componente Formulario incluye un selector que permite al usuario elegir diferentes categorías de noticias.

- ListaNoticias
El componente ListaNoticias se encarga de mostrar las noticias recuperadas de la API en tarjetas.

- Noticia
El componente Noticia representa una única noticia, que se muestra dentro de la lista de noticias.

## Funcionamiento

El usuario selecciona una categoría de noticias desde el formulario.
La aplicación hace una solicitud a la API correspondiente para recuperar las noticias de la categoría seleccionada.
Las noticias recuperadas se muestran en cards dentro del componente ListaNoticias.
Cada tarjeta de noticia contiene detalles como el título, descripción, imagen, fuente y fecha de publicación.

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

- Clona este repositorio en tu máquina local.
- Abre una terminal en el directorio raíz del proyecto.
- Ejecuta el siguiente comando para instalar las dependencias: npm install
- Una vez que se completen las instalaciones, puedes iniciar la aplicación con: npm start

## Tecnologías Utilizadas
- React.js
- HTML
- CSS
- Bootstrap
- React-bootstrap
-  API proporcionada por Newsdata.io


## Contribución

Si deseas contribuir a este proyecto, ¡siéntete libre de hacerlo! Puedes abrir problemas para reportar errores o sugerir mejoras, o enviar solicitudes de extracción con tus contribuciones.

## Notas adicionales

Asegúrate de tener una conexión a Internet activa para que la aplicación pueda recuperar las noticias de la API.
Se recomienda revisar la documentación de la API para conocer las categorías disponibles y los parámetros de solicitud.
Este proyecto se ha desarrollado como parte de un ejercicio de aprendizaje con el objetivo de practicar el desarrollo de aplicaciones web con React y consumir APIs externas.



