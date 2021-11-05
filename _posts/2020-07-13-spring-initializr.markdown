---
layout: post
comments: true

aside: true
title:  "Spring Initializr Tutorial"
date:   2020-07-13
updated-date: 2020-07-13
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "What  is Spring Initializr and how to use it to create a Spring Boot Project"
excerpt_separator: <!--more-->
name: spring-initializr

images: 
  - url: /assets/img/spring-boot/Spring initializr/how to use spring initializr.png
    alt: how to use spring initializr
    title: how to use spring initializr
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr website.jpg
    alt: Spring Initializr website
    title: Spring Initializr website
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr - select build tool.jpg
    alt: Spring Initializr - select build tool
    title: Spring Initializr - select build tool
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-defaults.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-addDependencies.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-Dependencies.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-Dependencies-1.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-Dependencies-2.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-Dependencies-3.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/Spring Initializr-Dependencies-4.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/project-contents.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/import.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults
  - url: /assets/img/spring-boot/Spring initializr/run.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults    
  - url: /assets/img/spring-boot/Spring initializr/test.jpg
    alt: Spring Initializr-defaults
    title: Spring Initializr-defaults   

cover-image: 
    url: /assets/img/spring-boot/Spring initializr/how to use spring initializr.png
    alt: how to use spring initializr
    title: how to use spring initializr

ads:
    - url: /courses/spring-boot/REST-API-with-Spring-Boot
      img: 
        url: /assets/img/spring-boot-course/thumb.jpg
        alt: Spring Boot Course
        title: Spring Boot Course

---

In this post, let's look at the Spring Initializr and how to use it.


<!--more-->

<hr>

# What is Spring Initializr?

<hr>

**Spring initializr is a [website](https://start.spring.io/){:target="_blank"} or web-based tool that can be used to set up a Spring Boot project.**

Of course, you can set up a Spring Boot project without using the Spring initializr, but the advantage of using the Spring initializr is that it speeds up the process and does most of the groundwork for you.

All you have to do is to go to [start.spring.io](https://start.spring.io/){:target="_blank"} and add the spring boot starter dependencies that you want, (eg: web, JPA and H2) and generate the project!

Spring initialzr will do the following:

- Creates the build file with all the required dependencies, plugins and also takes care of the versions.
- Creates the project structure or the folder structure for your project.

Now you can start implementing, and yes you can do any customizations to the build file or the project setup as much as you like.

<!-- Ezoic - incontent_5 - incontent_5 -->
<div id="ezoic-pub-ad-placeholder-113"> </div>
<!-- End Ezoic - incontent_5 - incontent_5 -->

<hr>

# How to use the Spring Initializr to set up a Spring Boot Project

<hr>

1. Go to the [Spring Initializr website](https://start.spring.io/){:target="_blank"}. Here's what it looks like at the moment. They change the look of the site quite often :sunglasses:

    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[1] %}
    {% include image.html image=image %}
    </div>


2. Select the build tool you want to use. Maven is selected by default.

    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[2] %}
    {% include image.html image=image %}
    </div>

3. Then you can select the **programming language** you use (Java is selected by default), the **Spring Boot version** you want to use (the latest release version is selected by default), the **project metadata** (you can keep these as it is and change later), the **packaging** of the project (i.e. either jar of war), and a specific **Java version** if you want (Java 8 is selected by default).

    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[3] %}
    {% include image.html image=image %}
    </div>

<!-- Ezoic - incontent_6 - incontent_6 -->
<div id="ezoic-pub-ad-placeholder-114"> </div>
<!-- End Ezoic - incontent_6 - incontent_6 -->

4. Add dependencies - Click on the Add dependencies button and a popup list of dependencies will appear.

    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[4] %}
    {% include image.html image=image %}
    </div>

    At the top you can search for dependencies you want.
    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[5] %}
    {% include image.html image=image %}
    </div>

    As you type in, a list of matching dependencies will appear down below. 
    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[6] %}
    {% include image.html image=image %}
    </div>

    For example, if I want to create a REST API, I would search for REST and the first dependency which appears is **Spring Web**. That's exactly what I want.
    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[7] %}
    {% include image.html image=image %}
    </div>

    You can select the one you want and press enter or click on it to add it to the project.
    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[8] %}
    {% include image.html image=image %}
    </div>

<!-- Ezoic - incontent_7 - incontent_7 -->
<div id="ezoic-pub-ad-placeholder-115"> </div>
<!-- End Ezoic - incontent_7 - incontent_7 -->

5. Generate Project - Click on the Generate button to download the zip file.

    <div class="screen-shot mg-bt-1">
    {% assign image = page.images[9] %}
    {% include image.html image=image %}
    </div>


<hr>

## Watch how it's done
{: .center}

Check out the video. <i class="fa fa-hand-o-down" aria-hidden="true"></i>
{: .center}

<div class="ezoic-video center">
    <div class="mg-tp-1 video-container center">
       <span id="ezoic-pub-video-placeholder-1"></span>
    </div>  
</div>

