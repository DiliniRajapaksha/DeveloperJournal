---
layout: post
comments: true

title:  "How to Mock REST API with SOAP UI (Step by step guide)"
date:   2017-11-15 
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "It's super quick and easy to mock or simulate any REST api with SOAP UI and this post shows you how to do it with step by step instructions and screen shots."
excerpt_separator: <!--more-->
images: 
  - url: /assets/img/rest-mock/rest-mock.png
    alt: Mock Rest APIs with Soap UI
    title: Mock Rest APIs with Soap UI

  - url: /assets/img/rest-mock/001.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/002.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/003.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/004.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/005.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/006.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/007.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/008.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/009.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/010.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/011.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/012.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/013.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/014.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/015.jpg
    alt: Create Rest project
    title: Create Rest project
  
  - url: /assets/img/rest-mock/016.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/100.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/200.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/201.jpg
    alt: Create Rest project
    title: Create Rest project

  - url: /assets/img/rest-mock/300.jpg
    alt: Create Rest project
    title: Create Rest project

redirect_from:
  - /mock-rest-apis-soapui

aside: true
content-upgrade:
    title: SOAP UI PROJECT
    text: Download the example Soap UI Project for this post.
    img: /assets/img/download-side.png
    mailmunch-href: mailmunch-pop-743366
    
---

<hr>

## Mocking your REST APIs enables you to stay productive while the API is being implemented. 
## Mocks could be used for testing and developing the front end even when the back end is not available.

<hr> 

**Soap UI for simulating a Rest API???** Well, it wasn't even the last thing that came to my mind when one of my former colleagues asked me if I could quickly create a mock up for a REST API for the application he was testing because the API was down at the moment.

I thought it could be done in no time with Postman. I had quite a bit of experience with Postman, testing REST APIs, but soon realized it wasn't quite as straightforward as I thought.
Then I had a quick look at some other tools available for the purpose, some were way too complicated to be bothered for such a temporary quick fix and others were mostly hosted online. Couldn't find much luck with any thing so far for my purpose and that's when a simple google search directed me to soap ui. I already had it installed and am quite good at it, testing and mocking soap web services, so I decided to give it a go. To my surprise, it's not only easy and fast but also quite powerful in simulating REST APIs. Following are some of the things I tried and step by step instructions on how to.

