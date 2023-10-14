---
layout: post
comments: true
title: Docker for Developers | How I went from confusion to clarity
date: 2023-10-15
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "What is docker and how to use it as a developer..."
excerpt_separator: <!--more-->
images:
  - url: /assets/img/docker/docker.png
    alt: Docker
    title: Docker
  - url: /assets/img/docker/docker-layers.png
    alt: Docker layers
    title: Docker layers
  - url: /assets/img/docker/docker-sq.png
    alt: How docker works
    title: How docker works

cover-image:
  url: /assets/img/docker/docker.png
  alt: Docker
  title: Docker
---


I learnt Docker recently and honestly I regret not learning it sooner. It would have saved me a lot of time in setting up development environments locally and also resolving issues around development environments and versions.

<!--more-->

## What is Docker?

<div class="border-box bold">

Docker is a platform for developing, shipping, and running applications, it provides the ability to package and run an application in a <span class="highlightme">loosely isolated environment</span> called a <span class="highlightme">container</span>.

The container is the unit for distributing and testing the application.

</div>

The best thing about docker is that it enables developers to work in standardized environments, eliminating the common issue *"but it works on my computer!"*.



## How useful is Docker for a developer?

Well, I say it's quite useful, and **I'll give a couple of examples from my experience.**

1. I have this Spring Boot application which was created as a part of my spring boot course, and I wanted to run it in my new PC (I had to get a new computer because my old iMac became unbearably slow). The application requires a connection to a MYSQL database. I didn't have MYSQL installed on my new PC, so I couldn't start the application. I was learning Docker at that time, so thought I would put my Docker knowledge in to use. So I got MYSQL running on my PC as a Docker container using the below command. Then I could log in to mysql to create the schema and run my application without any issues.

	`docker run --name msql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0`

