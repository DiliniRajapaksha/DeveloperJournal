---

layout: post
comments: true

title:  "Docker"
date:   2021-11-27
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Introduction to Docker"
excerpt_separator: <!--more-->


images: 
  - url: /assets/img/spring-boot/spring-boot-faq.jpg
    alt: Spring Boot FAQ
    title: Spring Boot FAQ

cover-image: 
    url: /assets/img/spring-boot/spring-boot-faq.jpg
    alt: Spring Boot FAQ
    title: Spring Boot FAQ
---

I learnt Docker recently and honestly I regret not learning it sooner. It would have saved me a lot of time in setting up development environments locally and also resolving issues around development environments and versions.

<!--more-->

Docker provides the ability to package and run an application in a loosely isolated environment called a container

So first of all, let's see how Docker can help us.

## How to use Docker localy as a developer

I'll give a couple of examples from my experience.

1. I have this Spring Boot application which was created as a part of my spring boot course, and I wanted to run it in my new PC (I had to get a new computer because my Old iMac became unbearably slow).
The application requires a connection to a MYSQL database. I didn't have MYSQL installed on my new PC, so I couldn't start the application. 
I was learning Docker at that time, so thought I would put my Docker knowledge in to use.
So I got MYSQL running on my PC as a Docker container using the below command.

`docker run --name msql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0`

Then I could log in to mysql to create the schema and run my application without any issues.

2.  I run this blog using Jekyll, so when I moved to the new PC I had to set up the environment from scratch to run it localy. After a quick google search I found a docker compose file which could help me run my blog without installing anything. All I had to do was to run the command `docker compose up`.


# How I learnt Docker

When I decided to learn Docker, I first had a look at some YouTube tutorials to get an overall idea of what it is and what it can do. There is one tutorial which I higly recommend that you watch (linked below in the references section) because it is a great introduction to Docker explained in a very clear and simple manner.

Once I had a basic idea of it, I installed Docker and practiced some of the commands like `docker ps`, `docker images`, `docker run --name msql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0` etc...

I still had some confusions around things like Docker image, container, and Dockerfile. So I started reading the documenation. 
Following are some definitions I found (came up with) and noted down to help me understand the concepts better.

### Docker image
A read only template with instructions for creating a Docker container. In other words, a **docker image** is a docker object which is a template for creating containers.

### Dockerfile
Docker file is a blue print for creating docker images.
Each instruction on a dockerfile creates a layer in the image. 
If you change the dockerfile and rebuild the image, only the changed layers are rebuilt. This makes images lightweight, small and fast.
It is always named `Dockerfile` without an extention.

### Docker Container
A container is  a runnable instance of an image.
It is a normal operating system process except that this process is isolated and has its own file system, its own networking, and its own isolated process tree separate from the host.
Containers are lightweight and contain everything needed to run the application, and it becomes the unit for distributing and testing your application.

### Docker daemon
Docker daemon `dockerd` listenes to Docker API requests and manages **Docker objects like images, containers, networks and volumes.**

### Docker client
Docker client `docker` is how users interact with docker. docker client sends commands such as `docker run` to `dockerd` to be carried out. Docker client can communicate with more than one docker daemon.

