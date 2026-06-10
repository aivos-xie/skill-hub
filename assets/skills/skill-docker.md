---
id: skill-docker
title: Docker Knowledge
source: https://docs.docker.com/get-started/
crawled: 2026-06-11
pages: 13

# Docker 知识库
> 来源: https://docs.docker.com/get-started/ | 13 页

## Get started | Docker Docs
来源: https://docs.docker.com/get-started/

- Guides
- Manuals
- Reference

# Get started

If you're new to Docker, this section guides you through the essential resources to get started.
Follow the guides to help you get started and learn how Docker can optimize your development workflows.
For more advanced concepts and scenarios in Docker, seeGuides.

## Foundations of Docker

Install Docker and jump into discovering what Docker is.

### Get Docker

Choose the best installation path for your setup.

### What is Docker?

Learn about the Docker platform.
Learn the foundational concepts and workflows of Docker.

### Introduction

Get started with the basics and the benefits of containerizing your applications.

### Docker concepts

Gain a better understanding of foundational Docker concepts.

### Docker workshop

Get guided through a 45-minute workshop to learn about Docker.
## Docker Docs
来源: https://docs.docker.com/
# How can we help?
### Get started

Learn Docker basics.

### Guides

Optimize your development workflows with Docker.

### Manuals

Install, set up, configure, and use Docker products.

### Reference

Browse the CLI and API documentation.

## Featured topics

## Docker guides | Docker Docs
来源: https://docs.docker.com/guides/

- Get started
Filter guides by tag or programming language.

# Docker guides

Explore our collection of guides to learn how Docker can optimize your
development workflows and how to use it with specific languages, frameworks, or
technologies.
Can't find the guide you're looking for? Open an issue on thedocker/docsrepository to let us
know.

## Featured guides

Migrate a Go app to DHI
Example showing how to migrate a Go application to Docker Hardened Images
Migrate a Node.js app to DHI
Example showing how to migrate a Node.js application to Docker Hardened
Images
Migrate a Python app to DHI
Example showing how to migrate a Python application to Docker Hardened Images
Migrate to DHI from Docker Official Images
Step-by-step guide to migrate from Docker Official Images to Docker Hardened Images
Migrate to DHI from Wolfi
Step-by-step guide to migrate from Wolfi to Docker Hardened Images
Introduction to ROS 2 Development with Docker
This guide details how to containerize ROS 2 applications using Docker.

## All guides

Filtered results: showingout ofguides.
## Manuals | Docker Docs
来源: https://docs.docker.com/manuals/
# Manuals

This section contains user guides on how to install, set up, configure, and use
Docker products.

## AI and agents

All the Docker AI tools in one easy-to-access location.

### Docker Sandboxes

Run AI coding agents in isolated environments.

### MCP Catalog and Toolkit

Augment your AI workflow with MCP servers.

### Gordon

Streamline your workflow and get the most out of the Docker ecosystem with your personal AI assistant.

### Docker Model Runner

View and manage your local models.

### Docker Agent

The open-source multi-agent solution to assist you in your tasks.

## Application development

End-to-end developer solutions for innovative teams.

### Docker Desktop

Your command center for container development.

### Docker Offload

Build and run containers in the cloud.

### Docker Build Cloud

Build your images faster in the cloud.

### Testcontainers

Run containers programmatically in your preferred programming language.

### Docker Build

Build and ship any application anywhere.

### Docker Engine

The industry-leading container runtime.

### Docker Compose

Define and run multi-container applications.

## Supply chain security

Security guardrails and image analysis for your software supply chain.

### Docker Hub

Discover, share, and integrate container images.

### Docker Hardened Images

Secure, minimal images for trusted software delivery.

### Docker Scout

Image analysis and policy evaluation.

## Platform

Documentation related to the Docker platform, such as administration and
subscription management.

### Administration

Centralized observability for companies and organizations.

### Billing

Manage billing and payment methods.

### Accounts

Manage your Docker account.

### Security

Security guardrails for both administrators and developers.

### Subscription

Commercial use licenses for Docker products.

## Enterprise

Targeted at IT administrators with help on deploying Docker Desktop at scale with configuration guidance on security related features.

### Deploy Docker Desktop

Deploy Docker Desktop at scale within your company
## Reference documentation | Docker Docs
来源: https://docs.docker.com/reference/
# Reference documentation

This section includes the reference documentation for the Docker platform's
various APIs, CLIs, drivers and specifications, and file formats.

## File formats
### Dockerfile

Defines the contents and startup behavior of a single container.

### Compose file

Defines a multi-container application.

## Command-line interfaces (CLIs)
### Docker CLI

