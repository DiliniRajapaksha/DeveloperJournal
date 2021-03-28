---

layout: course-page
header-style: sp-bt-header bg-dark-gray
intro-style: bg-sp-bt
title-style: sp-bt-header
title-tag:  "Learn Spring Boot in 2 hours"
title-post-pre: "Learn"
title-post: "Spring Boot"
title-post-sub: "How to build a REST API with Spring Boot"
date:   2019-11-03
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: In this Spring Boot Crash Course I will teach you how to build a REST API with Spring Boot in just 2 hours.
 
excerpt_separator: <!--more-->

cover-image:
    url: /assets/img/spring-boot-course/thumb.jpg
    alt: Learn Spring Boot 
    title: The Spring Boot Course

youtube-videos:
    - url: https://youtu.be/pdX8BM9mi9E
      image:
          url: /assets/img/spring-boot-course/lesson1.png
          alt: 'Lesson 1'
    - url: https://youtu.be/6YJq9Vng074
      image:
          url: /assets/img/spring-boot-course/lesson2.png
          alt: 'Lesson 2'
    - url: https://youtu.be/4OqQtCRb2r8
      image:
          url: /assets/img/spring-boot-course/lesson3.png
          alt: 'Lesson 3'
    - url: https://youtu.be/nSu1wMXsPqY
      image:
          url: /assets/img/spring-boot-course/lesson8.png
          alt: 'Lesson 8'

---

{::options parse_block_html="true" /}

<div class="center">

This course consists of **18 video lessons (2 hrs)** organized into four modules. 

Throughout this course, we’ll build a **REST API** which would **save retrieve** and **delete** comments of blog posts.

##### **COURSE CONTENTS**
{: .mg-bt-0 .mg-tp-1}
</div>

<div class="verticle-container center-box mg-tp-1">
	
<div class="module">
	
### PROJECT SET UP
{: .module-title .center}

#### [Lesson 1: Set up the project using Spring Initializr]({% post_url 2021-03-23-lesson-1-spring-initializr %}){: .lesson-title-link}  [<i class="fa fa-youtube-play" aria-hidden="true"></i> Watch on Youtube!]({{ page.youtube-videos[0].url }}){:target="_blank"}{: .btn-sm-play}
{: .lesson-title}


<div class="arrow-down" />

<div class="lesson-content">

\- How to use the spring Initializr to create a project.

\- Spring starter dependencies.

\- Discuss the content i.e each and every line, of the generated build file. 

</div>



#### [Lesson 2: Set up the project using Gradle without Spring Initializr]({% post_url 2021-03-24-lesson-2-gradle-project-setup%}){: .lesson-title-link}  [<i class="fa fa-youtube-play" aria-hidden="true"></i> Watch on Youtube!]({{ page.youtube-videos[1].url }}){:target="_blank"}{: .btn-sm-play}
{: .lesson-title}

<div class="arrow-down" />


<div class="lesson-content">

\- Generate a java project using gradle command line.

\- Work on the build file to add the required plugins and dependencies.

\- Discuss core Gradle plugins, community plugins and the Gradle plugins portal.

</div>

Then generate the eclipse configuration files and import the project to eclipse.
{: .pd-1}

</div>

<div class="module">

### DESIGN
{: .module-title .center}

#### [Lesson 3: Design]({% post_url 2021-03-28-lesson-3-design%}){: .lesson-title-link}  [<i class="fa fa-youtube-play" aria-hidden="true"></i> Watch on Youtube!]({{ page.youtube-videos[2].url }}){:target="_blank"}{: .btn-sm-play}
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- What is REST

\- Basic REST API Design principles

\- Desiging the REST API

\- Architecture of a Spring Boot Project

</div>

</div>

<div class="module">

### Testing and implementation
{: .module-title .center}

This module consists of several lessons on **Unit Testing, Implementation** and also **Integration Testing** the API.
{: .pd-1}

