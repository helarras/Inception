*This project has been created as part of the 42 curriculum by helarras*

# Inception

##  Description
Inception is a project that introduces the fundamentals of containerization with Docker.
It consists of setting up multiple services, each running in its own container, such as a web server and a database, all working together inside a controlled environment.

---

##  Instructions

#### 1. Prerequisites
```bash
Git
Make
Docker
```
#### 2. Environment Configuration
The project requires a `.env` file located in the `srcs/` directory.
You must create this file and define the following variables:

**File Path:** `srcs/.env`

```bash
# --- Domain & SSL ---
DOMAIN_NAME=
CERT_PATH=
KEY_PATH=

# --- MariaDB Database ---
DB_NAME=
DB_ADMIN=
DB_USER=
DB_PASSWORD=
DB_ROOT_PASSWORD=

# --- WordPress Setup ---
WP_WEBSITE_URL=
WP_WEBSITE_TITLE=
WP_DB_HOST=
WP_DB_NAME=
WP_DB_ADMIN=
WP_DB_USER=
WP_DB_USER_PASS=
WP_DB_PASSWORD=

# --- Redis Cache ---
WP_REDIS_HOST=
WP_REDIS_PORT=
WP_REDIS_DATABASE=
WP_CACHE_KEY_SALT=

# --- FTP Server ---
FTP_USER=
FTP_PASSWORD=
FTP_DIR=
```

####  3. Installation
```bash
git clone git@vogsphere.1337.ma:vogsphere/intra-uuid-92a6bf16-9b33-4921-aca6-ca5449bc9c33-7125618-helarras inception
cd inception
make
```
Note: Don't forget to paste the .env file containing the required environment variables inside `srcs/` directory

##  Resources
- Docker
  - Docs: [Docker Docs](https://docs.docker.com/)
  - Image/Container: [Image/Container](https://youtu.be/X2hpxp3Kq6A?si=Rls4YlAGWXLs2jYp)
- NGINX:
  - Nginx Handbook: [Nginx article](https://www.freecodecamp.org/news/the-nginx-handbook)
  - SSL/TLS: [SSL/TLS Certificate](https://www.youtube.com/watch?v=T4Df5_cojAs)

#### AI-Usage:
  AI tools were used to help improve the wording and organization of the documentation, as well as to clarify certain technical points related to Docker.

##  Project Description

### Use of Docker
Docker is used to separate the different services into independent containers.  
This makes the system easier to manage, more secure, and more scalable.  
Each service is isolated but still able to communicate inside a controlled environment.

### Included Sources
- Dockerfiles to build the images
- docker-compose.yml to run all containers
- Configuration files and scripts for each service

### Main Design Choices
The project uses multiple containers so that each service can be updated or restarted without affecting the others.  
A Docker network is used so services can communicate privately.  
Persistent data is stored using volumes to avoid data loss.

---

##  Technical Comparisons

### Virtual Machines vs Docker
Virtual Machines run a full operating system for each instance, which requires more resources and is slower to start.  
Docker containers share the host OS kernel, making them faster, lighter, and easier to deploy for this type of project.

### Secrets vs Environment Variables
Environment variables are easier to use but not fully secure.  
Secrets offer better protection for sensitive information and are stored separately from the main configuration.

### Docker Network vs Host Network
A Docker network isolates communication between containers, increasing security and preventing conflicts.  
The host network gives containers direct access to the host’s network but removes that isolation.

### Docker Volumes vs Bind Mounts
Volumes are managed by Docker and are better for persistent data used by containers.  
Bind mounts directly access files from the host machine, which is useful during development but less safe in production.


