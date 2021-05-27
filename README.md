# CUADRANGULAR OAS
Cuadrangular-OAS para prueba técnica
# Descripción del programa 

Este desarrollo consta de la comunicación con base de datos llamada teams y el front-end, permitiendo registrar varios equipos y editarlos posteriormente. La edición consta de actualizar el numero de partidos ganados, empatados y perdidos; para asi calcular el puntaje de cada equipo y organizarlos de menor a mayo basandose en este. La aplicacion tambien permite borrar un equipo de ser necesario.

# Dependencias

  - Angular cli
  - Node.js
  - Typescript
  - Xampp/MYSQL

# Ejecución

1. Para realizar la ejecución de la aplicación, primero se debe conectar a una base de datos generada en MYSQL, para lo que se debe ejecutar el comando:
- mysql -u root, o en su defecto el usuario de la base de datos (este proyecto fue implementado usando Xampp con MariaDB), el archivo para generar la base de datos se encuentra en la carpeta database, archivo database.sql, Se debe utilizar este codigo en el entorno mysql deseado, ya sea conectandose por consola o por interfaz. Una vez creada y conectada la base de datos local se puede acceder a las funcionalidades de la página.
2. Desde la ubicación de server, se deben ejecutar los comandos npm run build y npm run dev abriendo terminales independientes.
3. Para conectar la aplicación con el servidor, y desplegarla en el navegador, se ejecuta en otra consola el comando ng serve, que asigna el puerto 4200 del localhost a la aplicación, http://localhost:4200/. Desde allí se podrá acceder a las diferentes opciones de la app.


# Navegación
Al iniciar la aplicacion se despliega la ventana de resultados, donde se mostraran las estadisticas de los equipos registrados.
![alt text](https://github.com/nesg1212/Cuadrangular-OAS/blob/main/resultados.png)

Para registrar equipos pulse en el botón registro en la parte superior derecha. Se desplegara un formulario para registrar el nombre del equipo, en este proceso se asignaran todas sus estadisticas en cero.
![Ingreso](https://github.com/nesg1212/Cuadrangular-OAS/blob/main/Registro.png)

Para ingresar los resultados de los partidos puede registrar las victorias, derrotas o empates de cada equipo dando clic en su respectivo botón editar. En esta pestaña se desplegara un formulario con los datos actuales del equipo, puede actualizar o eliminar el equipo. Puede escribir los números de los resultados, o incrementar con las flechas de la derecha del label. Los campos numericos solo admiten este tipo de dato.
![alt text](https://github.com/nesg1212/Cuadrangular-OAS/blob/main/Editar.png)