### Docker registry
A Docker registry stores Docker images. example: [Docker Hub](https://hub.docker.com)

### Docker compose

Docker compose is a yaml file to run multiple containers.
It can be defined outside the application code.

### Docker volume
Docker volume is a folder in host file system mounted to the virtual file system of docker container.
Data get automaticaly replicated in the host file system.





Spring boot gradle JIB plugin can create a docker image and push to a registry

MYSQL in Docker


Always named Dockerfile.

FROM - base image always

ENV - Configure env variables like db username and passwords (optional) Not recomended, should be moved to docker compose.

RUN - execute any linux commands in the container

COPY - executes on the host, used to copy files from host to container

CMD - executes an entry point linux command

### Build docker image
Build docker image from dockerfile passing name and a tag/version and also the location of the dockerfile (dot for current directory)

`\>docker build -t myapp:1.0 .`



=============

docker run --name msql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0

When mysql runs in docker container, the connection string doesn't change as long as the port mapping is there.

When the application is moved to docker, the host should change from [localhost](http://localhost) to container name i.e. mysql.

```
spring.datasource.url=jdbc:mysql://localhost:3306/comments_app?serverTimezone=Australia/Melbourne
spring.jpa.hibernate.ddl-auto=create
spring.datasource.username=root
spring.datasource.password=root
```

```
docker run --name mysql -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -v mysql:/var/lib/mysql mysql:8.0
```

<http://localhost:8080/posts/1/comments>

./gradlew bootBuildImage

The following docker run command first creates a writeable container layer over the specified image, and then starts it.

`docker run -p 8080:8080 -t spring-helloworld`

Run two images/containers in the same network so they can connect

================================================

Change connection string from local host to container name (mysql)

```
spring.datasource.url=jdbc:mysql://mysql:3306/comments_app?serverTimezone=Australia/Melbourne
```

1\. Create a network called "comments-net"

`docker network create comments-net`

2 Start mysql and connect to the network

`docker start mysql`

`docker network connect comments-net mysql`

```
docker inspect mysql -f "{{json .NetworkSettings.Networks }}"
//this will print the networks that the container is connected to 

output
________
{"bridge":{"IPAMConfig":null,"Links":null,"Aliases":null,"NetworkID":"6aabb100e4f6354d3f0fd71f78ee070e4a6c7cb83be3c2a93a4b91a8fa43b7de","EndpointID":"21cf2aa34720d887a442e7a33056ae102f6c0665f38899dfe429f7d03e70bf30","Gateway":"172.17.0.1","IPAddress":"172.17.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:11:00:02","DriverOpts":null},"comments-net":{"IPAMConfig":{},"Links":null,"Aliases":["ad09f804a2a0"],"NetworkID":"db0336ccf51311eaaf531339f46b36a7ef31f0353042629b22d29e003d5e366b","EndpointID":"7ed105deda709adaf1bc6982c2d8c1c9d783afb9d0a1a08b524d7116c5f490f9","Gateway":"172.19.0.1","IPAddress":"172.19.0.2","IPPrefixLen":16,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"MacAddress":"02:42:ac:13:00:02","DriverOpts":{}}}
```

mysql container is connected to "bridge" and "comments-net" networks now.

3 Run the docker container of the app with the same network

`docker run -p 8080:8080 -it --network comments-net comments:0.0.1-SNAPSHOT`

Test in browser 

<http://localhost:8080/posts/2/comments>



Errors:

1. Caused by: java.net.UnknownHostException: mysql: Temporary failure in name resolution

 docker run -p 8080:8080 -it --network comments-app-network comments:0.0.1-SNAPSHOT
Setting Active Processor Count to 12
Calculating JVM memory based on 11010116K available memory
For more information on this calculation, see https://paketo.io/docs/reference/java-reference/#memory-calculator
Calculated JVM Memory Configuration: -XX:MaxDirectMemorySize=10M -Xmx10593011K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M (Total Memory: 11010116K, Thread Count: 50, Loaded Class Count: 16990, Headroom: 0%)
Enabling Java Native Memory Tracking
Adding 124 container CA certificates to JVM truststore
Spring Cloud Bindings Enabled
Picked up JAVA_TOOL_OPTIONS: -Djava.security.properties=/layers/paketo-buildpacks_bellsoft-liberica/java-security-properties/java-security.properties -XX:+ExitOnOutOfMemoryError -XX:ActiveProcessorCount=12 -XX:MaxDirectMemorySize=10M -Xmx10593011K -XX:MaxMetaspaceSize=109904K -XX:ReservedCodeCacheSize=240M -Xss1M -XX:+UnlockDiagnosticVMOptions -XX:NativeMemoryTracking=summary -XX:+PrintNMTStatistics -Dorg.springframework.cloud.bindings.boot.enable=true

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.7.4)

2023-05-03 20:40:04.910  INFO 1 --- [           main] com.comment.CommentApplication           : Starting CommentApplication using Java 1.8.0_352 on 526b1029024d with PID 1 (/workspace/WEB-INF/classes started by cnb in /workspace)
2023-05-03 20:40:04.914  INFO 1 --- [           main] com.comment.CommentApplication           : No active profile set, falling back to 1 default profile: "default"
2023-05-03 20:40:05.686  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2023-05-03 20:40:05.741  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 44 ms. Found 1 JPA repository interfaces.
2023-05-03 20:40:06.376  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2023-05-03 20:40:06.389  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2023-05-03 20:40:06.390  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.65]
2023-05-03 20:40:06.501  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2023-05-03 20:40:06.502  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1527 ms
2023-05-03 20:40:06.731  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
2023-05-03 20:40:06.793  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 5.6.11.Final
2023-05-03 20:40:07.043  INFO 1 --- [           main] o.hibernate.annotations.common.Version   : HCANN000001: Hibernate Commons Annotations {5.1.2.Final}
2023-05-03 20:40:07.159  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2023-05-03 20:40:18.272 ERROR 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Exception during pool initialization.