<!-- Ezoic - incontent_8 - incontent_8 -->
<div id="ezoic-pub-ad-placeholder-116"> </div>
<!-- End Ezoic - incontent_8 - incontent_8 -->

<hr>

# Spring Initializr generated Gradle project

<hr>

Here's the downloaded project file: [demo.zip](/assets/img/spring-boot/Spring initializr/demo.zip)

When you unzip, it contains the following.

<div class="screen-shot mg-bt-2 maxw-700">
{% assign image = page.images[10] %}
{% include image.html image=image %}
</div>

<!-- Ezoic - incontent_9 - incontent_9 -->
<div id="ezoic-pub-ad-placeholder-117"> </div>
<!-- End Ezoic - incontent_9 - incontent_9 -->

### The build file generated by the Spring Initializr

`build.gradle`

~~~ groovy
  
    plugins {
      id 'org.springframework.boot' version '2.3.1.RELEASE'
      id 'io.spring.dependency-management' version '1.0.9.RELEASE'
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
      testImplementation('org.springframework.boot:spring-boot-starter-test') {
        exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
      }
    }

    test {
      useJUnitPlatform()
    }

~~~

- Here you can see that the starter dependencies that we selected are added to the build file along with the spring-boot-starter-test dependency.

- Did you notice that there are no versions specified for any of the dependencies? :open_mouth:
  
  That's because the versions are handled by the Spring Boot plugin [`org.springframework.boot`](https://plugins.gradle.org/plugin/org.springframework.boot){:target="_blank"} which is available as a gradle community plugin in the [plugins portal](https://plugins.gradle.org/){:target="_blank"}
  
  We don't have to worry about versions and version compatibility of all the dependencies anymore! :relieved:

- There's another plugin [`io.spring.dependency-management`](https://plugins.gradle.org/plugin/io.spring.dependency-management){:target="_blank"} added by Spring Initialzr. It provides Maven-like dependency management functionality within Gradle.

  You can find more on the plugin [here](https://github.com/spring-gradle-plugins/dependency-management-plugin){:target="_blank"}.

<!-- Ezoic - incontent_10 - incontent_10 -->
<div id="ezoic-pub-ad-placeholder-118"> </div>
<!-- End Ezoic - incontent_10 - incontent_10 -->

<hr>

# How to import the Spring Initializr generated Gradle project to your IDE (Eclipse or IntelliJ)

<hr>

### How to import to Eclipse

1. Add the eclipse plugin to the build file.
   
   `id 'eclipse'`
   
   Now the build file will look like:
    ~~~ groovy
      
        plugins {
          id 'org.springframework.boot' version '2.3.1.RELEASE'
          id 'io.spring.dependency-management' version '1.0.9.RELEASE'
          id 'java'
          id 'eclipse'
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
          testImplementation('org.springframework.boot:spring-boot-starter-test') {
            exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
          }
        }

        test {
          useJUnitPlatform()
        }

    ~~~

2. Generate the eclipse configuration file using the command line.

    Go to your project directory in the command line and execute the following command.

     `./gradlew eclipse`

     **eclipse** is a task of the eclipse plugin which generates all eclipse configuration files.

3. Now you can import the project to eclipse as an existing project.

    <div class="screen-shot mg-bt-2 maxw-700">
    {% assign image = page.images[11] %}
    {% include image.html image=image %}
    </div>



### How to import to IntelliJ

This is too easy, you just have to import the `build.gradle` file via IntelliJ.

<!-- Ezoic - incontent_11 - incontent_11 -->
<div id="ezoic-pub-ad-placeholder-122"> </div>
<!-- End Ezoic - incontent_11 - incontent_11 -->

<hr>

# Run Spring Initializr generated project as a Spring Boot Application

<hr>

So, now you can verify the project set up by running it.

There's a sample application class added by the Spring Initializr, so we can just run it so that it can be started as a Spring Boot application.

There is also a sample test which we can run as well.

### How to run the Spring Boot application using Gradle in the command line

To run the application, simply go to your project directory in the command line and execute the following command.

     `./gradlew bootRun`

`bootRun` is a Gradle task available via the Spring Boot plugin.

  <div class="screen-shot mg-bt-2 maxw-700">
  {% assign image = page.images[12] %}
  {% include image.html image=image %}
  </div>

The application has started without any problem.

### How to run tests of the Spring Boot application using Gradle in the command line

So if you execute the `./gradlew test` command, you will be able to run the sample test.

  <div class="screen-shot mg-bt-2 maxw-700">
  {% assign image = page.images[13] %}
  {% include image.html image=image %}
  </div>

Now that you have a working project setup, you can get on with testing and implementation of your application. :tada:

<!-- Ezoic - incontent_12 - incontent_12 -->
<div id="ezoic-pub-ad-placeholder-123"> </div>
<!-- End Ezoic - incontent_12 - incontent_12 -->

<hr>

## Want To Get Started With Spring Boot?
{: .center}

Check out the FREE course. <i class="fa fa-hand-o-down" aria-hidden="true"></i>
{: .center}

<div class="center">
  <span id="ezoic-pub-video-placeholder-5"></span>
</div>
