import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, "../../.env") })

export default {
  openapi: "3.0.3",
  info: {
    title: "API de Usuarios",
    version: "1.0.0",
    description: "Documentación unificada de servicios de creación, obtención, actualización y eliminación de usuarios"
  },
  servers: [
    { url: `http://localhost:${process.env.SERVER_CREAR || 4001}` , description: "Crear usuarios" },
    { url: `http://localhost:${process.env.SERVER_OBTENER || 4002}` , description: "Obtener usuarios" },
    { url: `http://localhost:${process.env.SERVER_ACTUALIZAR || 4003}` , description: "Actualizar usuarios" },
    { url: `http://localhost:${process.env.SERVER_ELIMINAR || 4004}` , description: "Eliminar usuarios" }
  ],
  components: {
    schemas: {
      User: {
        type: "object",
        required: ["nombre", "email", "password"],
        properties: {
          nombre: { type: "string" },
          email: { type: "string", format: "email" },
          password: { type: "string" }
        }
      },
      UserUpdate: {
        type: "object",
        properties: {
          nombre: { type: "string" },
          email: { type: "string", format: "email" },
          password: { type: "string" }
        },
        additionalProperties: false
      },
      MessageResponse: {
        type: "object",
        properties: {
          message: { type: "string" }
        }
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: { type: "string" },
          message: { type: "string" }
        }
      }
    }
  },
  paths: {
    "/users/create": {
      post: {
        summary: "Crear usuario",
        description: "Crea un nuevo usuario",
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/User" } }
          }
        },
        responses: {
          "200": {
            description: "Usuario creado correctamente",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    data: { $ref: "#/components/schemas/User" }
                  }
                }
              }
            }
          },
          "500": { description: "Error del servidor", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } }
        }
      }
    },
    "/users/all": {
      get: {
        summary: "Listar usuarios",
        description: "Obtiene todos los usuarios",
        responses: {
          "200": {
            description: "Listado de usuarios",
            content: {
              "application/json": {
                schema: { type: "array", items: { $ref: "#/components/schemas/User" } }
              }
            }
          },
          "500": { description: "Error del servidor", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } }
        }
      }
    },
    "/users/{id}": {
      get: {
        summary: "Obtener usuario por ID",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        responses: {
          "200": { description: "Usuario encontrado", content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } } },
          "404": { description: "Usuario no encontrado", content: { "application/json": { schema: { $ref: "#/components/schemas/MessageResponse" } } } },
          "500": { description: "Error del servidor", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } }
        }
      },
      put: {
        summary: "Actualizar usuario",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/UserUpdate" } }
          }
        },
        responses: {
          "200": {
            description: "Usuario actualizado",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    id: { type: "integer" },
                    updated: { $ref: "#/components/schemas/UserUpdate" }
                  }
                }
              }
            }
          },
          "400": { description: "Solicitud inválida", content: { "application/json": { schema: { $ref: "#/components/schemas/MessageResponse" } } } },
          "404": { description: "Usuario no encontrado", content: { "application/json": { schema: { $ref: "#/components/schemas/MessageResponse" } } } },
          "500": { description: "Error del servidor", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } }
        }
      },
      delete: {
        summary: "Eliminar usuario",
        parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }],
        responses: {
          "200": { description: "Usuario eliminado", content: { "application/json": { schema: { $ref: "#/components/schemas/MessageResponse" } } } },
          "404": { description: "Usuario no encontrado", content: { "application/json": { schema: { $ref: "#/components/schemas/MessageResponse" } } } },
          "500": { description: "Error del servidor", content: { "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } } } }
        }
      }
    }
  }
}