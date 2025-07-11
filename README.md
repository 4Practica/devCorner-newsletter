# DevCorner Newsletter Microservice 📬

[![Node.js](https://img.shields.io/badge/node-18%2B-brightgreen)](https://nodejs.org/)
[![Dockerized](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a microservice for managing subscribers and sending transactional emails for the [DevCorner](https://devcorner.top) blog. Perfect to keep your readers informed about new content! 🚀

---

## 🚀 Main Features

- Register subscribers via email.
- Send a welcome email using a [Brevo (Sendinblue)](https://www.brevo.com/) template.
- Automatically send newsletters when new blog posts are published.
- API Key protection for sensitive routes.
- Detailed logs with `morgan` and console output for debugging.

---

## ⚙️ Technologies Used

- Node.js + Express
- Brevo REST API (for transactional emails)
- Docker & Docker Compose
- Morgan for logging
- Dotenv for environment variable management

---

## 📁 Project Structure

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

## 🔐 Environment Variables

Create a `.env` file based on the example `.env.example`:

```env
PORT=3001
API_KEY=your_secure_api_key
BREVO_API_KEY=your_brevo_api_key
BREVO_TEMPLATE_ID_WELCOME=123456
BREVO_TEMPLATE_ID_NEW_POST=654321
FROM_NAME=email
FROM_EMAIL=email@email.com
```

You can find your API Key and Template IDs in the [Brevo Dashboard](https://app.brevo.com/account/SMTP).

---

## ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) if using containers

---

## 💻 Run Locally (Development Mode)

```bash
npm install
npm run dev
```

Access the service at: `http://localhost:3001`

---

## 🐳 Run with Docker

### 1. Build and Start

```bash
docker-compose up --build
```

### 2. Stop

```bash
docker-compose down
```

---

## 📬 Available Endpoints

> All routes are protected using the `x-api-key` header.

### `POST /api/newsletter/register`

Registers a new subscriber and sends a welcome email.

```json
{
	"email": "user@example.com"
}
```

### `POST /api/newsletter/new-post`

Sends a newsletter to all subscribers (simulated in this version).

---

### 🚀 Release a new version into production Docker hub

This guide outlines the required steps to build and publish a new version of a Docker image to Docker Hub.

> ⚠️ Every release must include:
>
> - A version tag (e.g., `1.0.1`)
> - The `latest` tag pointing to that version

> Note
>
> - The `<version>` should be replace

---

### 🧱 Step 1: Build the image with a version tag

Replace `<version>` with the version you are releasing:

```shell
docker build . -t jdvd01/devcorner-newsletter:<version>
```

### 🏷️ Step 2: Tag the image as latest

This ensures that the latest tag always reflects the most recent version.

```shell
docker tag jdvd01/devcorner-newsletter:<version> jdvd01/devcorner-newsletter:latest
```

You can also use the image id to tag. Sometimes is easier.

### 🔐 Step 3: Log in to Docker Hub (if not already logged in)

```shell
docker login
```

Enter your Docker Hub credentials when prompted.

### ☁️ Step 4: Push both tags to Docker Hub

```shell
docker push jdvd01/devcorner-newsletter:<version>
docker push jdvd01/devcorner-newsletter:latest
```

Both tags must be pushed for the release to be considered complete.

### ✅ Step 5: Verify the release on Docker Hub

Go to: https://hub.docker.com/r/jdvd01/devcorner-newsletter

Make sure both tags are listed:

`<version>` and `latest`

## 📝 Additional Notes

- Subscriber and post data can be integrated with Strapi if persistent storage is needed.
- Logs are printed to the console using `morgan` and `console.log/error`.
- Brevo templates must be created beforehand to function properly.