#### Lesson 4: Endpoint implementation to retrieve comments - part 1 (The Controller)  <span> Coming Soon </span>{: .btn-sm-play-pink}
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

In this lesson, we implement a method to return all comments of a particular post, in a **test-first** manner.
{: .pd-1}

That means, as, in all of the implementations throughout the project, we **write unit tests before writing a single line of logic.**
{: .pd-1}
</div>

#### Lesson 5: Endpoint implementation to retrieve comments - part 2 (The Service)
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

In this lesson, we move the business logic to the service layer by refactoring the controller and unit tests.

</div>

#### Lesson 6: Endpoint implementation to retrieve comments - part 3 (The Repository)
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- Spring Data

\- How to use the repository interfaces

</div>

#### Lesson 7: Integration testing - part 1
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- MockMVC

\- Spring’s testing support and annotations

\- Request builders

\- Result matchers...

</div>

#### Lesson 8: Making a Spring Boot Application 
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">
This lesson is also a part of the free preview, so if you sign up for the free trial you could check this out.
{: .pd-1}

Here we discuss the spring boot annotations and then add all the required annotations to wire everything up and make the application work.
{: .pd-1}

</div>

#### Lesson 9: Spring Transaction handling
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- What does transactional mean in terms of executing a method?

\- Overview of how spring transaction management works.

\- @Transactional annotation and its settings.

\- How to apply transaction management with @Transactional annotation.

\- How readOnly applies to transactions.

\- Transaction configuration settings.

</div>


#### Lesson 10: Integration testing - part 2
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- Here we continue the integration testing

\- use JSONPath expressions to assert the response body.

\- Preload and clean up the database before and after a test using script files and annotations.

\- Return relevant response codes upon exceptions.

</div>

#### Lesson 11: Endpoint implementation to save a comment
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">
Unit tests and implementation of the endpoint for saving a comment.
{: .pd-1}
</div>

#### Lesson 12: Integration testing part 3
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">
Write some integration tests for saving the comment
{: .pd-1}
</div>

#### Lesson 13: End to end test
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- Run the application in eclipse 

\- Save a comment via postman

\- Retrieve the saved comment in the browser.

</div>

#### Lesson 14: Endpoint implementation to delete a comment
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">
Unit tests and implementation of the endpoint for deleting a comment.
Physical delete vs Logical delete.
{: .pd-1}
</div>

#### Lesson 15: Integration testing part 4
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">
Write some integration tests for deleting the comment
{: .pd-1}
</div>

</div>


<div class="module">

### Deployment
{: .module-title .center}

#### Lesson 16: Deployment
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- Various ways of running the application 

\- War deployment to an external server.

</div>

#### Lesson 17: External Database
{: .lesson-title}

<div class="arrow-down" />

<div class="lesson-content">

\- Connect to MySQL server.

\- How to use the embedded database for integration testing while using an external database for production.

</div>

</div>

</div>


<div class="border-box">
	
Each module will also contain text-based lessons on which you would find
Links to any external sites and references mentioned in video lessons. 

E.g:

\- The link to spring initializer website.

\- Gradle commands used in Command-line.

\- Other useful information

**You would also be able to download the completed project in the last module.**
</div>

<!-- 
# FREE LESSONS

<hr class="gray">

## Lesson 1: How to use the Spring Initializr {#spring-initializr}
{: .mg-tp-3 .mg-bt-1 .center}

{% assign video = page.youtube-videos[0] %}
{% include youtube-video.html video=video %}

## Lesson 2: Set up the project using Gradle without Spring Initializr {#gradle}
{: .mg-tp-3 .mg-bt-1 .center}

{% assign video = page.youtube-videos[1] %}
{% include youtube-video.html video=video %}


## Lesson 8: Making it a Spring Boot Application {#spring-boot}
{: .mg-tp-3 .mg-bt-1 .center}

{% assign video = page.youtube-videos[2] %}
{% include youtube-video.html video=video %} -->