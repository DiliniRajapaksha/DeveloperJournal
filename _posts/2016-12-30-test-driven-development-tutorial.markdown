---
layout: post
comments: true

title:  "Get started with Test Driven Development (A beginner's guide)"
date:   2016-12-30 13:33:41 +1100
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Wondering what Test Driven Development looks like? Then this is for you. Why not give TDD a try and see how you like it?"
excerpt_separator: <!--more-->
images: 
  - url: /assets/img/tdd/TDD_1.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration

  - url: /assets/img/tdd/tdd_hello_world_test.gif
    alt: Test Driven Development Hello world example - write a test
    title: Test Driven Development Hello world example - write a test

  - url: /assets/img/tdd/tdd_hello_world_code.gif
    alt: Test Driven Development Hello world example - implement logic
    title: Test Driven Development Hello world example - implement logic

  - url: /assets/img/tdd/tdd_hello_world_refactor.gif
    alt: Test Driven Development Hello world example - refactor
    title: Test Driven Development Hello world example - refactor

redirect_from:
  - /tdd-tutorial
 
---
<div class="center first-image">

{% assign image = page.images[0] %}
{% include image.html image=image styleClass="first-image shadow" id="main-image" %}

<p id="description">{{page.description}}</p>

</div>

## So what is TDD?

Can you actually write a test before writing a single line of implementation logic? How do you know what method, class, or interface will contain the method under test? Sounds a bit odd...
That's exactly how I felt when I first read about TDD. 


> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. 
>
>--- [Test-driven development. (2016, November 20). In Wikipedia, The Free Encyclopedia. Retrieved 23:45, November 20, 2016](https://en.wikipedia.org/w/index.php?title=Test-driven_development&oldid=750634597)

But once I got the hang of it I realised, that's the whole point! It guides you through the design.

TDD concept was introduced or developed by Kent Beck and in his book Test Driven Development: By Example he explains the pains of traditional development process and how adopting test driven development helps. And also the foundation and key concepts are explained with lots of code samples.

<hr>

## LETS TEST THE WATERS WITH A HELLO WORLD IN TDD

<hr> 

All that is great! But how do you practice TDD in Java development?
Well, I started by applying it to a ‘hello world’. Too trivial, I know, but I like it to be as simple as possible.

Requirement: I want to print 'hello world'

##### 1 | Writing the test

We think of the outcome first, and write an assert to test if we get what we want. In this case, we want the string 'hello world'.

<div class="code-border gif">
{% assign image = page.images[1] %}
{% include image.html image=image %}
</div>

##### 2 | Writing the minimum code in order to pass the test

<div class="code-border">
{% assign image = page.images[2] %}
{% include image.html image=image %}
</div>

##### 3 | Refactor both the test and the implementation

<div class="code-border">
{% assign image = page.images[3] %}
{% include image.html image=image %}
</div>

It’s that simple. So what’s keeping you from practicing TDD? Let’s get started.

For the majority of us who are so used to writing the method or function first and writing the unit tests later or may be skipping it altogether, it may feel like swimming upstream, but like anything, a bit of practice will make it a lot easier and natural.

Following are a few things that motivated me and planted the foundation of TDD in myself.

- Test Driven Development: By Example" by Kent Beck - Reading this book, set my mind up for it and it really extracts the essence of test driven development.
- Writing great unit tests i.e. simple, understandable, and maintainable unit tests.
- TDD Kata - Small practice exercises that help you master it.


<hr>

## QUALITY MATTERS

<hr> 

Yes, the quality of unit tests does matter as much as the quality of production code.
 
##### Why it's so important to write good unit tests?

If unit tests lack quality (i.e. if the tests are not easily understandable by a person other than the one who wrote it,
or if they inter depend on other tests causing multiple tests to fail if one test is broken,
or if unit test suit take ages to run, or etc...) maintaining those unit tests would become a nightmare in the long run and would ultimately lead to ignoring all the tests one by one as they fail. Don't believe me? Then you may want to read this [open letter from an ignored test](https://dzone.com/articles/open-letter-from-an-ignored-test){:target="_blank"}

##### Some qualities of a great unit test

- Each unit test should be able to run independent of other tests.
- Each test should test just one thing (single behavior, method, or function)
- All external dependencies should be mocked.
- The assumptions for each test should be clear and defined within the test method.
- name of the test method should be meaningful.
- Unit tests should be fast, so that it could be run as often as required.

<hr>

## TDD KATA - PRACTICE MAKES PERFECT

<hr> 


Like anything, the key to TDD is practice. But how do you practice? TDD KATAs to the rescue.

KATA has it's roots in Japan, and it means a detailed or defined set of movements to be practiced over and over again. Hope it makes sense :)

TDD Kata is a tiny bit of coding that you could repeat over and over again, not a new one every day but the same coding exercise until you get sick of it. So, head over to [this repository](https://github.com/mwhelan/Katas){:target="_blank"} where you can find a list of Katas to practice and start now.


Please leave a comment and let me know if you liked it!