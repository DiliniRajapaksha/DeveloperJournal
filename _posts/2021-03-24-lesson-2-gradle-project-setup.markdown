---

layout: post
comments: true

title:  "REST API with Spring Boot | Lesson 2"
date:   2021-03-24
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Set up the project with Gradle"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/6YJq9Vng074
    image:
        url: /assets/img/spring-boot-course/Lesson 2 - Gradle.png
        alt: 'Lesson 1'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson 2 - Gradle.png
    alt: spring initializr
    title: spring initializr

---

{% assign video = page.youtube %}
{% include youtube-video.html video=video %}

<hr class="gray">

You'll learn,

Set up the project using Gradle without Spring Initializr.

- Generate a java project using Gradle command line.

- Work on the build file to add the required plugins and dependencies.

- Discuss core Gradle plugins, community plugins and the Gradle plugins portal.

- Then generate the eclipse configuration files and import the project to eclipse.


<hr class="gray">

# Cammands

The Gradle command to generate the project

On Windows: `gradlew init --type java-library`

On Mac: `./gradlew init --type java-library`



The Gradle command to generate eclipse configuration files:

On Windows:  `gradlew eclipse`

On Mac: `./gradlew eclipse`

<hr class="gray">

# Links

Core Gradle plugins: <https://docs.gradle.org/current/userguide/plugin_reference.html>{:target="_blank"}

Build Init plugin - <https://docs.gradle.org/current/userguide/build_init_plugin.html>{:target="_blank"}

Java plugin - <https://docs.gradle.org/current/userguide/java_plugin.html>{:target="_blank"}

eclipse plugin - <https://docs.gradle.org/current/userguide/eclipse_plugin.html>{:target="_blank"}

idea plugin - <https://docs.gradle.org/current/userguide/idea_plugin.html>{:target="_blank"}

Gradle plugins portal:  <https://plugins.gradle.org/>{:target="_blank"}

Spring Boot plugin - <https://plugins.gradle.org/plugin/org.springframework.boot>{:target="_blank"}

Spring dependency management plugin - <https://plugins.gradle.org/plugin/io.spring.dependency-management>{:target="_blank"}

<hr class="gray">

## Next

### Lesson 3: Design (Coming up soon)

