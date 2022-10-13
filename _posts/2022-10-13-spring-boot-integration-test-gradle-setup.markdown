---

layout: post
comments: true

aside: true
title:  "Spring Boot integration tests setup with Gradle"
date:   2022-10-13
updated-date: 2022-10-13
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "How to setup seperate integration tests with Gradle"
excerpt_separator: <!--more-->

cover-image:
    url: /assets/img/gradle-int/thumb.svg
    alt: Spring Boot integration tests setup with Gradle
    title: Spring Boot integration tests setup with Gradle

images: 
  - url: /assets/img/gradle-int/src.PNG
    alt: Source folder structure
    title: Source folder structure
    max-width: 250px
---

**Why you MUST separate integration tests from unit tests.**

Integration tests take way longer to run while unit tests finish in seconds. So, it is the best practice to separate them.

### Gradle recommends the same as well.

> It’s very common that a project defines and executes different types of tests e.g. unit tests, integration tests, functional tests or smoke tests. Optimally, the test source code for each test type should be stored in dedicated source directories. Separated test source code has a positive impact on maintainability and separation of concerns as you can run test types independent from each other.
> --- [Organizing Gradle Projects](https://docs.gradle.org/current/userguide/organizing_gradle_projects.html){:target="_blank"}

<br>

In this post, I explain how to set up separate integration tests with Gradle.

<!--more-->

All integration tests in this project reside in the `integration-test` folder.

Following is my source folder structure.

{% assign image = page.images[0] %}
{% include image.html image=image %}

Gradle does not take the `integration-test` folder as a source by default. To be able to compile and run the integration tests that reside in this folder, we need to add a few lines/sections to the `build.gradle` file.

## **Following are the steps to prepare the build.gradle file to run integration tests.**

 1. Add a new source set.
 2. Add a task to run integration tests.
 3. Add required configurations.

First, Let's look at how to add a new source set to the build file.

### **Add a source set**

All you need to do is to add the following lines to the build file.

```
sourceSets {
    integration_test {
        java {
            compileClasspath += main.output + test.output
            runtimeClasspath += main.output + test.output
        }
    }
}
```
{: .language-groovy}

The second line `integration_test {` should match the folder name or else you should declare the folder name below that. For example, if you have all the integration tests in a folder named `integrationTest`, then you should define the sourceSet with the same name.
```
sourceSets {
    integrationTest {
        java {
            compileClasspath += main.output + test.output
            runtimeClasspath += main.output + test.output
        }
    }
}
```
{: .language-groovy}

Otherwise, if you want to have a different name there, you give the folder name in `srcDirs` the sourceSet. In the following example, the folder name is `integration_test` and the sourceSet is defined as `intTest`.

```
sourceSets {
    intTest {
        java {
            srcDirs("src/integration_test")

            compileClasspath += main.output + test.output
            runtimeClasspath += main.output + test.output
        }
    }
}
```
{: .language-groovy}

### **Add a task to run the integration tests**

This will allow us to run integration tests separately.

```
task integrationTest(type: Test) {
    description = "Run integration tests"
    group = "verification"
    testClassesDirs = sourceSets.integration_test.output.classesDirs
    classpath = sourceSets.integration_test.runtimeClasspath
}

```
{: .language-groovy}


### **Configure Dependencies for the integration tests**

The project already uses JUnit as the test framework so, adding the following configuration will reuse the existing test framework dependency for integration tests.

```

configurations {
    integration_testImplementation.extendsFrom(testImplementation)
    integration_testRuntimeOnly.extendsFrom(testRuntimeOnly)
}

```
{: .language-groovy}

That's all you have to do.

### **Run the Integration test task**

Now all you have to do is to run the task by executing the following command.

`.\gradlew integrationTest `

## **The final `build.gradle` file**

```
plugins {
    
    id 'java'
    id 'idea'
    id 'war'

    id 'org.springframework.boot' version '2.1.8.RELEASE'
    id 'io.spring.dependency-management' version '1.0.8.RELEASE'
}

war{
    enabled = true
}

bootWar{
    classifier = 'boot'
}

sourceSets {
    integration_test {
        java {
            compileClasspath += main.output + test.output
            runtimeClasspath += main.output + test.output
        }
    }
}

repositories {
    mavenCentral()
}

group = 'com.comment'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = 1.8

configurations {
    integration_testImplementation.extendsFrom(testImplementation)
    integration_testRuntimeOnly.extendsFrom(testRuntimeOnly)
}

dependencies {

    
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'javax.inject:javax.inject:1'
    
    providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
    
    runtimeOnly 'com.h2database:h2'
    runtimeOnly 'mysql:mysql-connector-java'

    testImplementation 'org.springframework.boot:spring-boot-starter-test'

}

task integration_test(type: Test) {
    description = "Run integration tests"
    group = "verification"
    testClassesDirs = sourceSets.integration_test.output.classesDirs
    classpath = sourceSets.integration_test.runtimeClasspath
}

```
{: .language-groovy}

Please find the complete source code of this project @ <https://github.com/JavaCodeHouse/Integration-tests-gradle/tree/main>{:target="_blank" .url}

