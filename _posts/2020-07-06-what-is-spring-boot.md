---
layout: post
comments: true

aside: true
title:  "What is Spring Boot"
date:   2020-07-06
updated-date: 2020-07-19
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Spring Boot is a framework or rather a tool built on top of spring framework which enables you to quickly bootstrap a Spring application from scratch."
excerpt_separator: <!--more-->

images: 
  - url: /assets/img/thumb/spring-boot.svg
    alt: What is Spring Boot
    title: What is Spring Boot


ads:
    - url: /courses/spring-boot/REST-API-with-Spring-Boot
      img: 
        url: /assets/img/spring-boot-course/thumb.jpg
        alt: Spring Boot Course
        title: Spring Boot Course

cover-image: 
    url: /assets/img/thumb/spring-boot.svg
    alt: What is Spring Boot
    title: What is Spring Boot
---

If you've ever set up a spring application in the past, you would know the pain!
How much configuration that has to be done.  :sweat:

Well, Spring Boot is here to make the developer's life easier. :joy:

Spring Boot still uses the Spring framework under the hood, but almost all of the configuration is done for you if you wish.

Whether you use Spring Boot or Spring framework, you would still create a Spring application at the end. The differences are in the process. How fast and how easy things can get during development.

So in this post let's take a look at the Spring Boot framework.

<!-- Ezoic - incontent_5 - incontent_5 -->
<div id="ezoic-pub-ad-placeholder-113"> </div>
<!-- End Ezoic - incontent_5 - incontent_5 -->

<!--more-->

<hr>

# What is Spring Boot?

<hr>

**Spring Boot is a framework which helps create standalone Spring applications that are production-grade. 
It's built on top of the Spring framework and takes an opinionated view of the Spring platform to minimize the configuration required by a typical Spring application.
This makes it fast and easy to get started with.**

**Spring Boot is a framework or rather a tool built on top of spring framework which enables you to quickly bootstrap a Spring application from scratch.**

So it's more like you take a short cut to create a Spring application.

In other words, Spring Boot is an extension of the Spring framework, intended to simplify and accelerate the development of enterprise applications.

You can set up a spring application using Spring Boot (without having to write a single line of XML or any configuration what so ever) to the point where it is ready to be deployed and run in a matter of minutes :joy:. So it spares the developers more time to focus on implementing the application logic rather than project set up and configuration.

<!-- Ezoic - incontent_6 - incontent_6 -->
<div id="ezoic-pub-ad-placeholder-114"> </div>
<!-- End Ezoic - incontent_6 - incontent_6 -->

How is it possible? 

