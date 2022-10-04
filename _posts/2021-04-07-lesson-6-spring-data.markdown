---

layout: lesson
comments: true

title:  "Spring Data | The Repository"
date:   2021-04-07
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Endpoint implementation to retrieve comments - part 3 - The Repository | Spring Data"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/UAs8rCeDBZU
    image:
        url: /assets/img/thumb/spring-data.svg
        alt: 'spring-data'


cover-image: 
    url: /assets/img/thumb/spring-data.svg
    alt: Spring Data
    title: Spring Data

images: 
  - url: /assets/img/spring-boot-course/repository/repository.001.jpeg
    alt: Spring Data 
    title: Spring Data 
  - url: /assets/img/spring-boot-course/repository/repository.002.jpeg
    alt: Spring Data 
    title: Spring Data 
  - url: /assets/img/spring-boot-course/repository/repository.003.jpeg
    alt: Spring Data 
    title: Spring Data 
  - url: /assets/img/spring-boot-course/repository/repository.004.jpeg
    alt: Spring Data 
    title: Spring Data 

next-lesson:
    title: Lesson 7 - Integration testing - part 1
    url: lesson-7-integration-testing-with-spring-boot

---

<span id="ezoic-pub-video-placeholder-3"></span>

<hr>

# The Repository Layer of a Spring Boot Application

<hr>

The service layer in the middle holds the business logic, and it is also required to communicate with the repository layer to fulfil any data needs as well. The Repository layer of the application will in turn communicate with the database.

<div class="img-md">
	{% assign image = page.images[0] %}
  	{% include image.html image=image %}
</div>



In a typical application, The repository layer is where we write all the data access objects

<div class="img-md">
	{% assign image = page.images[1] %}
  	{% include image.html image=image %}
</div>

When using Spring Data, 

- There's no need to write data access objects.
- You can use any JPA provider.
- You also get automatic custom queries and manual custom queries.

<hr>

### How Spring Data works

There's a `comment` class in the application, and there's a `comment` table in the database.

Spring Data is going to do all the hard work getting the comment back and forth.

<div class="img-md">
	{% assign image = page.images[3] %}
  	{% include image.html image=image %}
</div>


<!-- Ezoic - incontent_7 - incontent_7 -->
<div id="ezoic-pub-ad-placeholder-115"> </div>
<!-- End Ezoic - incontent_7 - incontent_7 -->


<hr>

# CRUD Repository Interface

<hr>

You can create your Repository interface extending the CrudRepository interface which provides some basic crud operations.

### Following are all the methods available through the CrudRepository interface

- count()
- delete(T entity)
- deleteAll()
- deleteAll(Iterable<? extends T> entities)
- deleteById(ID id)
- existsById(ID id)
- findAll()
- findAllById(Iterable<ID> ids)
- findById(ID id)
- save(S entity)
- saveAll(Iterable\<S> entities)

<!-- Ezoic - incontent_8 - incontent_8 -->
<div id="ezoic-pub-ad-placeholder-116"> </div>
<!-- End Ezoic - incontent_8 - incontent_8 -->

	