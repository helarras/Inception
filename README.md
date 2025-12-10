*This project has been created as part of the 42 curriculum by helarras*

# Inception

##  Description
Inception is a project that introduces the fundamentals of containerization with Docker.
It consists of setting up multiple services, each running in its own container, such as a web server and a database, all working together inside a controlled environment.

---

##  Instructions

#### 1. Prerequisites
```bash
Docker, Make
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
Note: Don't forget to paste the .env file containing the required environment variables inside srcs/ directory

##  Resources
- Docker
  - Docs: [Docker Docs](https://docs.docker.com/)
  - Image/Container: [Image/Container](https://youtu.be/X2hpxp3Kq6A?si=Rls4YlAGWXLs2jYp)
- NGINX:
  - Nginx Handbook: [Nginx article](https://www.freecodecamp.org/news/the-nginx-handbook)
  - SSL/TLS: [SSL/TLS Certificate](https://www.youtube.com/watch?v=T4Df5_cojAs)