The main Docker CLI, includes alldockercommands.
```
docker

### Compose CLI

The CLI for Docker Compose, for building and running multi-container applications.

### Daemon CLI (dockerd)

Persistent process that manages containers.

## Application programming interfaces (APIs)
### Engine API

The main API for Docker, provides programmatic access to a daemon.

### Docker Hub API

API to interact with Docker Hub.

### DVP Data API

API for Docker Verified Publishers to fetch analytics data.

### Registry API

API for Docker Registry.
## Get Docker | Docker Docs
来源: https://docs.docker.com/get-started/get-docker/
# Get Docker

Docker is an open platform for developing, shipping, and running applications.
Docker allows you to separate your applications from your infrastructure so you
can deliver software quickly. With Docker, you can manage your infrastructure in
the same ways you manage your applications.
By taking advantage of Dockerâs
methodologies for shipping, testing, and deploying code quickly, you can
significantly reduce the delay between writing code and running it in production.
You can download and install Docker on multiple platforms. Refer to the following
section and choose the best installation path for you.
> Docker Desktop termsCommercial use of Docker Desktop in larger enterprises (more than 250
employees OR more than $10 million USD in annual revenue) requires apaid
subscription.
Docker Desktop terms
Commercial use of Docker Desktop in larger enterprises (more than 250

### Docker Desktop for Mac

A native application using the macOS sandbox security model that delivers all Docker tools to your Mac.

### Docker Desktop for Windows

A native Windows application that delivers all Docker tools to your Windows computer.

### Docker Desktop for Linux

A native Linux application that delivers all Docker tools to your Linux computer.
> NoteIf you're looking for information on how to install Docker Engine, seeDocker Engine installation overview.
If you're looking for information on how to install Docker Engine, seeDocker Engine installation overview.
## What is Docker? | Docker Docs
来源: https://docs.docker.com/get-started/docker-overview/
# What is Docker?

Docker enables you to separate your applications from your infrastructure so
you can deliver software quickly. With Docker, you can manage your infrastructure
in the same ways you manage your applications. By taking advantage of Docker's
methodologies for shipping, testing, and deploying code, you can

## The Docker platform

Docker provides the ability to package and run an application in a loosely isolated
environment called a container. The isolation and security let you run many
containers simultaneously on a given host. Containers are lightweight and contain
everything needed to run the application, so you don't need to rely on what's
installed on the host. You can share containers while you work,
and be sure that everyone you share with gets the same container that works in the
same way.
Docker provides tooling and a platform to manage the lifecycle of your containers:
- Develop your application and its supporting components using containers.
- The container becomes the unit for distributing and testing your application.
- When you're ready, deploy your application into your production environment,
as a container or an orchestrated service. This works the same whether your
production environment is a local data center, a cloud provider, or a hybrid
of the two.

## What can I use Docker for?
### Fast, consistent delivery of your applications

Docker streamlines the development lifecycle by allowing developers to work in
standardized environments using local containers which provide your applications
and services. Containers are great for continuous integration and continuous
delivery (CI/CD) workflows.
Consider the following example scenario:
- Your developers write code locally and share their work with their colleagues
using Docker containers.
- They use Docker to push their applications into a test environment and run
automated and manual tests.
- When developers find bugs, they can fix them in the development environment
and redeploy them to the test environment for testing and validation.
- When testing is complete, getting the fix to the customer is as simple as
pushing the updated image to the production environment.

### Responsive deployment and scaling

Docker's container-based platform allows for highly portable workloads. Docker
containers can run on a developer's local laptop, on physical or virtual
machines in a data center, on cloud providers, or in a mixture of environments.
Docker's portability and lightweight nature also make it easy to dynamically
manage workloads, scaling up or tearing down applications and services as
business needs dictate, in near real time.

### Running more workloads on the same hardware

Docker is lightweight and fast. It provides a viable, cost-effective alternative
to hypervisor-based virtual machines, so you can use more of your server
capacity to achieve your business goals. Docker is perfect for high density
environments and for small and medium deployments where you need to do more with
fewer resources.

## Docker architecture

Docker uses a client-server architecture. The Docker client talks to the
Docker daemon, which does the heavy lifting of building, running, and
distributing your Docker containers. The Docker client and daemon can
run on the same system, or you can connect a Docker client to a remote Docker
daemon. The Docker client and daemon communicate using a REST API, over UNIX
sockets or a network interface. Another Docker client is Docker Compose,
that lets you work with applications consisting of a set of containers.

### The Docker daemon

The Docker daemon (dockerd) listens for Docker API requests and manages Docker
objects such as images, containers, networks, and volumes. A daemon can also
communicate with other daemons to manage Docker services.
dockerd

### The Docker client

The Docker client (docker) is the primary way that many Docker users interact
with Docker. When you use commands such asdocker run, the client sends these
commands todockerd, which carries them out. Thedockercommand uses the
Docker API. The Docker client can communicate with more than one daemon.
docker run

### Docker Desktop

Docker Desktop is an easy-to-install application for your Mac, Windows, or Linux environment that enables you to build and share containerized applications and microservices. Docker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. For more information, seeDocker Desktop.

### Docker registries

A Docker registry stores Docker images. Docker Hub is a public
registry that anyone can use, and Docker looks for images on
Docker Hub by default. You can even run your own private registry.
When you use thedocker pullordocker runcommands, Docker pulls the required images from your configured registry. When you use thedocker pushcommand, Docker pushes
your image to your configured registry.
docker pull
docker push

### Docker objects

When you use Docker, you are creating and using images, containers, networks,
volumes, plugins, and other objects. This section is a brief overview of some
of those objects.

#### Images

An image is a read-only template with instructions for creating a Docker
container. Often, an image is based on another image, with some additional
customization. For example, you may build an image that is based on the Ubuntu image
but includes the Apache web server and your application, as well as the
configuration details needed to make your application run.
You might create your own images or you might only use those created by others
and published in a registry. To build your own image, you create a Dockerfile
with a simple syntax for defining the steps needed to create the image and run
it. Each instruction in a Dockerfile creates a layer in the image. When you
change the Dockerfile and rebuild the image, only those layers which have
changed are rebuilt. This is part of what makes images so lightweight, small,
and fast, when compared to other virtualization technologies.

#### Containers

A container is a runnable instance of an image. You can create, start, stop,
move, or delete a container using the Docker API or CLI. You can connect a
container to one or more networks, attach storage to it, or even create a new
image based on its current state.
By default, a container is relatively well isolated from other containers and
its host machine. You can control how isolated a container's network, storage,
or other underlying subsystems are from other containers or from the host
machine.
A container is defined by its image as well as any configuration options you
provide to it when you create or start it. When a container is removed, any changes to
its state that aren't stored in persistent storage disappear.

##### Exampledocker runcommand

The following command runs anubuntucontainer, attaches interactively to your
local command-line session, and runs/bin/bash.
ubuntu
/bin/bash
$docker run -i -t ubuntu /bin/bash
When you run this command, the following happens (assuming you are using
the default registry configuration):
- If you don't have theubuntuimage locally, Docker pulls it from your
configured registry, as though you had rundocker pull ubuntumanually.
If you don't have theubuntuimage locally, Docker pulls it from your
docker pull ubuntu
- Docker creates a new container, as though you had run adocker container createcommand manually.
Docker creates a new container, as though you had run adocker container createcommand manually.
docker container create
- Docker allocates a read-write filesystem to the container, as its final
layer. This allows a running container to create or modify files and
directories in its local filesystem.
Docker allocates a read-write filesystem to the container, as its final
- Docker creates a network interface to connect the container to the default
network, since you didn't specify any networking options. This includes
assigning an IP address to the container. By default, containers can
connect to external networks using the host machine's network connection.
Docker creates a network interface to connect the container to the default
- Docker starts the container and executes/bin/bash. Because the container
is running interactively and attached to your terminal (due to the-iand-tflags), you can provide input using your keyboard while Docker logs the output to
your terminal.
Docker starts the container and executes/bin/bash. Because the container
- When you runexitto terminate the/bin/bashcommand, the container
stops but isn't removed. You can start it again or remove it.
When you runexitto terminate the/bin/bashcommand, the container
exit

## The underlying technology

Docker is written in theGo programming languageand takes
advantage of several features of the Linux kernel to deliver its functionality.
Docker uses a technology callednamespacesto provide the isolated workspace
called the container. When you run a container, Docker creates a set of
namespaces for that container.
namespaces
These namespaces provide a layer of isolation. Each aspect of a container runs
in a separate namespace and its access is limited to that namespace.

## Next steps

- Install Docker
- Get started with Docker
## Introduction | Docker Docs
来源: https://docs.docker.com/get-started/introduction/
# Introduction
## About this series

In this guide series, you will gain hands-on experience with Docker, starting
with installing and setting up Docker Desktop on your local machine. You will
learn how to run your first container, understanding the basics of
containerization and its benefits. This series guides you through building your
first Docker image, providing insights into creating efficient and reusable
images. Finally, you will explore how to publish your image on Docker Hub,
enabling you to share your work with the broader community and leverage
Docker's powerful ecosystem for collaborative development and deployment.

## What you'll learn

- Set up Docker Desktop
- Run your first container
- Build your first image
- Publish your image on Docker Hub

## Modules

- Get Docker DesktopThis concept page will teach you download Docker Desktop and install it on Windows, Mac, and Linux
This concept page will teach you download Docker Desktop and install it on Windows, Mac, and Linux
- Develop with containersThis concept page will teach you how to develop with containers
This concept page will teach you how to develop with containers
- Build and push your first imageThis concept page will teach you how to build and push your first image
This concept page will teach you how to build and push your first image
- What's nextExplore step-by-step guides to help you understand core Docker concepts, building images, and running containers.
Explore step-by-step guides to help you understand core Docker concepts, building images, and running containers.
## Get Docker Desktop | Docker Docs
来源: https://docs.docker.com/get-started/introduction/get-docker-desktop/
# Get Docker Desktop
## Explanation

Docker Desktop is the all-in-one package to build images, run containers, and so much more.
This guide will walk you through the installation process, enabling you to experience Docker Desktop firsthand.
employees OR more than $10 million USD in annual revenue) requires apaid subscription.

### Docker Desktop for Mac

Download (Apple Silicon)|Download (Intel)|Install instructions

### Docker Desktop for Windows

Download|Install instructions

### Docker Desktop for Linux

Install instructions
Once it's installed, complete the setup process and you're all set to run a Docker container.

## Try it out

In this hands-on guide, you will see how to run a Docker container using Docker Desktop.
Follow the instructions to run a container using the CLI.

## Run your first container

Open your CLI terminal and start a container by running thedocker runcommand:
$docker run -d -p 8080:80 docker/welcome-to-docker

## Access the frontend

For this container, the frontend is accessible on port8080. To open the website, visithttp://localhost:8080in your browser.
8080

## Manage containers using Docker Desktop

- Open Docker Desktop and select theContainersfield on the left sidebar.
Open Docker Desktop and select theContainersfield on the left sidebar.
- You can view information about your container including logs, and files, and even access the shell by selecting theExectab.
You can view information about your container including logs, and files, and even access the shell by selecting theExectab.
- Select theInspectfield to obtain detailed information about the container. You can perform various actions such as pause, resume, start or stop containers, or explore theLogs,Bind mounts,Exec,Files, andStatstabs.
Select theInspectfield to obtain detailed information about the container. You can perform various actions such as pause, resume, start or stop containers, or explore theLogs,Bind mounts,Exec,Files, andStatstabs.
Docker Desktop simplifies container management for developers by streamlining the setup, configuration, and compatibility of applications across different environments, thereby addressing the pain points of environment inconsistencies and deployment challenges.

## What's next?

Now that you have Docker Desktop installed and ran your first container, it's time to start developing with containers.
## Develop with containers | Docker Docs
来源: https://docs.docker.com/get-started/introduction/develop-with-containers/
# Develop with containers
## Explanation

Now that you have Docker Desktop installed, you are ready to do some application development. Specifically, you will do the following:
- Clone and start a development project
- Make changes to the backend and frontend
- See the changes immediately

## Try it out

In this hands-on guide, you'll learn how to develop with containers.

## Start the project

- To get started, either clone ordownload the project as a ZIP fileto your local machine.$git clone https://github.com/docker/getting-started-todo-appAnd after the project is cloned, navigate into the new directory created by the clone:$cdgetting-started-todo-app
To get started, either clone ordownload the project as a ZIP fileto your local machine.
$git clone https://github.com/docker/getting-started-todo-app
And after the project is cloned, navigate into the new directory created by the clone:
$cdgetting-started-todo-app
- Once you have the project, start the development environment using Docker Compose.To start the project using the CLI, run the following command:$docker compose watchYou will see an output that shows container images being pulled down, containers starting, and more. Don't worry if you don't understand it all at this point. But, within a moment or two, things should stabilize and finish.
Once you have the project, start the development environment using Docker Compose.
To start the project using the CLI, run the following command:
$docker compose watch
You will see an output that shows container images being pulled down, containers starting, and more. Don't worry if you don't understand it all at this point. But, within a moment or two, things should stabilize and finish.
- Open your browser tohttp://localhostto see the application up and running. It may take a few minutes for the app to run. The app is a simple to-do application, so feel free to add an item or two, mark some as done, or even delete an item.
Open your browser tohttp://localhostto see the application up and running. It may take a few minutes for the app to run. The app is a simple to-do application, so feel free to add an item or two, mark some as done, or even delete an item.

### What's in the environment?

Now that the environment is up and running, what's actually in it? At a high-level, there are several containers (or processes) that each serve a specific need for the application:
- React frontend - a Node container that's running the React dev server, usingVite.
- Node backend - the backend provides an API that provides the ability to retrieve, create, and delete to-do items.
- MySQL database - a database to store the list of the items.
- phpMyAdmin - a web-based interface to interact with the database that is accessible athttp://db.localhost.
- Traefik proxy -Traefikis an application proxy that routes requests to the right service. It sends all requests forlocalhost/api/*to the backend, requests forlocalhost/*to the frontend, and then requests fordb.localhostto phpMyAdmin. This provides the ability to access all applications using port 80 (instead of different ports for each service).
localhost/api/*
localhost/*
db.localhost
With this environment, you as the developer donât need to install or configure any services, populate a database schema, configure database credentials, or anything. You only need Docker Desktop. The rest just works.

## Make changes to the app

With this environment up and running, youâre ready to make a few changes to the application and see how Docker helps provide a fast feedback loop.

### Change the greeting

The greeting at the top of the page is populated by an API call at/api/greeting. Currently, it always returns "Hello world!". Youâll now modify it to return one of three randomized messages (that you'll get to choose).
/api/greeting
- Open thebackend/src/routes/getGreeting.jsfile in a text editor on
your local machine (in the cloned project directory). This file provides
the handler for the API endpoint. Your changes will automatically sync to
the running container.
Open thebackend/src/routes/getGreeting.jsfile in a text editor on
backend/src/routes/getGreeting.js
- Modify the variable at the top to an array of greetings. Feel free to use the following modifications or customize it to your own liking. Also, update the endpoint to send a random greeting from this list.1234567891011constGREETINGS=["Whalecome!","All hands on deck!","Charting the course ahead!",];module.exports=async(req,res)=>{res.send({greeting:GREETINGS[Math.floor(Math.random()*GREETINGS.length)],});};
Modify the variable at the top to an array of greetings. Feel free to use the following modifications or customize it to your own liking. Also, update the endpoint to send a random greeting from this list.
1234567891011constGREETINGS=["Whalecome!","All hands on deck!","Charting the course ahead!",];module.exports=async(req,res)=>{res.send({greeting:GREETINGS[Math.floor(Math.random()*GREETINGS.length)],});};
1234567891011
constGREETINGS=["Whalecome!","All hands on deck!","Charting the course ahead!",];module.exports=async(req,res)=>{res.send({greeting:GREETINGS[Math.floor(Math.random()*GREETINGS.length)],});};
- If you haven't done so yet, save the file. If you refresh your browser, you should see a new greeting. If you keep refreshing, you should see all of the messages appear.
If you haven't done so yet, save the file. If you refresh your browser, you should see a new greeting. If you keep refreshing, you should see all of the messages appear.

### Change the placeholder text

When you look at the app, you'll see the placeholder text is simply "New Item". Youâll now make that a little more descriptive and fun. Youâll also make a few changes to the styling of the app too.
- Open theclient/src/components/AddNewItemForm.jsxfile in your local
project directory. This provides the component to add a new item to the
to-do list.
Open theclient/src/components/AddNewItemForm.jsxfile in your local
client/src/components/AddNewItemForm.jsx
- Modify theplaceholderattribute of theForm.Controlelement to whatever you'd like to display.33343536373839<Form.Controlvalue={newItem}onChange={(e)=>setNewItem(e.target.value)}type="text"placeholder="What do you need to do?"aria-label="New item"/>
Modify theplaceholderattribute of theForm.Controlelement to whatever you'd like to display.
placeholder
Form.Control
33343536373839<Form.Controlvalue={newItem}onChange={(e)=>setNewItem(e.target.value)}type="text"placeholder="What do you need to do?"aria-label="New item"/>
33343536373839
<Form.Controlvalue={newItem}onChange={(e)=>setNewItem(e.target.value)}type="text"placeholder="What do you need to do?"aria-label="New item"/>
- Save the file and go back to your browser. You should see the change already hot-reloaded into your browser. If you don't like it, feel free to tweak it until it looks just right.
Save the file and go back to your browser. You should see the change already hot-reloaded into your browser. If you don't like it, feel free to tweak it until it looks just right.

### Change the background color

Before you consider the application finalized, you need to make the colors better.
- Open theclient/src/index.scssfile in your local project directory.
Open theclient/src/index.scssfile in your local project directory.
client/src/index.scss
- Adjust thebackground-colorattribute to any color you'd like. The provided snippet is a soft blue to go along with Docker's nautical theme.If you're using an IDE, you can pick a color using the integrated color pickers. Otherwise, feel free to use an onlineColor Picker.34567body{background-color:#99bbff;margin-top:50px;font-family:"Lato";}Each save should let you see the change immediately in the browser. Keep adjusting it until it's the perfect setup for you.
Adjust thebackground-colorattribute to any color you'd like. The provided snippet is a soft blue to go along with Docker's nautical theme.
background-color
If you're using an IDE, you can pick a color using the integrated color pickers. Otherwise, feel free to use an onlineColor Picker.
34567body{background-color:#99bbff;margin-top:50px;font-family:"Lato";}
34567
body{background-color:#99bbff;margin-top:50px;font-family:"Lato";}
Each save should let you see the change immediately in the browser. Keep adjusting it until it's the perfect setup for you.
And with that, you're done. Congrats on updating your website.

## Recap

Before you move on, take a moment and reflect on what happened here. Within a few moments, you were able to:
- Start a complete development project with zero installation effort. The containerized environment provided the development environment, ensuring you have everything you need. You didn't have to install Node, MySQL, or any of the other dependencies directly on your machine. All you needed was Docker Desktop and a code editor.
Start a complete development project with zero installation effort. The containerized environment provided the development environment, ensuring you have everything you need. You didn't have to install Node, MySQL, or any of the other dependencies directly on your machine. All you needed was Docker Desktop and a code editor.
- Make changes and see them immediately. This was made possible becausethe processes running in each container are watching and responding to
file changes and 2) the files in your local project directory are shared
with the containerized environment, so edits you make locally are
automatically synced to the containers.
Make changes and see them immediately. This was made possible because
- the processes running in each container are watching and responding to
Docker Desktop enables all of this and so much more. Once you start thinking with containers, you can create almost any environment and easily share it with your team.

## Next steps

Now that the application has been updated, youâre ready to learn about packaging it as a container image and pushing it to a registry, specifically Docker Hub.
## Build and push your first image | Docker Docs
来源: https://docs.docker.com/get-started/introduction/build-and-push-first-image/
# Build and push your first image
## Explanation

Now that you've updated theto-do list app, youâre ready to create a container image for the application and share it on Docker Hub. To do so, you will need to do the following:
- Sign in with your Docker account
- Create an image repository on Docker Hub
- Build the container image
- Push the image to Docker Hub
Before you dive into the hands-on guide, the following are a few core concepts that you should be aware of.

### Container images

If youâre new to container images, think of them as a standardized package that contains everything needed to run an application, including its files, configuration, and dependencies. These packages can then be distributed and shared with others.

### Docker Hub

To share your Docker images, you need a place to store them. This is where registries come in. While there are many registries, Docker Hub is the default and go-to registry for images. Docker Hub provides both a place for you to store your own images and to find images from others to either run or use as the bases for your own images.
When choosing base images, Docker Hub offers two categories of trusted, Docker-maintained images:
- Docker Official Images (DOI)â Curated images for popular software, following best practices and regularly updated.
- Docker Hardened Images (DHI)â Minimal, secure, production-ready images with near-zero CVEs, designed to reduce attack surface and simplify compliance. DHI images are free and open source under Apache 2.0.
InDevelop with containers, you used the following images that came from Docker Hub, each of which areDocker Official Images:
- node- provides a Node environment and is used as the base of your development efforts. This image is also used as the base for the final application image.
- mysql- provides a MySQL database to store the to-do list items
- phpmyadmin- provides phpMyAdmin, a web-based interface to the MySQL database
- traefik- provides Traefik, a modern HTTP reverse proxy and load balancer that routes requests to the appropriate container based on routing rules
Explore the full catalog of trusted content on Docker Hub:
- Docker Official Imagesâ Curated images for popular software
- Docker Hardened Imagesâ Security-hardened, minimal production images (also available atdhi.io)
- Docker Verified Publishersâ Images from verified software vendors
- Docker Sponsored Open Sourceâ Images from sponsored OSS projects

## Try it out

In this hands-on guide, you'll learn how to sign in to Docker Hub and push images to Docker Hub repository.

## Sign in with your Docker account

To push images to Docker Hub, you will need to sign in with a Docker account.
- Open the Docker Dashboard.
Open the Docker Dashboard.
- SelectSign inat the top-right corner.
SelectSign inat the top-right corner.
- If needed, create an account and then complete the sign-in flow.
If needed, create an account and then complete the sign-in flow.
Once you're done, you should see theSign inbutton turn into a profile picture.

## Create an image repository

Now that you have an account, you can create an image repository. Just as a Git repository holds source code, an image repository stores container images.
- Go toDocker Hub.
Go toDocker Hub.
- SelectCreate repository.
SelectCreate repository.
- On theCreate repositorypage, enter the following information:Repository name-getting-started-todo-appShort description- feel free to enter a description if you'd likeVisibility- selectPublicto allow others to pull your customized to-do app
On theCreate repositorypage, enter the following information:
- Repository name-getting-started-todo-app
getting-started-todo-app
- Short description- feel free to enter a description if you'd like
- Visibility- selectPublicto allow others to pull your customized to-do app
- SelectCreateto create the repository.
SelectCreateto create the repository.

## Build and push the image

Now that you have a repository, you are ready to build and push your image. An important note is that the image you are building extends the Node image, meaning you don't need to install or configure Node, yarn, etc. You can simply focus on what makes your application unique.
> What is an image/Dockerfile?Without going too deep yet, think of a container image as a single package that contains
everything needed to run a process. In this case, it will contain a Node environment,
the backend code, and the compiled React code.Any machine that runs a container using the image, will then be able to run the application as
it was built without needing anything else pre-installed on the machine.ADockerfileis a text-based script that provides the instruction set on how to build
the image. For this quick start, the repository already contains the Dockerfile.
What is an image/Dockerfile?
Without going too deep yet, think of a container image as a single package that contains
the backend code, and the compiled React code.
Any machine that runs a container using the image, will then be able to run the application as
it was built without needing anything else pre-installed on the machine.
ADockerfileis a text-based script that provides the instruction set on how to build
Dockerfile
- Build the project by running the following command, swapping outDOCKER_USERNAMEwith your username.$docker build -t <DOCKER_USERNAME>/getting-started-todo-app .For example, if your Docker username wasmobydock, you would run the following:$docker build -t mobydock/getting-started-todo-app .
Build the project by running the following command, swapping outDOCKER_USERNAMEwith your username.
DOCKER_USERNAME
$docker build -t <DOCKER_USERNAME>/getting-started-todo-app .
For example, if your Docker username wasmobydock, you would run the following:
mobydock
$docker build -t mobydock/getting-started-todo-app .
- To verify the image exists locally, you can use thedocker image lscommand:$docker image lsYou will see output similar to the following:REPOSITORY                          TAG       IMAGE ID       CREATED          SIZEmobydock/getting-started-todo-app   latest    1543656c9290   2 minutes ago    1.12GB...
To verify the image exists locally, you can use thedocker image lscommand:
docker image ls
$docker image ls
You will see output similar to the following:
REPOSITORY                          TAG       IMAGE ID       CREATED          SIZEmobydock/getting-started-todo-app   latest    1543656c9290   2 minutes ago    1.12GB...
- To push the image, use thedocker pushcommand. Be sure to replaceDOCKER_USERNAMEwith your username:$docker push <DOCKER_USERNAME>/getting-started-todo-appDepending on your upload speeds, this may take a moment to push.
To push the image, use thedocker pushcommand. Be sure to replaceDOCKER_USERNAMEwith your username:
$docker push <DOCKER_USERNAME>/getting-started-todo-app
Depending on your upload speeds, this may take a moment to push.
- Open Visual Studio Code. Ensure you have theDocker extension for VS Codeinstalled fromExtension Marketplace.
Open Visual Studio Code. Ensure you have theDocker extension for VS Codeinstalled fromExtension Marketplace.
- In theFilemenu, selectOpen Folder. ChooseClone Git Repositoryand paste this URL:https://github.com/docker/getting-started-todo-app
In theFilemenu, selectOpen Folder. ChooseClone Git Repositoryand paste this URL:https://github.com/docker/getting-started-todo-app
- Right-click theDockerfileand select theBuild Image...menu item.
Right-click theDockerfileand select theBuild Image...menu item.
- In the dialog that appears, enter a name ofDOCKER_USERNAME/getting-started-todo-app, replacingDOCKER_USERNAMEwith your Docker username.
In the dialog that appears, enter a name ofDOCKER_USERNAME/getting-started-todo-app, replacingDOCKER_USERNAMEwith your Docker username.
DOCKER_USERNAME/getting-started-todo-app
- After pressingEnter, you'll see a terminal appear where the build will occur. Once it's completed, feel free to close the terminal.
After pressingEnter, you'll see a terminal appear where the build will occur. Once it's completed, feel free to close the terminal.
- Open the Docker Extension for VS Code by selecting the Docker logo in the left nav menu.
Open the Docker Extension for VS Code by selecting the Docker logo in the left nav menu.
- Find the image you created. It'll have a name ofdocker.io/DOCKER_USERNAME/getting-started-todo-app.
Find the image you created. It'll have a name ofdocker.io/DOCKER_USERNAME/getting-started-todo-app.
docker.io/DOCKER_USERNAME/getting-started-todo-app
- Expand the image to view the tags (or different versions) of the image. You should see a tag namedlatest, which is the default tag given to an image.
Expand the image to view the tags (or different versions) of the image. You should see a tag namedlatest, which is the default tag given to an image.
latest
- Right-click on thelatestitem and select thePush...option.
Right-click on thelatestitem and select thePush...option.
- PressEnterto confirm and then watch as your image is pushed to Docker Hub. Depending on your upload speeds, it might take a moment to push the image.Once the upload is finished, feel free to close the terminal.
PressEnterto confirm and then watch as your image is pushed to Docker Hub. Depending on your upload speeds, it might take a moment to push the image.
Once the upload is finished, feel free to close the terminal.

## Recap

Before you move on, take a moment and reflect on what happened here. Within a few moments, you were able to build a container image that packages your application and push it to Docker Hub.
Going forward, youâll want to remember that:
- Docker Hub is the go-to registry for finding trusted content. Docker provides a collection of trusted content, composed of Docker Official Images, Docker Verified Publishers, and Docker Sponsored Open Source Software, to use directly or as bases for your own images.
Docker Hub is the go-to registry for finding trusted content. Docker provides a collection of trusted content, composed of Docker Official Images, Docker Verified Publishers, and Docker Sponsored Open Source Software, to use directly or as bases for your own images.
- Docker Hub provides a marketplace to distribute your own applications. Anyone can create an account and distribute images. While you are publicly distributing the image you created, private repositories can ensure your images are accessible to only authorized users.
Docker Hub provides a marketplace to distribute your own applications. Anyone can create an account and distribute images. While you are publicly distributing the image you created, private repositories can ensure your images are accessible to only authorized users.
> Usage of other registriesWhile Docker Hub is the default registry, registries are standardized and made
interoperable through theOpen Container Initiative. This allows companies and
organizations to run their own private registries. Quite often, trusted content
is mirrored (or copied) from Docker Hub into these private registries.
Usage of other registries
While Docker Hub is the default registry, registries are standardized and made

## Next steps

Now that youâve built an image, it's time to discuss why you as a developer should learn more about Docker and how it will help you in your day-to-day tasks.
## What's next | Docker Docs
来源: https://docs.docker.com/get-started/introduction/whats-next/
# What's next

The following sections provide step-by-step guides to help you understand core Docker concepts, building images, and running containers.

## The basics

Get started learning the core concepts of containers, images, registries, and Docker Compose.

### What is a container?

Learn how to run your first container.

### What is an image?

Learn the basics of image layers.

### What is a registry?

Learn about container registries, explore their interoperability, and interact with registries.

### What is Docker Compose?

Gain a better understanding of Docker Compose.

## Building images

Craft optimized container images with Dockerfiles, build cache, and multi-stage builds.

### Understanding image layers

Learn about the layers of container images.

### Writing a Dockerfile

Learn how to create an image using a Dockerfile.

### Build, tag and publish an image

Learn how to build, tag, and publish an image to Docker Hub or any other registry.

### Using the build cache

Learn about the build cache, what changes invalidate the cache, and how to effectively use the build cache.

### Multi-stage builds

Get a better understanding of multi-stage builds and their benefits.

## Running containers

Master essential techniques for exposing ports, overriding defaults, persisting data, sharing files, and managing multi-container applications.

### Publishing ports

Understand the significance of publishing and exposing ports in Docker.

### Overriding container defaults

Learn how to override the container defaults using thedocker runcommand.

### Persisting container data

Learn the significance of data persistence in Docker.

### Sharing local files with containers

Explore the various storage options available in Docker and their common usage.

### Multi-container applications

Learn the significance of multi-container applications and how they're different from single-container applications.
## What is a container? | Docker Docs
来源: https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/
# What is a container?
## Explanation

Imagine you're developing a killer web app that has three main components - a React frontend, a Python API, and a PostgreSQL database. If you wanted to work on this project, you'd have to install Node, Python, and PostgreSQL.
How do you make sure you have the same versions as the other developers on your team? Or your CI/CD system? Or what's used in production?
How do you ensure the version of Python (or Node or the database) your app needs isn't affected by what's already on your machine? How do you manage potential conflicts?
Enter containers!
What is a container? Simply put, containers are isolated processes for each of your app's components. Each component - the frontend React app, the Python API engine, and the database - runs in its own isolated environment, completely isolated from everything else on your machine.
Here's what makes them awesome. Containers are:
- Self-contained. Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine.
- Isolated. Since containers run in isolation, they have minimal influence on the host and other containers, increasing the security of your applications.
- Independent. Each container is independently managed. Deleting one container won't affect any others.
- Portable. Containers can run anywhere! The container that runs on your development machine will work the same way in a data center or anywhere in the cloud!

### Containers versus virtual machines (VMs)

Without getting too deep, a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications. Spinning up a VM only to isolate a single application is a lot of overhead.
A container is simply an isolated process with all of the files it needs to run. If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure.
> Using VMs and containers togetherQuite often, you will see containers and VMs used together. As an example, in a cloud environment, the provisioned machines are typically VMs. However, instead of provisioning one machine to run one application, a VM with a container runtime can run multiple containerized applications, increasing resource utilization and reducing costs.
Using VMs and containers together
Quite often, you will see containers and VMs used together. As an example, in a cloud environment, the provisioned machines are typically VMs. However, instead of provisioning one machine to run one application, a VM with a container runtime can run multiple containerized applications, increasing resource utilization and reducing costs.

## Try it out

In this hands-on, you will see how to run a Docker container using the Docker Desktop GUI.
Use the following instructions to run a container.
- Open Docker Desktop and select theSearchfield on the top navigation bar.
Open Docker Desktop and select theSearchfield on the top navigation bar.
- Specifywelcome-to-dockerin the search input and then select thePullbutton.
Specifywelcome-to-dockerin the search input and then select thePullbutton.
welcome-to-docker
- Once the image is successfully pulled, select theRunbutton.
Once the image is successfully pulled, select theRunbutton.
- Expand theOptional settings.
Expand theOptional settings.
- In theContainer name, specifywelcome-to-docker.
In theContainer name, specifywelcome-to-docker.
- In theHost port, specify8080.
In theHost port, specify8080.
- SelectRunto start your container.
SelectRunto start your container.
Congratulations! You just ran your first container! ð

### View your container

You can view all of your containers by going to theContainersview of the Docker Desktop Dashboard.
This container runs a web server that displays a simple website. When working with more complex projects, you'll run different parts in different containers. For example, you might run a different container for the frontend, backend, and database.

### Access the frontend

When you launched the container, you exposed one of the container's ports onto your machine. Think of this as creating configuration to let you connect through the isolated environment of the container.
For this container, the frontend is accessible on port8080. To open the website, select the link in thePort(s)column of your container or visithttp://localhost:8080in your browser.

### Explore your container

Docker Desktop lets you explore and interact with different aspects of your container. Try it out yourself.
- Go to theContainersview in the Docker Desktop Dashboard.
Go to theContainersview in the Docker Desktop Dashboard.
- Select your container.
Select your container.
- Select theFilestab to explore your container's isolated file system.
Select theFilestab to explore your container's isolated file system.

### Stop your container

Thedocker/welcome-to-dockercontainer continues to run until you stop it.
docker/welcome-to-docker
- Locate the container you'd like to stop.
Locate the container you'd like to stop.
- Select theStopaction in theActionscolumn.
Select theStopaction in theActionscolumn.
Follow the instructions to run a container using the CLI:
- Open your CLI terminal and start a container by using thedocker runcommand:$docker run -d -p 8080:80 docker/welcome-to-dockerThe output from this command is the full container ID.
Open your CLI terminal and start a container by using thedocker runcommand:
The output from this command is the full container ID.
Congratulations! You just fired up your first container! ð

### View your running containers

You can verify if the container is up and running by using thedocker pscommand:
docker ps
You will see output like the following:
CONTAINER ID   IMAGE                      COMMAND                  CREATED          STATUS          PORTS                      NAMESa1f7a4bb3a27   docker/welcome-to-docker   "/docker-entrypoint.â¦"   11 seconds ago   Up 11 seconds   0.0.0.0:8080->80/tcp       gracious_keldysh
This container runs a web server that displays a simple website. When working with more complex projects, you'll run different parts in different containers. For example, a different container for thefrontend,backend, anddatabase.
frontend
backend
database
> TipThedocker pscommand will show youonlyrunning containers. To view stopped containers, add the-aflag to list all containers:docker ps -a
Thedocker pscommand will show youonlyrunning containers. To view stopped containers, add the-aflag to list all containers:docker ps -a
docker ps -a

### Access the frontend

When you launched the container, you exposed one of the container's ports onto your machine. Think of this as creating configuration to let you to connect through the isolated environment of the container.

### Stop your container

Thedocker/welcome-to-dockercontainer continues to run until you stop it. You can stop a container using thedocker stopcommand.
docker stop
- Rundocker psto get the ID of the container
Rundocker psto get the ID of the container
- Provide the container ID or name to thedocker stopcommand:docker stop <the-container-id>
Provide the container ID or name to thedocker stopcommand:
docker stop <the-container-id>
> TipWhen referencing containers by ID, you don't need to provide the full ID. You only need to provide enough of the ID to make it unique. As an example, the previous container could be stopped by running the following command:docker stop a1f
When referencing containers by ID, you don't need to provide the full ID. You only need to provide enough of the ID to make it unique. As an example, the previous container could be stopped by running the following command:
docker stop a1f

## Additional resources

The following links provide additional guidance into containers:
- Running a container
- Overview of container
- Why Docker?

## Next steps

Now that you have learned the basics of a Docker container, it's time to learn about Docker images.