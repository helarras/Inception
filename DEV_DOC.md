*This document explains how a developer can set up, build, and manage the Inception project.*

---

##  Environment Setup

### Prerequisites
Before starting, make sure you have the following installed:
- Docker
- Make
- Git

### Configuration Files
- `.env` — stores environment variables for the project
- `docker-compose.yml` — rnus all containers
- Dockerfiles — used to build each service image
---

##  Building and Launching the Project

### Using Docker Compose
To build and start all services:

**Using Makefile**
```bash
make
```
**Using Docker compose**
```bash
docker compose -f ./srcs/docker-compose.yml up -d
```

## Managing Containers and Volumes
List running containers:
```bash 
docker ps
```
View logs for a container:
```bash
docker logs <container_name>
```
Enter a running container:
```bash
docker exec -it <container_name> bash
```
List Docker volumes:
```bash
docker volume ls
```

##  Project Data and Persistence
The data is stored on the host machine at `~/data` directory.

the data persists because it is stored on the host machine not inside the containers.