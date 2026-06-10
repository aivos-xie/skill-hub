---
id: skill-docker
title: Docker Knowledge
source: https://docs.docker.com/get-started/
crawled: 2026-06-11
pages: 10

# Docker 知识库
> 来源: https://docs.docker.com/get-started/ | 10 页

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