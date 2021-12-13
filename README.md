# Instrucciones para inicializar el proyecto en ambiente local

## 1.- Cargar el proyecto a un editor de código

## 2.- Instalar todas las dependencias con el comando `npm install`

## 3.- Al termino de la instalación ejecutar el comando `npm start`

## 4.- Para iniciar el JSON Server, ejecutar el comando `npm run api-backend`

## 5.- La aplicación tiene un setInterval(), por ello es necesario esperar un momento mientras carga la información del JSON, esto es debido a que no se tiene una base de datos real para que las peticiones sean automáticas. 

## 6.- En la aplicación se puede ejecutar los filtros y agregar registros. 

## 7.- Realizar lo siguiente para poder consumir la api JSON Server en el ambiente local. 
- Comentar la sección de pruebas y descomentar la sección del helperHttp() del siguiente archivo: AppHarryPotterAEM\src\Components\Contenido\Contenido.js
- Para el guardado, descomentar la SECCIÓN API del siguiente archivo: AppHarryPotterAEM\src\Components\Formulario\Formulario.js
- Si es necesario ejecutar de nuevo desde el paso 3.

Nota: debido a que no se implemento un servidor y una base de datos real, es necesario realizar esas configuraciones.

## 8.- Instrucciones para inicializar el proyecto en ambiente publicado
Para el deploy de la aplicación, se implemento Heroku, debido a que en mi ambiente de desarrollo ya lo tengo preparado para ejecutar los deploy en la herramienta. 

De igual manera comparto el link de la aplicación: https://app-hp-aem.herokuapp.com/

##  ¿Qué es lo que más te gustó de tu desarrollo?

Me gusto el haber realizado este pequeño proyecto, ya que con ello puedo saber que nivel de conocimientos tengo hasta el momento, estuvo muy entretenido y fue un reto el haber implementado la aplicación en pocos días. 

## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

Describo las mejoras que podría aplicar, en este caso literalmente fue por tiempo:

- Implementar completamente el redux para todos los eventos.
- Mejorar el diseño responsivo de la aplicación.
- Implementar la funcionalidad de agregar a la lista los item seleccionados.
- Generar el CRUD completo de la aplicación.
- Tal vez genera una base de datos real para que la aplicación este más completa.
- Implementar mejores herramientas y técnicas para el diseño responsivo.
