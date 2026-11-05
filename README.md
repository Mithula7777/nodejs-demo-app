# Node.js CI/CD Pipeline Using GitHub Actions and Docker

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

Whenever code is pushed to the `main` branch, GitHub Actions automatically:
1. Checks out the source code.
2. Sets up Node.js.
3. Installs application dependencies.
4. Runs application tests.
5. Logs in to Docker Hub.
6. Builds and pushes the Docker image to Docker Hub.

The Docker image is then pulled and deployed on an AWS EC2 instance.

## Technologies Used

- AWS EC2
- Amazon Linux 2023
- Node.js 20
- Express.js
- Git and GitHub
- GitHub Actions
- Docker
- Docker Hub

## Project Architecture

Developer → GitHub Repository → GitHub Actions → Automated Tests → Docker Image Build → Docker Hub → AWS EC2 Deployment

## Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── test/
│   └── app.test.js
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── .gitignore
```

## Application Endpoints

| Endpoint | Description |
|---|---|
| `/` | Displays application welcome message |
| `/health` | Returns application health status |

## Run Locally

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

Application runs on port 3000.

## Docker Commands

Build Docker image:

```bash
docker build -t nodejs-demo-app:latest .
```

Run Docker container:

```bash
docker run -d --name nodejs-container -p 3000:3000 nodejs-demo-app:latest
```

Check running containers:

```bash
docker ps
```

## GitHub Actions Configuration

Workflow file:

`.github/workflows/main.yml`

Trigger:

- Push to the `main` branch.

Pipeline stages:

1. Checkout Source Code
2. Setup Node.js
3. Install Dependencies
4. Run Application Tests
5. Login to Docker Hub
6. Build and Push Docker Image

## GitHub Secrets

The following repository secrets are configured:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`

These credentials allow GitHub Actions to authenticate with Docker Hub securely.

## Docker Hub Repository

Docker Hub username: `mithula639`

Repository: https://hub.docker.com/r/mithula639/nodejs-demo-app

Docker image:

```text
mithula639/nodejs-demo-app:latest
```

## AWS EC2 Deployment

Pull the latest Docker image:

```bash
sudo docker pull mithula639/nodejs-demo-app:latest
```

Run the container:

```bash
sudo docker run -d --name nodejs-demo-container -p 3000:3000 mithula639/nodejs-demo-app:latest
```

Verify the application:

```bash
curl http://localhost:3000
curl http://localhost:3000/health
```

Note: The GitHub Actions pipeline automatically tests, builds, and pushes the Docker image. The EC2 pull and deployment in this project are performed manually.

## Project Outcome

- Successfully created a Node.js web application.
- Created and tested a Docker image.
- Configured GitHub Actions for CI/CD automation.
- Automated application testing.
- Automated Docker image building and pushing to Docker Hub.
- Deployed the Docker image on AWS EC2.

## Author

Mithula Prabhakaran

GitHub: https://github.com/Mithula7777

