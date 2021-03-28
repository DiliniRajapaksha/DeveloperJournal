---

layout: lesson
comments: true

title:  "REST API with Spring Boot | Lesson 3 | Designing the REST API"
date:   2021-03-26
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Designing the REST API"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/4OqQtCRb2r8
    image:
        url: /assets/img/spring-boot-course/Lesson 3 - Design.png
        alt: 'Lesson 3'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson 3 - Design.png
    alt: Design
    title: Design

images: 
  - url: /assets/img/spring-boot-course/Application-architecture.jpeg
    alt: Spring Boot Application architecture
    title: Spring Boot Application architecture

---



<hr>

## REST stands for REpresentational State Transfer.

> REST-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.
> ---  [Wikipedia contributors. (2021, March 23). Representational state transfer. In Wikipedia, The Free Encyclopedia. Retrieved 12:51, March 26, 2021](https://en.wikipedia.org/w/index.php?title=Representational_state_transfer&oldid=1013819612)

Simplifying further, a REST API communicates with clients in terms of resources on which a client could perform operations such as **Read or Retrieve, Create, Update and Delete.**
{: .border-box}

<hr>

# REST API Design principles

<hr>


## 1 | Resources are nouns

What is a **Resource**?
A Resource could be anything that we expose to our client through the REST API.

Following are some examples,

	customer

	product

	quote

	price

	order

	comment

These are all **nouns**, obviously, but it is important to remember that when designing the URLs which we'll look in to next.

Following are some examples of resource URLs.

	example.com/products

	stackoverflow.com/questions

what we don't want to do with urls is to add verbs infront of the resource such as,

example.com/getproducts <i class="fa fa-times" aria-hidden="true"></i> 

stackoverflow.com/listquestions <i class="fa fa-times" aria-hidden="true"></i> 

This is not how REST compliant URLs are built.

## 2 | Always use plural nouns for resources in the URL

the same examples we saw earlier, **products** instead of product and **questions** instead of question

## 3 | Appropriate use of HTTP methods

A REST compliant web service has a predefined set of **stateless operations**, and those are the HTTP methods.

|---
| HTTP Method | Usage in REST API |
|-:|:-|
|GET | Retrieve a resource |
|POST|Save or Create a resource |
|PUT |Update or Edit a resource |
|DELETE|Delete a resource |
{: .table}

## 4 | Appropriate Use of HTTP status codes

You can find all the HTTP status codes and what they mean on the following page.
<https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>

#### Most commonly used HTTP Status codes

|---
| HTTP Status code | Meaning |
|-:|:-|
|200 |OK
|201| Created|
|204| No content|
|400| Bad request|
|401| Unauthorised|
|404| Not found|
{: .table}

**200** codes mean that the request was processed without any issues.

**400** codes mean some client error.

## 5 | HATEOAS

HATEOAS stands for Hypermedia As The Engin Of Application 

Simply means to use links for navigating the API.

<hr>

# API Design 

<hr>

### Comments API design

If the resource was independent, the URLs would look like the following,

|---
| HTTP Method | URL | Description
|:-|:-|:-|
|GET |/comments | Return a list of all comments|
|GET |/comments/{id} |Return a single comment of which the id is {id} |
|POST |/comments| Create or save a new comment|
|PUT |/comments/{id}|  Update a single comment of which the id is {id}|
|DELETE |/comments/{id} |Delete a single comment of which the id is {id}|
{: .table}

But in this case, 'comment' is more of a sub-resource, because a comment belongs to a post.

You can handle this in different ways but it is a matter of personal preference, or if you are working in a team, you could discuss and decide which approach to use.

So, following is how I designed the URLs.

|---
| HTTP Method | URL | Description
|:-|:-|:-|
|GET |/posts/{post-id}/comments | Return a list of all comments|
|POST |/posts/{post-id}/comments| Create or save a new comment|
|DELETE |/comments/{id} |Delete a single comment of which the id is {id}|
{: .table}


I'm not allowing comment editing so PUT method will not be used.

<hr>

# Spring Boot Application architecture

<hr>

The application code is organised into three layers.

<div class="img-md">
	{% assign image = page.images[0] %}
  	{% include image.html image=image %}
</div>


|:-|:-|:-|
|Repository|This is for exchanging data with the database, i.e. it consists of all the repository interfaces which the service classes would use to access the database.|
|Service| Holds the business logic|
|Controller|holds the API classes which would serve the incoming requests|
{: .table}



## Next

### Lesson 4: Endpoint implementation to retrieve comments - part 1 (The Controller) | Coming soon