com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
        at com.mysql.cj.jdbc.exceptions.SQLError.createCommunicationsException(SQLError.java:174) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:64) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:364) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:206) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:476) [HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) [HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:115) [HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) [HikariCP-4.0.3.jar:na]
        at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:181) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:68) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:35) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:101) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:263) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:237) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.id.factory.internal.DefaultIdentifierGeneratorFactory.injectServices(DefaultIdentifierGeneratorFactory.java:175) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.injectDependencies(AbstractServiceRegistryImpl.java:286) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:243) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:173) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:127) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1460) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1494) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:58) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:365) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:341) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1863) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1800) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:620) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1154) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:908) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:583) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:734) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:408) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1306) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1295) ~[spring-boot-2.7.4.jar:2.7.4]
        at com.comment.CommentApplication.main(CommentApplication.java:18) ~[classes/:na]
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_352]
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_352]
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_352]
        at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_352]
        at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:108) ~[workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[workspace/:na]
        at org.springframework.boot.loader.WarLauncher.main(WarLauncher.java:59) ~[workspace/:na]
Caused by: com.mysql.cj.exceptions.CJCommunicationsException: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
        at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) ~[na:1.8.0_352]
        at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) ~[na:1.8.0_352]
        at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) ~[na:1.8.0_352]
        at java.lang.reflect.Constructor.newInstance(Constructor.java:423) ~[na:1.8.0_352]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:61) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:105) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:151) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createCommunicationsException(ExceptionFactory.java:167) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:89) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.NativeSession.connect(NativeSession.java:120) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.connectOneTryOnly(ConnectionImpl.java:948) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:818) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        ... 57 common frames omitted
Caused by: java.net.UnknownHostException: mysql: Temporary failure in name resolution
        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method) ~[na:1.8.0_352]
        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:866) ~[na:1.8.0_352]
        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1288) ~[na:1.8.0_352]
        at java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:815) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName0(InetAddress.java:1277) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName(InetAddress.java:1136) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName(InetAddress.java:1064) ~[na:1.8.0_352]
        at com.mysql.cj.protocol.StandardSocketFactory.connect(StandardSocketFactory.java:130) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:63) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        ... 60 common frames omitted

2023-05-03 20:40:18.275  WARN 1 --- [           main] o.h.e.j.e.i.JdbcEnvironmentInitiator     : HHH000342: Could not obtain connection to query metadata

