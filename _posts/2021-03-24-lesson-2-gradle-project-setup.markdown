---

layout: lesson-video
comments: true

title:  "How To Set Up Spring Boot Project With Gradle"
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
    url: /assets/img/thumb/springboot-gradle.svg
    alt: spring initializr
    title: spring initializr

next-lesson:
    title: Lesson 3 - Designing the REST API
    url: lesson-3-design


---

<span id="ezoic-pub-video-placeholder-4"></span>

<hr class="gray">

You'll learn to,

- Set up the project using Gradle without Spring Initializr.

- Generate a java project using Gradle command line.

- Work on the build file to add the required plugins and dependencies.

- Discuss core Gradle plugins, community plugins and the Gradle plugins portal.

- Then generate the eclipse configuration files and import the project to eclipse.

<!-- Ezoic - under_first_paragraph - under_first_paragraph -->
<div id="ezoic-pub-ad-placeholder-124"> </div>
<!-- End Ezoic - under_first_paragraph - under_first_paragraph -->

<hr class="gray">

# Cammands

The Gradle command to generate the project

On Windows: `gradlew init --type java-library`

On Mac: `./gradlew init --type java-library`



The Gradle command to generate eclipse configuration files:

On Windows:  `gradlew eclipse`

On Mac: `./gradlew eclipse`

<!-- Ezoic - under_second_paragraph - under_second_paragraph -->
<div id="ezoic-pub-ad-placeholder-125"> </div>
<!-- End Ezoic - under_second_paragraph - under_second_paragraph -->

<hr class="gray">

# Links

Core Gradle plugins: <https://docs.gradle.org/current/userguide/plugin_reference.html>{:target="_blank" .url}

Build Init plugin - <https://docs.gradle.org/current/userguide/build_init_plugin.html>{:target="_blank" .url}

Java plugin - <https://docs.gradle.org/current/userguide/java_plugin.html>{:target="_blank" .url}

eclipse plugin - <https://docs.gradle.org/current/userguide/eclipse_plugin.html>{:target="_blank" .url}

idea plugin - <https://docs.gradle.org/current/userguide/idea_plugin.html>{:target="_blank" .url}

Gradle plugins portal:  <https://plugins.gradle.org/>{:target="_blank" .url}

Spring Boot plugin - <https://plugins.gradle.org/plugin/org.springframework.boot>{:target="_blank" .url}

Spring dependency management plugin - <https://plugins.gradle.org/plugin/io.spring.dependency-management>{:target="_blank" .url}





