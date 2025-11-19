
# API de Gestión de Usuarios

Este proyecto es una API REST para la gestión de usuarios (CRUD - Crear, Leer, Actualizar, Eliminar) construida con Node.js, Express y Sequelize.

Una característica particular de este proyecto es que cada operación CRUD principal se ejecuta en un servidor independiente en un puerto diferente.

## Características

- **Crear** un nuevo usuario.
- **Obtener** una lista de todos los usuarios.
- **Obtener** un usuario específico por su ID.
- **Actualizar** la información de un usuario existente.
- **Eliminar** un usuario por su ID.
- Documentación de API con **Swagger**.
- Uso de **Sequelize** como ORM para interactuar con una base de datos MySQL.

## Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [NPM](https://www.npmjs.com/)
- Una base de datos [MySQL](https://www.mysql.com/) en ejecución.

## Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/castilloxavie/practica_POO_nodejs.git
    ```
2.  Navega al directorio `backend`:
    ```bash
    cd backend
    ```
3.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

## Configuración

1.  Crea un archivo `.env` en la raíz del directorio `backend`.
2.  Copia el contenido del archivo `.env.example` (si existe) o añade las siguientes variables de entorno necesarias para la conexión a la base de datos y la configuración del servidor:

    ```env
    # Configuración de la Base de Datos
    DB_USER=tu_usuario_de_mysql
    DB_PASSWORD=tu_contraseña_de_mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_NAME=nombre_de_tu_bd

    # Puertos de los Servidores
    SERVER_CREAR=4001
    SERVER_OBTENER=4002
    SERVER_ACTUALIZAR=4003
    SERVER_ELIMINAR=4004
    ```

3.  Asegúrate de que la base de datos especificada en `DB_NAME` exista en tu servidor MySQL. El servidor creará la tabla de usuarios automáticamente al iniciar.

## Uso

Debido a la arquitectura del proyecto, debes ejecutar un servidor diferente para cada tipo de operación.

### Iniciar el servidor para CREAR usuarios
Este servidor maneja la creación de nuevos usuarios.

```bash
npm run create
```
El servidor se ejecutará en `http://localhost:4001`.

### Iniciar el servidor para OBTENER usuarios
Este servidor maneja la obtención de usuarios.

```bash
npm run get
```
El servidor se ejecutará en `http://localhost:4002`.

### Iniciar el servidor para ACTUALIZAR usuarios
Este servidor maneja la actualización de la información de los usuarios.

```bash
npm run update
```
El servidor se ejecutará en `http://localhost:4003`.

### Iniciar el servidor para ELIMINAR usuarios
Este servidor maneja la eliminación de usuarios.

```bash
npm run delete
```
El servidor se ejecutará en `http://localhost:4004`.

## Endpoints de la API

**Nota:** Asegúrate de que el servidor correcto esté en ejecución para el endpoint que deseas probar.

### ➕ Crear Usuario
- **Endpoint:** `POST /users/create`
- **Servidor:** `create` (Puerto 4001)
- **Body (JSON):**
  ```json
  {
    "nombre": "John",
    "apellido": "Doe",
    "correo": "john.doe@example.com",
    "contrasena": "tu_contraseña_segura"
  }
  ```

### 🔍 Obtener Usuarios

- **Endpoint (todos los usuarios):** `GET /users/all`
- **Servidor:** `get` (Puerto 4002)

- **Endpoint (usuario por ID):** `GET /users/:id`
- **Servidor:** `get` (Puerto 4002)
- **Ejemplo:** `GET http://localhost:4002/users/1`

### 🔄 Actualizar Usuario

- **Endpoint:** `PUT /users/:id`
- **Servidor:** `update` (Puerto 4003)
- **Ejemplo:** `PUT http://localhost:4003/users/1`
- **Body (JSON):**
  ```json
  {
    "nombre": "Jane",
    "apellido": "Doe"
  }
  ```

### ❌ Eliminar Usuario

- **Endpoint:** `DELETE /users/:id`
- **Servidor:** `delete` (Puerto 4004)
- **Ejemplo:** `DELETE http://localhost:4004/users/1`

## Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript.
- **Express** - Framework web para Node.js.
- **Sequelize** - ORM para Node.js basado en promesas.
- **MySQL2** - Cliente de MySQL para Node.js.
- **Dotenv** - Para cargar variables de entorno desde un archivo `.env`.
- **Cors** - Middleware para habilitar CORS.
- **Helmet** - Middleware para ayudar a securizar las aplicaciones Express.
- **Morgan** - Middleware para el registro de solicitudes HTTP.
- **Swagger JSDoc** y **Swagger UI Express** - Para la documentación de la API.
