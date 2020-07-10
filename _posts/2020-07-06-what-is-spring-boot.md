---
layout: post
comments: true

aside: true
title:  "What is Spring Boot"
date:   2020-07-06
updated-date: 2020-07-06
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Spring Boot is a framework or rather a tool built on top of spring framework which enables you to quickly bootstrap a Spring application from scratch."
excerpt_separator: <!--more-->

images: 
  - url: /assets/img/spring-boot/what-is-spring-boot.png
    alt: What is Spring Boot
    title: What is Spring Boot

cover-image: 
    url: /assets/img/spring-boot/what-is-spring-boot.png
    alt: What is Spring Boot
    title: What is Spring Boot
---


If you've ever set up a spring application in the past, you would know the pain!
How much configuration that has to be done.  :sweat:

Well, Spring Boot makes the developer's life easier. :joy:

Spring Boot still uses the Spring framework under the hood, but almost all of the configuration is done for you if you wish.

Whether you use Spring Boot or Spring framework, you would still create a Spring application at the end. The differences are in the process. How fast and how easy things can get during development.

So in this post let's take a look at the Spring Boot framework.

<!--more-->

**Spring Boot is a framework which helps create standalone Spring applications that are production-grade. 
It's built on top of the Spring framework and takes an opinionated view of the Spring platform to minimize the configuration required by a typical Spring application.
This makes it fast and easy to get started with.**

**Spring Boot is a framework or rather a tool built on top of spring framework which enables you to quickly bootstrap a Spring application from scratch.**

So it's more like you take a short cut to create a Spring application.

In other words, Spring Boot is an extension of the Spring framework, intended to simplify and accelerate the development of enterprise applications.

You can set up a spring application using Spring Boot (without having to write a single line of XML or any configuration what so ever) to the point where it is ready to be deployed and run in a matter of minutes :joy:. So it spares the developers more time to focus on implementing the application logic rather than project set up and configuration.

How is it possible? 

Well, **Spring Boot starters** and **Autoconfiguration** makes the project set up so quick and easy that you only have to know which kind of application you want to create. 

For example, if you tell the [Spring Initializr](#spring-initilizr) that you want to create a web application, it will create the build file with all the required dependencies and the project folder structure along with a sample application class which you can just run.

But this doesn't mean that you are confined to what has been chosen or configured by the framework for you. You can customize whatever is needed according to your preference or requirement.

So starters and auto-configuration speed up the project set up and eliminate configuration but what makes it production-ready?

It's the **Spring Boot Actuator**, which lets you monitor and interact with the application once it's deployed. The Actuator can also be configured to support CORS.

Oh, by the way, Spring Boot also embeds a server, such as TOMCAT or Reactor Netty depending on the kind of application that you create, so You can bundle up your web application as a jar file and just run it without having to have a server.


<hr>

## Want to get started with Spring Boot?
{: .center}

Check out the following course. <i class="fa fa-hand-o-down" aria-hidden="true"></i>
{: .center}

<div class="maxw-700 center">
    <div class="mg-tp-1 video-container center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TtQcdMr-MPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>  
</div>