Well, [**Spring Boot starters**](#spring-boot-starters) and [**Autoconfiguration**](#what-is-autoconfiguration) makes the project set up so quick and easy that you only have to know which kind of application you want to create. 

For example, if you tell the [Spring Initializr](#spring-initializr) that you want to create a web application, it will create the build file with all the required dependencies and the project folder structure along with a sample application class which you can just run.

But this doesn't mean that you are confined to what has been chosen or configured by the framework for you. You can customize whatever is needed according to your preference or requirement.

So starters and auto-configuration speed up the project set up and eliminate configuration but what makes it production-ready?

It's the **Spring Boot Actuator**, which lets you monitor and interact with the application once it's deployed. The Actuator can also be configured to support CORS.

Oh, by the way, Spring Boot also embeds a server, such as TOMCAT or Reactor Netty depending on the kind of application that you create, so You can bundle up your web application as a jar file and just run it without having to have a server.


<!-- Ezoic - incontent_7 - incontent_7 -->
<div id="ezoic-pub-ad-placeholder-115"> </div>
<!-- End Ezoic - incontent_7 - incontent_7 -->

<hr>

# Spring Boot Starters

<hr>

Often times dependencies could be tricky, :confused: there are so many external libraries and selecting versions that should be compatible with each other can be difficult at times.

But there's a **one-stop-shop** for all the dependency requirements of a Spring Boot project.
That's the **spring boot starters**.
All you have to do is select a few starter dependencies according to the type of project and the starter dependencies will take care of the rest. :satisfied:

So if you are building a REST API or a web project, you would add the `spring-boot-starter-web` dependency to your project and if you take a look its [`build.gradle`](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-web/build.gradle){:target="_blank"} file <i class="fa fa-hand-o-down" aria-hidden="true"></i> you can see all the other dependencies it includes.



``` groovy

plugins {
  id "org.springframework.boot.starter"
}

description = "Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container"

dependencies {
  api(project(":spring-boot-project:spring-boot-starters:spring-boot-starter"))
  api(project(":spring-boot-project:spring-boot-starters:spring-boot-starter-json"))
  api(project(":spring-boot-project:spring-boot-starters:spring-boot-starter-tomcat"))
  api("org.springframework:spring-web")
  api("org.springframework:spring-webmvc")
}

```

Similarly, if you want to use Spring Data Jpa, you would add the `spring-boot-starter-data-jpa` dependency to your project.


There’s a list of all the starters available in the [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using-boot-starter){:target="_blank"} along with a brief description of each, and the table below is derived from it.

<!-- Ezoic - incontent_8 - incontent_8 -->
<div id="ezoic-pub-ad-placeholder-116"> </div>
<!-- End Ezoic - incontent_8 - incontent_8 -->

## List of popular Spring Boot starter dependencies, each with the link to its `build.gradle` file

|---
| Name | Description |
|:-|:-|
| [spring-boot-starter](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter/build.gradle){:target="_blank"} | Core starter, including auto-configuration support, logging and YAML |
| [spring-boot-starter-activemq](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-activemq/build.gradle){:target="_blank"} | Starter for JMS messaging using Apache ActiveMQ |
| [spring-boot-starter-amqp](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-amqp/build.gradle){:target="_blank"} | Starter for using Spring AMQP and Rabbit MQ |
| [spring-boot-starter-aop](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-aop/build.gradle){:target="_blank"} | Starter for aspect-oriented programming with Spring AOP and AspectJ |
| [spring-boot-starter-artemis](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-artemis/build.gradle){:target="_blank"} | Starter for JMS messaging using Apache Artemis |
| [spring-boot-starter-batch](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-batch/build.gradle){:target="_blank"} | Starter for using Spring Batch |
| [spring-boot-starter-cache](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-batch/build.gradle){:target="_blank"} | Starter for using Spring Framework’s caching support |
| [spring-boot-starter-data-cassandra](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-cassandra/build.gradle){:target="_blank"} | Starter for using Cassandra distributed database and Spring Data Cassandra |
| [spring-boot-starter-data-cassandra-reactive](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-cassandra-reactive/build.gradle){:target="_blank"} | Starter for using Cassandra distributed database and Spring Data Cassandra Reactive |
| [spring-boot-starter-data-couchbase](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-couchbase/build.gradle){:target="_blank"} | Starter for using Couchbase document-oriented database and Spring Data Couchbase |
| [spring-boot-starter-data-couchbase-reactive](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-couchbase-reactive/build.gradle){:target="_blank"} | Starter for using Couchbase document-oriented database and Spring Data Couchbase Reactive |
| [spring-boot-starter-data-elasticsearch](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-elasticsearch/build.gradle){:target="_blank"} | Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch |
| [spring-boot-starter-data-jdbc](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-jdbc/build.gradle){:target="_blank"} | Starter for using Spring Data JDBC |
| [spring-boot-starter-data-jpa](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-jpa/build.gradle){:target="_blank"} | Starter for using Spring Data JPA with Hibernate |
| [spring-boot-starter-data-ldap](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-ldap/build.gradle){:target="_blank"} | Starter for using Spring Data LDAP |
| [spring-boot-starter-data-mongodb](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-mongodb/build.gradle){:target="_blank"} | Starter for using MongoDB document-oriented database and Spring Data MongoDB |
| [spring-boot-starter-data-mongodb-reactive](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-mongodb-reactive/build.gradle){:target="_blank"} | Starter for using MongoDB document-oriented database and Spring Data MongoDB Reactive |
| [spring-boot-starter-data-neo4j](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-neo4/build.gradle){:target="_blank"} | Starter for using Neo4j graph database and Spring Data Neo4j |
| [spring-boot-starter-data-r2dbc](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-r2dbc/build.gradle){:target="_blank"} | Starter for using Spring Data R2DBC |
| [spring-boot-starter-data-redis](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-redis/build.gradle){:target="_blank"} | Starter for using Redis key-value data store with Spring Data Redis and the Lettuce client |
| [spring-boot-starter-data-redis-reactive](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-redis-reactive/build.gradle){:target="_blank"} | Starter for using Redis key-value data store with Spring Data Redis reactive and the Lettuce client |
| [spring-boot-starter-data-rest](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-rest/build.gradle){:target="_blank"} | Starter for exposing Spring Data repositories over REST using Spring Data REST |
| [spring-boot-starter-data-solr](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-data-solr/build.gradle){:target="_blank"} | Starter for using the Apache Solr search platform with Spring Data Solr |
| [spring-boot-starter-freemarker](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-freemarker/build.gradle){:target="_blank"} | Starter for building MVC web applications using FreeMarker views |
| [spring-boot-starter-groovy-templates](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-groovy-templates/build.gradle){:target="_blank"} | Starter for building MVC web applications using Groovy Templates views |
| [spring-boot-starter-hateoas](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-hateoas/build.gradle){:target="_blank"} | Starter for building hypermedia-based RESTful web application with Spring MVC and Spring HATEOAS |
| [spring-boot-starter-integration](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-integration/build.gradle){:target="_blank"} | Starter for using Spring Integration |
| [spring-boot-starter-jdbc](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-jdbc/build.gradle){:target="_blank"} | Starter for using JDBC with the HikariCP connection pool |
| [spring-boot-starter-jersey](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-jersey/build.gradle){:target="_blank"} | Starter for building RESTful web applications using JAX-RS and Jersey. An alternative to spring-boot-starter-web |
| [spring-boot-starter-jooq](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-jersey/build.gradle){:target="_blank"} | Starter for using jOOQ to access SQL databases. An alternative to spring-boot-starter-data-jpa or spring-boot-starter-jdbc |
| [spring-boot-starter-json](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-json/build.gradle){:target="_blank"} | Starter for reading and writing json |
| [spring-boot-starter-jta-atomikos](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-jta-atomikos/build.gradle){:target="_blank"} | Starter for JTA transactions using Atomikos |
| [spring-boot-starter-jta-bitronix](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-jta-bitronix/build.gradle){:target="_blank"} | Starter for JTA transactions using Bitronix. Deprecated since 2.3.0 |
| [spring-boot-starter-mail](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-mail/build.gradle){:target="_blank"} | Starter for using Java Mail and Spring Framework’s email sending support |
| [spring-boot-starter-mustache](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-mustache/build.gradle){:target="_blank"} | Starter for building web applications using Mustache views |
| [spring-boot-starter-oauth2-client](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-oauth2-client/build.gradle){:target="_blank"} | Starter for using Spring Security’s OAuth2/OpenID Connect client features |
| [spring-boot-starter-oauth2-resource-server](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-oauth2-resource-server/build.gradle){:target="_blank"} | Starter for using Spring Security’s OAuth2 resource server features |
| [spring-boot-starter-quartz](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-quartz/build.gradle){:target="_blank"} | Starter for using the Quartz scheduler |
| [spring-boot-starter-rsocket](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-rsocket/build.gradle){:target="_blank"} | Starter for building RSocket clients and servers |
| [spring-boot-starter-security](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-security/build.gradle){:target="_blank"} | Starter for using Spring Security |
| [spring-boot-starter-test](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-security/build.gradle){:target="_blank"} | Starter for testing Spring Boot applications with libraries including JUnit, Hamcrest and Mockito |
| [spring-boot-starter-thymeleaf](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-thymeleaf/build.gradle){:target="_blank"} | Starter for building MVC web applications using Thymeleaf views |
| [spring-boot-starter-validation](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-validation/build.gradle){:target="_blank"} | Starter for using Java Bean Validation with Hibernate Validator |
| [spring-boot-starter-web](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-web/build.gradle){:target="_blank"} | Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container |
| [spring-boot-starter-web-services](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-web-services/build.gradle){:target="_blank"} | Starter for using Spring Web Services |
| [spring-boot-starter-webflux](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-webflux/build.gradle){:target="_blank"} | Starter for building WebFlux applications using Spring Framework’s Reactive Web support |
| [spring-boot-starter-websocket](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-websocket/build.gradle){:target="_blank"} | Starter for building WebSocket applications using Spring Framework’s WebSocket support |
{: .table-striped}

<!-- Ezoic - incontent_9 - incontent_9 -->
<div id="ezoic-pub-ad-placeholder-117"> </div>
<!-- End Ezoic - incontent_9 - incontent_9 -->

<hr>

# What is Autoconfiguration

<hr>

**Autoconfiguration is the configuration of the Spring Application Context by the Spring Boot framework, attempting to guess and configure beans that you are likely to need.**

If you have worked with a typical spring application, you should be familiar with all the configurations that are needed such as, data sources, entity manager factories, dispatcher servlets and the list goes on. 

### How autoconfiguration works

The spring boot framework kind of looks at the jar dependencies that you have added and the existing configurations for the application if there is any, and then based on these, automatically configures your Spring application. 

For example, if H2 is on your classpath, and you have not manually configured any database connection beans, then Spring Boot auto-configures an in-memory database. How convenient is that? :satisfied:  

However, **auto-configuration is non-invasive**. you can define your own configuration to replace specific parts of the auto-configuration as and when you want, but initially it is so much faster and easier to get started without having to deal with a lot of configuration manually.

Auto-configuration is the reason why the Pivotal team says ["It's a Kind of Magic!"](https://youtu.be/jDchAEHIht0){:target="_blank"}

<!-- How to enable and disable auto-configuration -->


<!-- Ezoic - incontent_10 - incontent_10 -->
<div id="ezoic-pub-ad-placeholder-118"> </div>
<!-- End Ezoic - incontent_10 - incontent_10 -->

<hr>

# Spring Initializr

<hr>

**Spring initializr is a website or a web-based tool that can be used to set up a Spring Boot project.**

Of course, you can set up a Spring Boot project without using the Spring initializr, but the advantage of using the Spring initializr is that it speeds up the process and does most of the groundwork for you.

All you have to do is to go to [start.spring.io](https://start.spring.io/){:target="_blank"} and add the spring boot starter dependencies that you want, (eg: web, JPA and H2 etc...) and generate the project!

Spring initialzr will do the following:

- Creates the build file with all the required dependencies, plugins and also takes care of the versions.
- Creates the project structure or the folder structure for your project.

Now you can start implementing, and yes you can do any customizations to the build file or the project setup as much as you like.

<!-- Ezoic - incontent_11 - incontent_11 -->
<div id="ezoic-pub-ad-placeholder-122"> </div>
<!-- End Ezoic - incontent_11 - incontent_11 -->

<hr>

{% include related-post.html post-name='spring-initializr' title = "How to set up a Spring Boot project using Spring Initializr" %}

<hr>

## Want To Get Started With Spring Boot?
{: .center}

Check out the FREE course. <i class="fa fa-hand-o-down" aria-hidden="true"></i>
{: .center}

<div class="center">
  <span id="ezoic-pub-video-placeholder-5"></span>
</div>