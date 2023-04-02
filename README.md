# test2804
Nombre de la página:  GameStart

Game Start es un sitio en el que te vas a aventurar en un mundo de información detallada sobre juegos y accesos a plataformas.

La página se diseñó completamente con javascript y nodeJS. 

Para trabajar con este proyeco es necesario contar con conocimientos de nodeJS.

No olvide instalar todas las dependencias con el comando 

npm install

En este proyecto debe crear una base de datos sin tablas pero eso lo veremos mas adelante...

Antes de nada vamos a comenzar por cambiar el nombre del archivo “.env.example” que se encuentra en la carpeta myapp por  “.env ”.
En  dicho archivo Debe Completar API_URL= https://www.freetogame.com/api/games y completar los datos de su base de datos.
No olvidar guardar los cambios.


Primer Punto
Se desea bajar toda la lista de juegos desde una Api.
En este caso vamos a descargar los datos desde https://www.freetogame.com/api/games
Por la que se debe ejecutar el archivo “requestApi ” mediante el comando:

node requestApi

En la que encontrará todo el código backend que se usó para la obtención de dicha lista.

El comando crea automaticamente la carpeta "file" y el archivo "juegos.json" donde se encuentra la lista de juegos que se descargo en la carpeta "public"


Herramientas: Fetch y dotenv


Segundo punto

Para generar y almacenar localmente una segunda imagen (thumbnail) del juego con un tamaño del 50% y en blanco y negro. Debe ejecutar el archivo “downloadimg.js” con el comando:

node downloadimg.js

La cual se encarga de descargar todos las imágenes en la carpeta “ image” 


Tercer Punto

Para subir los juegos obtenidos de la APi a la base de datos se
genero un código que crea la tabla juegos en My SQL y migra los datos a dicha DB
Para subir los generos a la base de datos se
genero un código que crea la tabla genero en My SQL y migra los datos a dicha DB.
Cabe resaltar que estos códigos permiten realizar controles de versiones independientemente de la base de datos.

Para realizar la conexión con su BD edite el archivo .env con sus datos. En caso de haberlo hecho ignore este item.

para ejecutar la migración debe ejecutar dichos comandos:
Este comando crea todas las tablas necesarias en la base de datos
a) npx sequelize db:migrate 
Este comando carga las tablas con sus respectivos datos.
b) npx sequelize db:seed:all 

Comandos a tener en cuenta en caso de riesgo:

Para consultar todos los comandos de zequalize
npx sequelize
Para crear models en la carpeta "migratios"
npx sequelize migration:generate --name nombre-de-la-tabla
Para crear seeders


Herramientas : Sequelize-Migration


Cuarto Punto y Quinto Punto

El diseño de la vista home y detalle se encuentra realizado totalmente con html y css

Herramientas: html y css