2. I run [this](https://javacodehouse.com/) blog using Jekyll, so when I moved to the new PC I had to set up the environment from scratch to run it localy which involves installing compatible versions of node, ruby and more. After a quick google search I found a docker compose file which could help me run my blog without installing anything. All I had to do was to run the command `docker compose up`. A life saver for me!

## How I learnt Docker

I learn in layers. So when I decided to learn Docker, first I went through some tutorials on YouTube to get an overall idea of what it is and what it can do. There is one tutorial which I higly recommend that you watch (linked below in the references section) because it is a great introduction to Docker explained in a very clear and consise manner.

Once I had a basic idea of it, I installed Docker and practiced some of the commands like 

`docker ps`

`docker images`

`docker run --name msql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0` etc...

I had some confusions around things like Docker image, container, and Dockerfile. So I started reading the documenation.

---

## My Docker Notes

Following are some definitions I found or came up with and noted down to help me understand the concepts better.

### What is a Docker image?

A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.
A Docker image is a read only template with instructions for creating a Docker container. In other words, a **docker image** is a docker object which is a template for creating containers.

### What is a Dockerfile?

Docker file is a blue print for creating docker images.

Each instruction on a dockerfile creates a layer in the image.

If you change the dockerfile and rebuild the image, only the changed layers are rebuilt. This makes images lightweight, small and fast.

It is always named `Dockerfile` without an extention.

### What is a Docker Container?

A Docker container is a runnable instance of an image.

It is a normal operating system process except that this process is isolated and has its own file system, its own networking, and its own isolated process tree separate from the host.

Containers are lightweight and contain everything needed to run the application, and it becomes the unit for distributing and testing your application.

### Docker daemon

Docker daemon `dockerd` listenes to Docker API requests and manages **Docker objects like images, containers, networks and volumes.**

### Docker client

Docker client `docker` is how users interact with docker. docker client sends commands such as `docker run` to `dockerd` to be carried out. Docker client can communicate with more than one docker daemon.

### Docker registry

A Docker registry stores Docker images. example: [Docker Hub](https://hub.docker.com){:target="_blank"}

### Docker compose

Docker compose is a yaml file to run multiple containers.

It can be defined outside the application code.

### Docker volume

Docker volume is a folder in host file system mounted to the virtual file system of docker container.

Data get automaticaly replicated in the host file system.

---

:confused: There were still some more confusions around the terms and concepts. Mainly about images and containers, I just couldn't understand the difference between them so I had to dig deeper.

## Docker Image vs Docker Container

I learnt the difference when I understood the concept of docker objects and layers. 

### What are docker objects?
Docker images, containers, networks, volumes, plugins are all different docker objects. 

> When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects. [Docker overview - Docker Documentation](https://docs.docker.com/get-started/overview/#docker-objects){:target="_blank"}

**Docker images** are a type of docker object. 
An image, once created cannot be changed (**immutable**). This makes it a **read-only** object and it contains the source code, dependencies and everything else needed to run the application.

**Docker containers** are a different kind of docker object. Basically it is made up of the read-only image and a writable layer on top of it.

The following image from the [Docker documentation](https://docs.docker.com/storage/storagedriver/aufs-driver/){:target="_blank"} makes it clear.

{% assign image = page.images[1] %}
{% include image.html image=image %}

### Docker layers

A docker image consists of several different layers. These layers are called intermediate layers of an image.

The layers exist as files that can be found in the docker host at `/var/lib/docker/aufs/diff`  
Once the image is built, you can **view all the layers** that make up the image with the `docker history IMAGE/IMAGE_ID` command.
eg: `docker history mysql:8.0` 

## Connecting the dots

A Dockerfile is used to create a docker image by running the `docker build` command.

Each step in the dockerfile is executed to create a layer of the final image. Each layer is based on the previous one.

A container is created from an image when the `docker run` command is executed. Container stacks  a writable layer on top of the read only image layers.

{% assign image = page.images[2] %}
{% include image.html image=image styleClass="shadow" %}


**Then I moved on to dockerizing my spring boot application.**

--- 


# How to dockerize a spring boot application

### Docker

Make sure docker is running in your computer by using the `docker info` command, you should see an output simillar to the following.

```console
$ docker info
Client:
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc., v0.9.1)
  compose: Docker Compose (Docker Inc., v2.10.2)
  extension: Manages Docker extensions (Docker Inc., v0.2.9)
  sbom: View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc., 0.6.0)
  scan: Docker Scan (Docker Inc., v0.19.0)

Server:
 Containers: 5
  Running: 1
  Paused: 0
  Stopped: 4
 Images: 13
 Server Version: 20.10.17
 Storage Driver: overlay2
  Backing Filesystem: extfs
  Supports d_type: true
  Native Overlay Diff: true
  userxattr: false
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 1
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local logentries splunk syslog
 Swarm: inactive
 Runtimes: runc io.containerd.runc.v2 io.containerd.runtime.v1.linux
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6
 runc version: v1.1.4-0-g5fd4c4d
 init version: de40ad0
 Security Options:
  seccomp
   Profile: default
 Kernel Version: 5.10.102.1-microsoft-standard-WSL2
 Operating System: Docker Desktop
 OSType: linux
 Architecture: x86_64
 CPUs: 12
 Total Memory: 12.42GiB
 Name: docker-desktop
 ID: 5YJM:WXAL:5U73:SQZ3:JK62:YI5V:75UQ:A2AO:7OWT:GT7I:UAAL:VVYA
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 HTTP Proxy: http.docker.internal:3128
 HTTPS Proxy: http.docker.internal:3128
 No Proxy: hubproxy.docker.internal
 Registry: https://index.docker.io/v1/
 Labels:
 Experimental: false
 Insecure Registries:
  hubproxy.docker.internal:5000
  127.0.0.0/8
 Live Restore Enabled: false

WARNING: No blkio throttle.read_bps_device support
WARNING: No blkio throttle.write_bps_device support
WARNING: No blkio throttle.read_iops_device support
WARNING: No blkio throttle.write_iops_device support
```
{: .language-console}


### Step 1 | Create a docker image of the spring boot applicaiton

The first step in dockerizing an application is creating an image. 
This can be done manually by creating a dockerfile or you could use a plugin that creates an image for you using the build tool you are using.

**I'm using Gradle in this project so I'll use the `bootBuildImage` task of the Spring Boot Gradle Plugin to build an image of my application. Then all you have to do is to issue the run command to run the application as a container. Here's how you do it.**


Now, run the gradle task `bootBuildImage` in your project. This task should be availble if you are using the  [Spring Boot Gradle Plugin](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle){:target="_blank"}. 

```console
$./gradlew bootBuildImage

> Task :bootBuildImage
Building image 'docker.io/library/comments:0.0.1-SNAPSHOT'

 > Pulling builder image 'docker.io/paketobuildpacks/builder:base' ..................................................
 > Pulled builder image 'paketobuildpacks/builder@sha256:e2d672ca05dbdb6bb25286acfa51e738f41720fc88843d6ea4edf19e7919c745'
 > Pulling run image 'docker.io/paketobuildpacks/run:base-cnb' ..................................................
 > Pulled run image 'paketobuildpacks/run@sha256:ec0263dc98a8c785f4a6750597de8857efd2852fc6544494ff2598426cf7143c'
 > Executing lifecycle version v0.15.3                     
 > Using build cache volume 'pack-cache-c1abb9994943.build'

 > Running creator
    [creator]     ===> ANALYZING
    [creator]     Restoring data for SBOM from previous image
    [creator]     ===> DETECTING
    [creator]     6 of 24 buildpacks participating          
    [creator]     paketo-buildpacks/ca-certificates   3.5.1 
    [creator]     paketo-buildpacks/bellsoft-liberica 9.10.1
    [creator]     paketo-buildpacks/syft              1.23.0
    [creator]     paketo-buildpacks/executable-jar    6.5.0
    [creator]     paketo-buildpacks/dist-zip          5.4.0
    [creator]     paketo-buildpacks/spring-boot       5.22.1
    [creator]     ===> RESTORING
    [creator]     Restoring metadata for "paketo-buildpacks/ca-certificates:helper" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/bellsoft-liberica:helper" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/bellsoft-liberica:java-security-properties" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/bellsoft-liberica:jre" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/syft:syft" from cache
    [creator]     Restoring metadata for "paketo-buildpacks/spring-boot:helper" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/spring-boot:spring-cloud-bindings" from app image
    [creator]     Restoring metadata for "paketo-buildpacks/spring-boot:web-application-type" from app image
    [creator]     Restoring data for "paketo-buildpacks/syft:syft" from cache
    [creator]     Restoring data for SBOM from cache
    [creator]     ===> BUILDING
    [creator]
    [creator]     Paketo Buildpack for CA Certificates 3.5.1
    [creator]       https://github.com/paketo-buildpacks/ca-certificates
    [creator]       Launch Helper: Reusing cached layer
    [creator]
    [creator]     Paketo Buildpack for BellSoft Liberica 9.10.1
    [creator]       https://github.com/paketo-buildpacks/bellsoft-liberica
    [creator]       Build Configuration:
    [creator]         $BP_JVM_JLINK_ARGS           --no-man-pages --no-header-files --strip-debug --compress=1  configure custom link arguments (--output must be omitted)
    [creator]         $BP_JVM_JLINK_ENABLED        false                                                        enables running jlink tool to generate custom JRE
    [creator]         $BP_JVM_TYPE                 JRE                                                          the JVM type - JDK or JRE
    [creator]         $BP_JVM_VERSION              8.*                                                          the Java version
    [creator]       Launch Configuration:
    [creator]         $BPL_DEBUG_ENABLED           false                                                        enables Java remote debugging support
    [creator]         $BPL_DEBUG_PORT              8000                                                         configure the remote debugging port
    [creator]         $BPL_DEBUG_SUSPEND           false                                                        configure whether to suspend execution until a debugger has attached  
    [creator]         $BPL_HEAP_DUMP_PATH                                                                       write heap dumps on error to this path
    [creator]         $BPL_JAVA_NMT_ENABLED        true                                                         enables Java Native Memory Tracking (NMT)
    [creator]         $BPL_JAVA_NMT_LEVEL          summary                                                      configure level of NMT, summary or detail
    [creator]         $BPL_JFR_ARGS                                                                             configure custom Java Flight Recording (JFR) arguments
    [creator]         $BPL_JFR_ENABLED             false                                                        enables Java Flight Recording (JFR)
    [creator]         $BPL_JMX_ENABLED             false                                                        enables Java Management Extensions (JMX)
    [creator]         $BPL_JMX_PORT                5000                                                         configure the JMX port
    [creator]         $BPL_JVM_HEAD_ROOM           0                                                            the headroom in memory calculation
    [creator]         $BPL_JVM_LOADED_CLASS_COUNT  35% of classes                                               the number of loaded classes in memory calculation
    [creator]         $BPL_JVM_THREAD_COUNT        250                                                          the number of threads in memory calculation
    [creator]         $JAVA_TOOL_OPTIONS                                                                        the JVM launch flags
    [creator]         Using Java version 8.* from BP_JVM_VERSION
    [creator]       BellSoft Liberica JRE 8.0.352: Reusing cached layer
    [creator]       Launch Helper: Reusing cached layer
    [creator]       Java Security Properties: Reusing cached layer
    [creator]
    [creator]     Paketo Buildpack for Syft 1.23.0
    [creator]       https://github.com/paketo-buildpacks/syft
    [creator]
    [creator]     Paketo Buildpack for Executable JAR 6.5.0
    [creator]       https://github.com/paketo-buildpacks/executable-jar
    [creator]       Class Path: Contributing to layer
    [creator]         Writing env/CLASSPATH.delim    
    [creator]         Writing env/CLASSPATH.prepend  
    [creator]       Process types:
    [creator]         executable-jar: java org.springframework.boot.loader.WarLauncher (direct)
    [creator]         task:           java org.springframework.boot.loader.WarLauncher (direct)
    [creator]         web:            java org.springframework.boot.loader.WarLauncher (direct)
    [creator]
    [creator]     Paketo Buildpack for Spring Boot 5.22.1
    [creator]       https://github.com/paketo-buildpacks/spring-boot
    [creator]       Build Configuration:
    [creator]         $BP_SPRING_CLOUD_BINDINGS_DISABLED   false  whether to contribute Spring Boot cloud bindings support
    [creator]       Launch Configuration:
    [creator]         $BPL_SPRING_CLOUD_BINDINGS_DISABLED  false  whether to auto-configure Spring Boot environment properties from bindings
    [creator]         $BPL_SPRING_CLOUD_BINDINGS_ENABLED   true   Deprecated - whether to auto-configure Spring Boot environment properties from bindings
    [creator]       Creating slices from layers index
    [creator]         dependencies (39.5 MB)         
    [creator]         spring-boot-loader (281.8 KB)  
    [creator]         snapshot-dependencies (0.0 B)
    [creator]         application (48.3 KB)
    [creator]       Launch Helper: Reusing cached layer
    [creator]       Spring Cloud Bindings 1.11.0: Reusing cached layer
    [creator]       Web Application Type: Reusing cached layer
    [creator]       4 application slices
    [creator]       Image labels:
    [creator]         org.springframework.boot.version
    [creator]     ===> EXPORTING
    [creator]     Reusing layer 'paketo-buildpacks/ca-certificates:helper'                    
    [creator]     Reusing layer 'paketo-buildpacks/bellsoft-liberica:helper'                  
    [creator]     Reusing layer 'paketo-buildpacks/bellsoft-liberica:java-security-properties'
    [creator]     Reusing layer 'paketo-buildpacks/bellsoft-liberica:jre'
    [creator]     Reusing layer 'paketo-buildpacks/executable-jar:classpath'
    [creator]     Reusing layer 'paketo-buildpacks/spring-boot:helper'
    [creator]     Reusing layer 'paketo-buildpacks/spring-boot:spring-cloud-bindings'
    [creator]     Reusing layer 'paketo-buildpacks/spring-boot:web-application-type'
    [creator]     Reusing layer 'launch.sbom'
    [creator]     Reusing 5/5 app layer(s)
    [creator]     Reusing layer 'launcher'
    [creator]     Reusing layer 'config'  
    [creator]     Reusing layer 'process-types'
    [creator]     Adding label 'io.buildpacks.lifecycle.metadata'
    [creator]     Adding label 'io.buildpacks.build.metadata'
    [creator]     Adding label 'io.buildpacks.project.metadata'
    [creator]     Adding label 'org.springframework.boot.version'
    [creator]     Setting default process type 'web'
    [creator]     Saving docker.io/library/comments:0.0.1-SNAPSHOT...
    [creator]     *** Images (475e039b5af1):
    [creator]           docker.io/library/comments:0.0.1-SNAPSHOT
    [creator]     Reusing cache layer 'paketo-buildpacks/syft:syft'
    [creator]     Reusing cache layer 'cache.sbom'

Successfully built image 'docker.io/library/comments:0.0.1-SNAPSHOT'


BUILD SUCCESSFUL in 14s
5 actionable tasks: 1 executed, 4 up-to-date

```
{: .language-console}

Then check if the image is available in docker by using the following command

 `docker images`

You should be able to see your application in the list of images.
The image is present as `comments    0.0.1-SNAPSHOT` in the list below.

```console
  ~ $ docker images
  REPOSITORY                 TAG              IMAGE ID       CREATED        SIZE
  paketobuildpacks/run       base-cnb         072117a61c4a   28 hours ago   87MB
  paketobuildpacks/run       <none>           e06d1d37657c   5 weeks ago    87MB
  paketobuildpacks/run       <none>           74b0f94a9633   3 months ago   87.6MB
  paketobuildpacks/run       <none>           a4d1737075d4   3 months ago   87.6MB
  mysql                      8.0              43fcfca0776d   4 months ago   449MB
  paketobuildpacks/builder   base             d51f5ba9065c   43 years ago   1.28GB
  paketobuildpacks/builder   <none>           c3549f435e8e   43 years ago   1.34GB
  comments                   0.0.1-SNAPSHOT   475e039b5af1   43 years ago   250MB
  paketobuildpacks/builder   <none>           c246fd5c07ea   43 years ago   1.18GB
  <none>                     <none>           8a89a3dfca4a   43 years ago   250MB
  <none>                     <none>           25b840ec6ccc   43 years ago   250MB
```

### Step 2 | Create and start a Container from the Image

Now you should be able to create a container from this image and run it.

So to make a container from this image, docker should create a writable layer on top of it. That makes it a container and then we should be able to start the container. 

The `docker run`  command does just that. It creates a writable layer over the image and starts it.
So I execute the following command to run my docker image/container.

`docker run -p 8080:8080 comments:0.0.1-SNAPSHOT `

`-p` is for port binding - it binds port 8080 of the container to TCP port 8080 on 127.0.0.1 of the host machine.

It goes on to create a container and start it but, the application fails to start because it needs a connection to mysql database.

```console
$ docker run -p 8080:8080 comments:0.0.1-SNAPSHOT
Setting Active Processor Count to 12
Calculating JVM memory based on 11340720K available memory
For more information on this calculation, see https://paketo.io/docs/reference/java-reference/#memory-calculator
Calculated JVM Memory Configuration: -XX:MaxDirectMemorySize=10M -Xmx10923615K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M (Total Memory: 11340720K, Thread Count: 50, Loaded Class Count: 16990, Headroom: 0%)
Enabling Java Native Memory Tracking
Adding 124 container CA certificates to JVM truststore
Spring Cloud Bindings Enabled
Picked up JAVA_TOOL_OPTIONS: -Djava.security.properties=/layers/paketo-buildpacks_bellsoft-liberica/java-security-properties/java-security.properties -XX:+ExitOnOutOfMemoryError -XX:ActiveProcessorCount=12 -XX:MaxDirectMemorySize=10M -Xmx10923615K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M -XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=summary -XX:+PrintNMTStatistics -Dorg.springframework.cloud.bindings.boot.enable=true

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.7.4)

2023-01-25 20:24:53.834  INFO 1 --- [           main] com.comment.CommentApplication           : Starting CommentApplication using Java 1.8.0_352 on 170228a5f483 with PID 1 (/workspace/WEB-INF/classes started by cnb in /workspace)
2023-01-25 20:24:53.839  INFO 1 --- [           main] com.comment.CommentApplication           : No active profile set, falling back to 1 default profile: "default"
2023-01-25 20:24:54.686  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2023-01-25 20:24:54.748  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 49 ms. Found 1 JPA repository interfaces.
2023-01-25 20:24:55.529  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2023-01-25 20:24:55.544  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2023-01-25 20:24:55.544  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
2023-01-25 20:24:55.665  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2023-01-25 20:24:55.666  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1758 ms
2023-01-25 20:24:55.943  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2023-01-25 20:24:56.015  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.11.Final
2023-01-25 20:24:56.270  INFO 1 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2023-01-25 20:24:56.406  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2023-01-25 20:25:02.702 ERROR 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Exception during pool initialization.

com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
        at com.mysql.cj.jdbc.exceptions.SQLError.createCommunicationsException(SQLError.java:174) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:64) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-java-8.0.30.jar:8.0.30]
```
{: .language-console}


### Step 3 | Connect the Spring Boot application to MySQL

How do we connect this application to the mysql container?

This is a job for docker compose, which will make things easier for us. But for now, I'll do it the hard way.

### Networks

This application is unable to connect with the mysql container because each container run on different networks. So what we need to do is create a network and connect both containers to it.

Create a network called "comments-app-network" using the command below:

`docker network create comments-app-network`

### Start a mysql container 

With the following command,

 `docker run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v mysql:/var/lib/mysql mysql:8.0`
 
- This command will create a container named 'mysql' from the image 'mysql:8.0'

- With port binding of 3306:3306 

- An environment variable of `MYSQL_ROOT_PASSWORD=root`

- `-d` is to run in detached mode and

- `-v` mounts the `/var/lib/mysql` directory to `mysql` directory on host, so that we don't lose all the data persisted by the application when the container stops.

Now execute the command below to see which networks the mysql container is connected to.

```console
$ docker inspect mysql -f "{{json .NetworkSettings.Networks }}"
{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"6544250f4f2a83e1273eb80f30e1e3fbe91f32761cdc9453f70da87acd80eb2a","EndpointID":"81e0f6ed9c083f387889231eb1ad851549579294c8b9245ba36eb3127cb9affb","Gateway":"172.17.0.1","IPAddress":"172.17.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:11:00:02","DriverOpts":null}}
```
{: .language-console}

### Connect the mysql container to the network that we created earlier

`$docker network connect comments-app-network mysql`

Check if it is connected:

```console
docker inspect mysql -f "{{json .NetworkSettings.Networks }}"
  {"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"6544250f4f2a83e1273eb80f30e1e3fbe91f32761cdc9453f70da87acd80eb2a","EndpointID":"81e0f6ed9c083f387889231eb1ad851549579294c8b9245ba36eb3127cb9affb","Gateway":"172.17.0.1","IPAddress":"172.17.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:11:00:02","DriverOpts":null},"comments-app-network":{"IPAMConfig":{},"Links":null,"Aliases":["ad09f804a2a0"],"NetworkID":"460988e1e69d32afc0e720a6a62e47d50851a8c2816cb7bdb07b8c592fb2eb2b","EndpointID":"12de76ed9292c437fb67075357df8c562b8752bd8e6db3bb8bccf47ec36660e0","Gateway":"172.20.0.1","IPAddress":"172.20.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:14:00:02","DriverOpts":{}}}
  
```
{: .language-console}

Now we can see it is connected to the network `comments-app-network`.


If you want to disconnect the container from the network use the command:

`docker network disconnect [OPTIONS] NETWORK CONTAINER` eg: `docker network disconnect comments-app-network mysql`

### Create Schema 

We should also create the schema required by the application in mysql.

You could do that via an sql client like DBeaver or MySQL Workbench. But I would just do it via terminal because it's a very simple schema create.

```console
  $ docker exec -it mysql bash
  bash-4.4# mysql -u root -p
  Enter password:
  Welcome to the MySQL monitor.  Commands end with ; or \g.
  Your MySQL connection id is 8
  Server version: 8.0.30 MySQL Community Server - GPL

  Copyright (c) 2000, 2022, Oracle and/or its affiliates.

  Oracle is a registered trademark of Oracle Corporation and/or its
  affiliates. Other names may be trademarks of their respective
  owners.

  Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

  mysql> show databases
      -> ;
  +--------------------+
  | Database           |
  +--------------------+
  | information_schema |
  | mysql              |
  | performance_schema |
  | sys                |
  +--------------------+
  4 rows in set (0.01 sec)

  mysql> create schema comments_app;

  mysql> show databases;
  +--------------------+
  | Database           |
  +--------------------+
  | comments_app       |
  | information_schema |
  | mysql              |
  | performance_schema |
  | sys                |
  +--------------------+
  5 rows in set (0.01 sec)
```
{: .language-console}

### Step 4 | Change the connection string 

You should also change the connection string from localhost to the name of the mysql container

`spring.datasource.url=jdbc:mysql://mysql:3306/comments_app`

Now we can start the application container with a connection to the same network.

```console
$ docker run -p 8080:8080 -it --network comments-app-network comments:0.0.1-SNAPSHOT
Setting Active Processor Count to 12
Calculating JVM memory based on 10930072K available memory
For more information on this calculation, see https://paketo.io/docs/reference/java-reference/#memory-calculator
Calculated JVM Memory Configuration: -XX:MaxDirectMemorySize=10M -Xmx10512967K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M (Total Memory: 10930072K, Thread Count: 50, Loaded Class Count: 16990, Headroom: 0%)
Enabling Java Native Memory Tracking
Adding 124 container CA certificates to JVM truststore
Spring Cloud Bindings Enabled
Picked up JAVA_TOOL_OPTIONS: -Djava.security.properties=/layers/paketo-buildpacks_bellsoft-liberica/java-security-properties/java-security.properties -XX:+ExitOnOutOfMemoryError -XX:ActiveProcessorCount=12 -XX:MaxDirectMemorySize=10M -Xmx10512967K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M -XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=summary -XX:+PrintNMTStatistics -Dorg.springframework.cloud.bindings.boot.enable=true

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.7.4)

2023-01-25 21:16:06.136  INFO 1 --- [           main] com.comment.CommentApplication           : Starting CommentApplication using Java 1.8.0_352 on 84c4b84c8a2a with PID 1 (/workspace/WEB-INF/classes started by cnb in /workspace)
2023-01-25 21:16:06.140  INFO 1 --- [           main] com.comment.CommentApplication           : No active profile set, falling back to 1 default profile: "default"
2023-01-25 21:16:06.933  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2023-01-25 21:16:07.001  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 53 ms. Found 1 JPA repository interfaces.
2023-01-25 21:16:07.718  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2023-01-25 21:16:07.732  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2023-01-25 21:16:07.732  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
2023-01-25 21:16:07.839  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2023-01-25 21:16:07.839  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1625 ms
2023-01-25 21:16:08.071  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2023-01-25 21:16:08.133  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.11.Final
2023-01-25 21:16:08.383  INFO 1 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2023-01-25 21:16:08.482  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2023-01-25 21:16:08.888  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
2023-01-25 21:16:08.922  INFO 1 --- [           main] org.hibernate.dialect.Dialect            : HHH000400: Using dialect: org.hibernate.dialect.MySQL8Dialect
2023-01-25 21:16:09.616  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
2023-01-25 21:16:09.627  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
2023-01-25 21:16:10.107  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
2023-01-25 21:16:10.654  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-01-25 21:16:10.667  INFO 1 --- [           main] com.comment.CommentApplication           : Started CommentApplication in 4.976 seconds (JVM running for 5.369)

```
{: .language-console}

Now you can access the application via localhost:8080

Try this in browser : http://localhost:8080/posts/1/comments

Or this in terminal `curl localhost:8080/posts/1/comments`

It will return an empty list because there's no data in database.

## Downloads
[Docker notes PDF]({{ site.baseurl }}/assets/slides/docker-notes.pdf){:target="_blank"}

[Docker commands PDF]({{ site.baseurl }}/assets/slides/docker-commands.pdf){:target="_blank"}

[Docker compose PDF]({{ site.baseurl }}/assets/slides/docker-compose.pdf){:target="_blank"}

[Docker run vs start PDF]({{ site.baseurl }}/assets/slides/docker-run-vs-start.pdf){:target="_blank"}


## Usefull docker commands

`docker network ls`: Lists all the networks the Engine daemon knows about.

`docker run` command runs a command in a new container, pulling the image if needed and starting the container.

`docker start`: restarts a stopped container with all its previous changes intact.

`docker stop` stops a running container.

`docker ps` gives list of running containers.

`docker ps -a` gives list of all containers, including those that are stopped.

`docker images` lists all images 

`docker info` displays information regarding the Docker installation in your computer.


## References and useful links

[Docker Tutorial for Beginners FULL COURSE in 3 Hours - YouTube](https://youtu.be/3c-iBn73dDE){:target="_blank"}


[Docker Documentation Docker Documentation](https://docs.docker.com){:target="_blank"}


[Digging into Docker layers. While running a Docker container…   by Jessica G   Medium](https://jessicagreben.medium.com/digging-into-docker-layers-c22f948ed612){:target="_blank"}


[Docker overview  Docker Documentation](https://docs.docker.com/get-started/overview){:target="_blank"}


[Spring Boot Gradle Plugin Reference Guide - Build Image](https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/htmlsingle/#build-image){:target="_blank"}


[Explore Docker's Container Image Repository  Docker Hub](https://hub.docker.com/search?q=mysql){:target="_blank"}


[Docker cheat sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf){:target="_blank"}