com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
        at com.mysql.cj.jdbc.exceptions.SQLError.createCommunicationsException(SQLError.java:174) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:64) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:364) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:206) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:476) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:115) ~[HikariCP-4.0.3.jar:na]
        at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-4.0.3.jar:na]
        at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:181) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:68) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:35) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:101) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:263) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:237) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.id.factory.internal.DefaultIdentifierGeneratorFactory.injectServices(DefaultIdentifierGeneratorFactory.java:175) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.injectDependencies(AbstractServiceRegistryImpl.java:286) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:243) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:173) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:127) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1460) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1494) [hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:58) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:365) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:341) [spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1863) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1800) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:620) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208) [spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1154) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:908) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:583) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:734) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:408) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1306) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1295) ~[spring-boot-2.7.4.jar:2.7.4]
        at com.comment.CommentApplication.main(CommentApplication.java:18) ~[classes/:na]
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_352]
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_352]
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_352]
        at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_352]
        at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:108) ~[workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[workspace/:na]
        at org.springframework.boot.loader.WarLauncher.main(WarLauncher.java:59) ~[workspace/:na]
Caused by: com.mysql.cj.exceptions.CJCommunicationsException: Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
        at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) ~[na:1.8.0_352]
        at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) ~[na:1.8.0_352]
        at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) ~[na:1.8.0_352]
        at java.lang.reflect.Constructor.newInstance(Constructor.java:423) ~[na:1.8.0_352]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:61) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:105) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createException(ExceptionFactory.java:151) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.exceptions.ExceptionFactory.createCommunicationsException(ExceptionFactory.java:167) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:89) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.NativeSession.connect(NativeSession.java:120) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.connectOneTryOnly(ConnectionImpl.java:948) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:818) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        ... 57 common frames omitted
Caused by: java.net.UnknownHostException: mysql: Temporary failure in name resolution
        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method) ~[na:1.8.0_352]
        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:866) ~[na:1.8.0_352]
        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1288) ~[na:1.8.0_352]
        at java.net.InetAddress$NameServiceAddresses.get(InetAddress.java:815) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName0(InetAddress.java:1277) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName(InetAddress.java:1136) ~[na:1.8.0_352]
        at java.net.InetAddress.getAllByName(InetAddress.java:1064) ~[na:1.8.0_352]
        at com.mysql.cj.protocol.StandardSocketFactory.connect(StandardSocketFactory.java:130) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        at com.mysql.cj.protocol.a.NativeSocketConnection.connect(NativeSocketConnection.java:63) ~[mysql-connector-java-8.0.30.jar:8.0.30]
        ... 60 common frames omitted

2023-05-03 20:40:18.278 ERROR 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]
2023-05-03 20:40:18.279  WARN 1 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/autoconfigure/orm/jpa/HibernateJpaConfiguration.class]: Invocation of init method failed; nested exception is org.hibernate.service.spi.ServiceException: Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]
2023-05-03 20:40:18.283  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
2023-05-03 20:40:18.296  INFO 1 --- [           main] ConditionEvaluationReportLoggingListener :

Error starting ApplicationContext. To display the conditions report re-run your application with 'debug' enabled.
2023-05-03 20:40:18.317 ERROR 1 --- [           main] o.s.boot.SpringApplication               : Application run failed

org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/autoconfigure/orm/jpa/HibernateJpaConfiguration.class]: Invocation of init method failed; nested exception is org.hibernate.service.spi.ServiceException: Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1804) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:620) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:542) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:335) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:333) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:208) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1154) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:908) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:583) ~[spring-context-5.3.23.jar:5.3.23]
        at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:147) ~[spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:734) [spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:408) [spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) [spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1306) [spring-boot-2.7.4.jar:2.7.4]
        at org.springframework.boot.SpringApplication.run(SpringApplication.java:1295) [spring-boot-2.7.4.jar:2.7.4]
        at com.comment.CommentApplication.main(CommentApplication.java:18) [classes/:na]
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_352]
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_352]
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_352]
        at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_352]
        at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) [workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:108) [workspace/:na]
        at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) [workspace/:na]
        at org.springframework.boot.loader.WarLauncher.main(WarLauncher.java:59) [workspace/:na]
