---
layout: post
comments: true

aside: false
title:  "What is Spring Boot"
date:   2019-07-04
updated-date: 2019-07-04
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Spring boot is a framework which helps create standalone Spring applications that are production grade. It's built on top of spring framework and takes an opinionated view of the Spring platform to minimize the configuration required by a typical Spring application. This makes it super fast and easy to get started with. In this post, we'll explore deeper in to the Spring Boot framework and find answers to some common questions about it."
excerpt_separator: <!--more-->
images: 
  - url: /assets/img/spring-boot/what-is-spring-boot.png
    alt: What is Spring Boot
    title: What is Spring Boot

---

In this post let's take a look at the Spring Boot framework 
Spring boot is a framework which helps create standalone Spring applications that are production grade. It's built on top of spring framework and takes an opinionated view of the Spring platform to minimize the configuration required by a typical Spring application. This makes it super fast and easy to get started with. In this post, we'll explore deeper in to the Spring Boot framework and find answers to the following common questions.

[What is Spring Boot](#)

<!-- [how is Spring Boot different from Spring framework](#) -->


<!-- [What's the difference between Spring Boot and Spring MVC](#) -->

[What is Spring Boot Initializer](#)

[What are Spring boot starters](#)

[How to run a Spring boot application]

[What are Spring boot embeded servers and how to use an external server]

[What is Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/2.2.0.M3/reference/html/production-ready-features.html)

[Why should you choose spring boot?](#)

<!--more-->
<hr>

## What is Spring Boot?

<hr>

Spring Boot is a framwork or rather a tool built on top of spring framework which enables to quickly bootstrap a Spring application from scratch. So it's more like you take a short cut to create a Spring application.

In other words, Spring Boot is an extention of spring framework, intended to simplify and accelerate the development of enterprise applications 
You can set up a spring application using Spring Boot (without having to write a single line of xml or any configuration what so ever) to the point where it is ready to be deployed and run in a matter of minutes :joy:. So it spares the developers more time to focus on implementing the application logic rather than project set up and configuration.

How is it possible? Well, Spring Boot starters and Auto configuration makes the project set up so quick and easy that you only have to know which kind of application that you want create. For example if you tell the spring initializer that you want to create a web application, it will create the build file with all the required dependencies and the project folder structure along with a sample applicaiton class which you can just run.

But this doesn't mean that you are confined to what has been chosen or configured by the framework for you. You can customize whatever is needed according to your preference or requirement.

So starters and auto configuration speeds up the project set up and eleminates configuration but what makes it production ready?
It's the Spring Boot Actuator, which let's you monitor and interact with the applicaiton once it's deployed. Actuator can also be configured to support CORS.

Oh by the way, Spring Boot also embeds a server, such as TOMCAT or Reactor Netty depending on the kind of application that you create, so You can bundle up your web application as a jar file and just run it without having to have a server. We'll look at embeded servers and how to deploy to an external server in a little while.



embeded servers
no xml
just run

"The main goal of Spring Boot is to simplify and accelerate the development process of enterprise applications by reducing the boilerplate code which is handled by the framework. Some of the key components of Spring Boot are:

Spring Boot Starter - makes a combination of related dependencies into a single dependency. For example, a common dependency used on Spring projects is spring-boot-starter-web. This dependency is a parent of other dependencies such as spring-boot-starter, spring-web, spring-webmvc, and spring-boot-starter-tomcat. So, with Spring Boot Starter we can avoid implementation of too many dependencies.

Spring Boot Auto-configuration - automatically takes care of our XML Configurations. For example, when developing Spring MVC applications, we had to define a bunch of configurations such as views and view resolver. With this feature, we don’t need to worry about those configurations because of Spring Boot Auto-configuration.

Spring Boot CLI - is a software that is used for running and testing Spring Boot applications. When using Spring Boot CLI to run applications, internally are included Spring Boot Starter and Spring Boot Auto-configuration

Spring Boot Actuator - is a feature that is used for internal inspection for our application at runtime. One of the features is Application Metrics which checks memory usage, garbage collection, requests etc.
"


If you've ever set up a spring application in the past, you would know the pain! How much configuration that has to be done. Well, Spring Boot kind of makes a spring application developer's life easier. 
Spring Boot still uses Spring framework under the hood, but almost all of the configuration is done for you if you wish.

Whether you use spring boot or spring framework, you would still create a spring application at the end. The differences are in the process. how fast and how easy things can get during the developement.