---

layout: lesson
comments: true

title:  "How To Create Spring Boot Project With Spring Initializr"
date:   2021-03-23
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Set up the project using Spring Initializr"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/pdX8BM9mi9E
    image:
        url: /assets/img/thumb/springinitializr-setup.svg
        alt: 'Lesson 1'

cover-image: 
    url: /assets/img/thumb/springinitializr-setup.svg
    alt: spring initializr
    title: spring initializr


next-lesson:
    title: Lesson 2 - Set up the project using Gradle without Spring Initializr
    url: lesson-2-gradle-project-setup

---


<span id="ezoic-pub-video-placeholder-19"></span>


<hr class="gray">

You'll learn,

- How to use Spring Initializr to create a project.

- Spring starter dependencies.

- Discuss the content i.e each and every line, of the generated build file.

<!-- Ezoic - under_first_paragraph - under_first_paragraph -->
<div id="ezoic-pub-ad-placeholder-124"> </div>
<!-- End Ezoic - under_first_paragraph - under_first_paragraph -->


<hr>

# Project setup

<hr>

Let's take a look at project set up.
That is mainly creating the build file.
Often times dependencies could be tricky, there are so many external libraries and selecting versions that should be compatible with each other can be difficult at times.

But there's a one stop shop for all the dependency requirements of a Spring Boot project.
That's the [Spring Boot Starters](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using-boot-starter){:target="_blank"}.
All you have to do is select a few starter dependencies according the type of project and the starter  dependencies will take care of the rest.

You can find a list of Spring Boot Starters and a link to each of the build files [here]({% post_url 2020-07-06-what-is-spring-boot %}#spring-boot-starters){:target="_blank"}

So for example, if you are building a REST API or a web project, you would add the `spring-boot-starter-web` dependency to your project and if you take a look at the [build](https://github.com/spring-projects/spring-boot/blob/master/spring-boot-project/spring-boot-starters/spring-boot-starter-web/build.gradle){:target="_blank"} file, you can see all the other dependencies it includes. And if you want to use spring data jpa, you would add the spring-boot-starter-data-jpa dependency.

<!-- Ezoic - under_second_paragraph - under_second_paragraph -->
<div id="ezoic-pub-ad-placeholder-125"> </div>
<!-- End Ezoic - under_second_paragraph - under_second_paragraph -->

<hr>

# The Build File

<hr>

~~~
    plugins {
        id 'org.springframework.boot' version '2.4.4'
        id 'io.spring.dependency-management' version '1.0.11.RELEASE'
        id 'java'
    }

    group = 'com.example'
    version = '0.0.1-SNAPSHOT'
    sourceCompatibility = '1.8'

    repositories {
        mavenCentral()
    }

    dependencies {
        implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
        implementation 'org.springframework.boot:spring-boot-starter-web'
        runtimeOnly 'com.h2database:h2'
        testImplementation 'org.springframework.boot:spring-boot-starter-test'
    }

    test {
        useJUnitPlatform()
    }
~~~
{: .language-groovy}

<!-- Ezoic - incontent_5 - incontent_5 -->
<div id="ezoic-pub-ad-placeholder-113"> </div>
<!-- End Ezoic - incontent_5 - incontent_5 -->

<hr>

# Links

<hr>

Spring Initializer website: <https://start.spring.io>{:target="_blank"}

Spring boot starters: 

<https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#using-boot-starter>{:target="_blank" .url}

<https://github.com/spring-projects/spring-boot/tree/master/spring-boot-project/spring-boot-starters>{:target="_blank" .url}

<hr>

The Spring Initializr UI shown in the video above has been updated, if you want to see the latest, checkout this [Spring Initializr]({% post_url 2020-07-13-spring-initializr %}){:target="_blank"} tutorial 
{: .gray-box}




