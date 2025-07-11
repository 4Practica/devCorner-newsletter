# Microservicio de Newsletter de DevCorner 📬

[![Node.js](https://img.shields.io/badge/node-18%2B-brightgreen)](https://nodejs.org/)
[![Dockerizado](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/)
[![Licencia: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este es un microservicio para gestionar suscriptores y enviar correos electrónicos transaccionales para el blog [DevCorner](https://devcorner.top). ¡Perfecto para mantener informados a tus lectores sobre nuevo contenido! 🚀

---

## 🚀 Características principales

- Registro de suscriptores vía correo electrónico.
- Envío de un correo de bienvenida utilizando una plantilla de [Brevo (Sendinblue)](https://www.brevo.com/).
- Envío automático de newsletter cuando se publica un nuevo artículo.
- Protección de rutas sensibles mediante API Key.
- Logs detallados con `morgan` y consola para depuración.

---

## ⚙️ Tecnologías utilizadas

- Node.js + Express
- API REST de Brevo (para correos transaccionales)
- Docker & Docker Compose
- Morgan para logs HTTP
- Dotenv para variables de entorno

---

## 📁 Estructura del proyecto

```bash
.
├── controllers
├── middleware
├── routes
├── services
├── utils
├── index.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
└── package.json
```

---

## 🔐 Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```env
PORT=3001
API_KEY=clave_segura
BREVO_API_KEY=tu_clave_brevo
BREVO_TEMPLATE_ID_WELCOME=123456
BREVO_TEMPLATE_ID_NEW_POST=654321
FROM_NAME=email
FROM_EMAIL=email@email.com
```

Encuentra tus claves en [Brevo Dashboard](https://app.brevo.com/account/SMTP).

---

## ✅ Requisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)

---

## 💻 Ejecutar localmente (Modo desarrollo)

```bash
npm install
npm run dev
```

Accede a: `http://localhost:3001`

---

## 🐳 Ejecutar con Docker

### 1. Construir y levantar

```bash
docker-compose up --build
```

### 2. Detener

```bash
docker-compose down
```

---

## 📬 Endpoints disponibles

> Todas las rutas están protegidas con el header `x-api-key`.

### `POST /api/newsletter/register`

Registra un nuevo suscriptor y envía el correo de bienvenida.

```json
{
	"email": "usuario@example.com"
}
```

### `POST /api/newsletter/new-post`

Envía una newsletter a todos los suscriptores (simulado en esta versión).

---

### 🚀 Publicar nueva versión en Docker Hub

Guía para construir y publicar una nueva versión de la imagen en Docker Hub.

> ⚠️ Cada versión debe incluir:
>
> - Una etiqueta de versión (ej: `1.0.1`)
>
> - La etiqueta `latest` apuntando a esa versión

---

### 🧱 Paso 1: Construir la imagen con etiqueta

Reemplaza `<version>` con la versión deseada:

```bash
docker build . -t jdvd01/devcorner-newsletter:<version>
```

### 🏷️ Paso 2: Etiquetar como latest

```bash
docker tag jdvd01/devcorner-newsletter:<version> jdvd01/devcorner-newsletter:latest
```

También puedes usar el ID de la imagen para etiquetar.

### 🔐 Paso 3: Iniciar sesión en Docker Hub

```bash
docker login
```

### ☁️ Paso 4: Subir ambas etiquetas

```bash
docker push jdvd01/devcorner-newsletter:<version>
docker push jdvd01/devcorner-newsletter:latest
```

### ✅ Paso 5: Verifica en Docker Hub

Ir a: https://hub.docker.com/r/jdvd01/devcorner-newsletter

Asegúrate de que existan ambas etiquetas: `<version>` y `latest`.

---

## 📝 Notas adicionales

- Puedes integrar Strapi para guardar suscriptores y artículos de forma persistente.
- Los logs se imprimen con `morgan` y `console.log/error`.
- Las plantillas deben estar configuradas previamente en Brevo.