Caused by: org.hibernate.service.spi.ServiceException: Unable to create requested service [org.hibernate.engine.jdbc.env.spi.JdbcEnvironment]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:275) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:237) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.id.factory.internal.DefaultIdentifierGeneratorFactory.injectServices(DefaultIdentifierGeneratorFactory.java:175) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.injectDependencies(AbstractServiceRegistryImpl.java:286) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:243) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:214) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:173) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:127) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1460) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1494) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:58) ~[spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:365) ~[spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:341) ~[spring-orm-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1863) ~[spring-beans-5.3.23.jar:5.3.23]
        at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1800) ~[spring-beans-5.3.23.jar:5.3.23]
        ... 24 common frames omitted
Caused by: org.hibernate.HibernateException: Access to DialectResolutionInfo cannot be null when 'hibernate.dialect' not set
        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.determineDialect(DialectFactoryImpl.java:100) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.dialect.internal.DialectFactoryImpl.buildDialect(DialectFactoryImpl.java:54) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:138) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:35) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:101) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:263) ~[hibernate-core-5.6.11.Final.jar:5.6.11.Final]
        ... 41 common frames omitted


Native Memory Tracking:

Total: reserved=12395000KB, committed=801032KB
-                 Java Heap (reserved=10594304KB, committed=314368KB)
                            (mmap: reserved=10594304KB, committed=314368KB)

-                     Class (reserved=1095637KB, committed=52653KB)
                            (classes #7370)
                            (malloc=12245KB #10685)
                            (mmap: reserved=1083392KB, committed=40408KB)

-                    Thread (reserved=22641KB, committed=22641KB)
                            (thread #22)
                            (stack: reserved=22548KB, committed=22548KB)
                            (malloc=71KB #132)
                            (arena=22KB #40)

-                      Code (reserved=251920KB, committed=14476KB)
                            (malloc=2320KB #3621)
                            (mmap: reserved=249600KB, committed=12156KB)

-                        GC (reserved=399762KB, committed=366158KB)
                            (malloc=12694KB #209)
                            (mmap: reserved=387068KB, committed=353464KB)

-                  Compiler (reserved=5375KB, committed=5375KB)
                            (malloc=18KB #344)
                            (arena=5357KB #29)

-                  Internal (reserved=12580KB, committed=12580KB)
                            (malloc=12548KB #10463)
                            (mmap: reserved=32KB, committed=32KB)

-                    Symbol (reserved=10907KB, committed=10907KB)
                            (malloc=9460KB #92844)
                            (arena=1447KB #1)

-    Native Memory Tracking (reserved=1859KB, committed=1859KB)
                            (malloc=6KB #73)
                            (tracking overhead=1854KB)

-               Arena Chunk (reserved=16KB, committed=16KB)
                            (malloc=16KB)



2. Docker uses up all the space in c drive. should move it to some other drive
  https://stackoverflow.com/questions/62441307/how-can-i-change-the-location-of-docker-images-when-using-docker-desktop-on-wsl2

  Stop docker desktop: on windows just look at the bottom right system tray, right click on docker and choose “quit docker desktop”

wsl --list -v
  wsl  --shutdown

Export the data, you must create the path F:\Docker\wsl\data
  wsl --export docker-desktop-data "F:\Docker\wsl\data\docker-desktop-data.tar"

Unregister
  wsl --unregister docker-desktop-data

Import the data back - this will create the ext4.vhdx file in the new directory "F:\Docker\wsl\data"
  wsl --import docker-desktop-data "F:\Docker\wsl\data" "F:\Docker\wsl\data\docker-desktop-data.tar" --version 2

  Start the Docker Desktop again and it should work

It worked! so deleted F:\Docker\wsl\data\docker-desktop-data.tar file (NOT the ext4.vhdx file)