*This document explains how an end user or administrator can use the Inception project.*

---

##  Services Provided
The project includes the following services, each running in its own Docker container:

- **Nginx**: Serves the website and handles HTTP requests.
- **Mariadb**: Stores all data for the website.
- **Wordpress**: The CMS used for building the website.
- **Redis**: Redis cache used by wordpress to manage its cache.
- **FTP**: File Transfer Protocol used to add the ability to upload and download.
- **Adminer**: A database management tool to manage the Mariadb database. 
- **CAdvisor**: An open-source tool that monitors and analyzes resource usage (CPU, memory, network, disk) and performance of running containers.

---

##  Starting and Stopping the Project

### Start the project
Use Makefile to start all services:
```bash
make
```

You should also stop the services using the Makefile:
```bash
make down
```

##  Access the website and the administration panel.
To access the wordpress website enter the following url:
```bash
https://helarras.42.fr/
```

To Access the administration panel:
```bash
https://helarras.42.fr/wp-admin
```

##  Locate and manage credentials.
The project requires a `.env` file located in the `srcs/` directory.

##  Check that the services are running correctly.
To check your currently running services run :
```bash
docker ps
```