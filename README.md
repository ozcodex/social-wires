# Social Wires

Social Wires es una red social en la que los usuarios pueden publicar mensajes y recibir reacciones y comentarios de otros usuarios.

# Descripcion Tecnica

Usa la version 18.15.0 de nodeJS ya que actualmente es la version LTS.
Esta construido utilizando Typescript y NestJS.

## Modulos

* **common:** Este módulo será utilizado para almacenar todas las funcionalidades que son comunes para toda la aplicación

* **messages:** Este módulo será utilizado para gestionar las publicaciones y comentarios en la aplicación.

* **auth:**  Este módulo será utilizado para gestionar la autenticación y autorización de los usuarios en la aplicación.

## Estructura de un Modulo

* **interfaces:** En este directorio se almacenan las interfaces de TypeScript que se utilizarán en el módulo correspondiente para definir la forma y estructura de los objetos y datos que se manejarán en la aplicación.

* **types:** En este directorio se almacenan los tipos de datos personalizados que se utilizarán en el módulo correspondiente.

* **guards:** En este directorio se almacenan los guardias que se encargan de proteger las rutas o endpoints que necesiten autorización para acceder a ellos, como por ejemplo, las rutas que requieren autenticación del usuario.

* **pipes:** En este directorio se almacenan los tuberías que se utilizan para validar y transformar los datos que se reciben en las solicitudes HTTP, como por ejemplo, transformar un objeto JSON a una instancia de una clase específica.

* **decorators:** En este directorio se almacenan los decoradores que se utilizan para añadir funcionalidades o modificar el comportamiento de los métodos o clases del módulo correspondiente, como por ejemplo, añadir metadata a un método.

* **helpers:** En este directorio se almacenan las funciones de ayuda que se utilizan en el módulo correspondiente para simplificar la lógica del código.

* **dto:** En este directorio se almacenan los objetos de transferencia de datos que se utilizan para definir los datos que se enviarán o recibirán en las solicitudes HTTP.

* **services:** En este directorio se almacenan los servicios que se utilizan para realizar operaciones específicas en el módulo correspondiente.

* **app.module.ts:** Este archivo es el archivo principal del módulo correspondiente y se utiliza para importar los módulos y configuraciones necesarias para el correcto funcionamiento de la aplicación.

* **app.controller.ts:** Este archivo es el controlador principal del módulo correspondiente y se utiliza para manejar las solicitudes HTTP entrantes y enviar las respuestas correspondientes.

## Base de Datos

La base de datos se encuentra definida en su respectivo archivo `docker-compose.yml` se utiliza PostgreSQL y la ruta del volumen donde se almacenan los datos es: ./postgres/var/lib/postgresql/data

Todas las entidades cuentan con el parametro created_at de tipo timestampz con la fecha exacta en la que se guardo ese registro. 

## Autorizacion

La autorizacion se maneja mediante un `access_token` Bearer que tiene un tiempo de expiracion definido en el fichero de entorno `.env` 