- [Creating a simple mock](#simple-mock) - Step by step instructions on how to simulate a REST API.
- [Mocking for resource paths with variables](#resource-path-variables) - How Soap UI works for path variables.
- [Multiple mock responses depending on request](#multiple-responses) - How to use the script dispatcher to match a response based on the request.


Install Soap UI if you don't have already, and following are the steps after that.

<hr>
### Creating a simple mock.
{: #simple-mock}
<hr>

#### 1. Create a new REST project in Soap UI following the screens below. 


**Click the REST button on the tool bar (circled in red).**
<div class="screen-shot">
 {% assign image = page.images[1] %}
{% include image.html image=image %}
</div>

**Give an appropriate URL. I have provided `http://localhost:8080/test`. You can change these later.**
<div class="screen-shot">
{% assign image = page.images[2] %}
{% include image.html image=image %}
</div>

**Following is the new project that was just created ([REST Project 2](#mailmunch-pop-743366))**
<div class="screen-shot">
{% assign image = page.images[3] %}
{% include image.html image=image %}
</div>


#### 2. Create a Mock for the REST project

**Right click on the project and select *New REST MockService* from the menu.**
<div class="screen-shot">
{% assign image = page.images[4] %}
{% include image.html image=image %}
</div>

**Give an appropriate name for the MockService**
<div class="screen-shot">
{% assign image = page.images[5] %}
{% include image.html image=image %}
</div>

**Right click on the Mock Service and select *Add new mock action* from the menu.**
<div class="screen-shot">
{% assign image = page.images[6] %}
{% include image.html image=image %}
</div>

**Select the HTTP method and give the resource path, it can be anything. I have selected `GET` method and my resource path is `test`.**
<div class="screen-shot">
{% assign image = page.images[7] %}
{% include image.html image=image %}
</div>

<div class="screen-shot">
{% assign image = page.images[8] %}
{% include image.html image=image %}
</div>


#### 3. Add a mock response  

**Right click on the action and select *New MockResponse* from the menu.**
<div class="screen-shot">
{% assign image = page.images[9] %}
{% include image.html image=image %}
</div>

**Give an appropriate name to the mock response.**
<div class="screen-shot">
{% assign image = page.images[10] %}
{% include image.html image=image %}
</div>

**Select the response content type (i.e. xml, json, text, etc...) and type in the mock response**
<div class="screen-shot">
{% assign image = page.images[11] %}
{% include image.html image=image %}
</div>

#### 4. Start the mock service


**Right click on the MockService and select Show REST MockService Editor.**
<div class="screen-shot">
{% assign image = page.images[12] %}
{% include image.html image=image %}
</div>

**Click the green play button on the MockService Editor (circled in red), and the Mock service will start.**
<div class="screen-shot">
{% assign image = page.images[13] %}
{% include image.html image=image %}
</div>

<div class="screen-shot">
{% assign image = page.images[14] %}
{% include image.html image=image %}
</div>

<div>
  {% include content-upgrade-inline.html %}  
</div>

#### 5. Test it out!


**Send a request using the REST Project by clicking the green play button on the request.**
<div class="screen-shot">
{% assign image = page.images[15] %}
{% include image.html image=image %}
</div>


**The mock service can also be called using a browser**
<div class="screen-shot">
{% assign image = page.images[16] %}
{% include image.html image=image %}
</div>


<hr>
### Mocking for resource path with variables.
{: #resource-path-variables}
<hr>

Most REST URLs contain variables in the resource path, like https://example.com/users/679822 which are basically ids or names which change depending on the request. If you are wondering how to handle these, the good news is, it is already taken care of. If we just use up to `users` in the resource path of the mock, whatever comes after it in the request url doesn't really matter. This behavior is demonstrated in REST Project 3 (You can grab these project files by [clicking here](#mailmunch-pop-743366), and import in to Soap UI)

<div class="screen-shot">
{% assign image = page.images[17] %}
{% include image.html image=image %}
</div>

<hr>
### Multiple mock responses
{: #multiple-responses}
<hr>

Want to work with multiple responses for a single path? There are two options available in Soap UI.

### 1. Sequence

This is easy, create as many responses as you like for the mock action. The default dispatch method is sequence.

Open up the mock action editor by double clicking on the mock action or by right click on the mock action and selecting *Show Mock Action Editor*. Add as many responses as you want.

<div class="screen-shot">
{% assign image = page.images[18] %}
{% include image.html image=image %}
</div>


The HTTP status code can also be set to preferred value in the responses. In the example below (REST Project 4) I have created 3 mock responses and one of them is an error response which returns http status 500.

<div class="screen-shot">
{% assign image = page.images[19] %}
{% include image.html image=image %}
</div>

##### See it in action

<video id="sequence-video" class="screen-shot" controls="controls" width="800" height="600" autoplay="true" 
       name="Multiple responses in sequence" src="/assets/img/rest-mock/202.mov"></video>


### 2. Script

When you want different responses depending on the request (request path or a value in the request) script option can be used.

1. Create multiple responses.
2. Select the script option from the dispatch drop-down for the mock action. 
3. Then provide the script, following is the script I've used.

~~~
//Following script grabs the number in the request url and appends it to the name of the response.

def requestPath = mockRequest.getPath()
log.info "Path: "+ requestPath

def id = requestPath.tokenize('/')[-1] //the id of the user comes last in the request url (eg: http://localhost:8080/user/1)

return "user"+id //this will return the response with the name 'user{id}' eg: user1

~~~
{: .language-groovy}

4. Set a default response in case no matches found for the incoming request.

<div class="screen-shot">
{% assign image = page.images[20] %}
{% include image.html image=image %}
</div>

##### See it in action

<video id="script-video" class="screen-shot" controls="controls" width="800" height="600" autoplay="true" 
       name="Multiple responses in sequence" src="/assets/img/rest-mock/301.mov"></video>

That's all I have come across so far with Mocking REST APIs using Soap UI.

<div class="margin-bt-2">
  {% include content-upgrade-inline.html %}  
</div>


#### Which tools have you used for simulating REST APIs? Any suggestions? I would love to hear from you, so please leave a comment below. 

Leave your email address below so that I can send you the project files used in this post, which you can import to Soap UI.





