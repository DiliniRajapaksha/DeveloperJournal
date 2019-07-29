---
layout: post2
comments: true
header-style: bg-dark-gray
intro-style: bg-dark-gray
title-tag:  "Test Driven Development - Java Example"
title-post: "TDD IN JAVA"
title-post-sub: "How it's done - for the Absolute Beginner"
date:   2016-12-30 13:33:41 +1100
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: In this post I show you how TDD is done with a Hello world Example in JAVA, step by step.
excerpt_separator: <!--more-->

cover-image:
    url: /assets/img/tdd/TDD_1.png
    alt: Test Driven Development Tutorial
    title: Test Driven Development Demo

images: 

  - url: /assets/img/tdd/tdd_illustration.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 250px

  - url: /assets/img/tdd/tdd-test.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 200px

  - url: /assets/img/tdd/tdd-impl.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 200px

  - url: /assets/img/tdd/tdd-rfct.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration


  - url: /assets/img/tdd/test-result-1.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration


  - url: /assets/img/tdd/test-result-2.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration


  - url: /assets/img/tdd/test-result-final.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration


  - url: /assets/img/tdd/demo.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 150px

  - url: /assets/img/tdd/quality.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 150px

  - url: /assets/img/tdd/practice.png
    alt: Test Driven Development illustration
    title: Test Driven Development illustration
    max-width: 150px

redirect_from:
  - /tdd-tutorial
 
---

{::options parse_block_html="true" /}


In this post, I'll show you how TDD is done, step by step with a simple example. 

So that you will,

  Know what TDD is.

  Get started with TDD within minutes! YES.

  Practise a little bit of TDD every day with TDD KATA!

So Let's get started.

<!--more-->

<div class="contents mg-bt-3">

### Contents

1. [What is Test Driven Development.](#what-is-tdd)
    - [How to write the test (before implementation)](#test)
    - [How to implement](#implementation)
    - [How to refactor](#refactoring)

2. [TDD Demo - Hello world in TDD.](#tdd-demo)
    - [Writing the TEST](#writing-the-test)
    - [IMPLEMENTATION](#implementation-1)
    - [REFACTORING](#refactor)

3. [Why is it so important to write quality tests?](#quality)

4. [How to practice a little bit of TDD every day?](#tdd-kata)

</div>

 
<div class="full-width bg-yellow pd-tp-3 pd-bt-3 mg-bt-3">

## WHAT IS TDD?
{: .center .bold .font-lg .white-text .title-sub #what-is-tdd}

<div class="def-box">
__Test driven development or TDD is a development process, where the following three basic steps are repeated until you achieve the desired result.__

1. First, you write a failing test.

2. Then write the minimum code to pass the test.

3. Refactor both test and logic.

</div>

</div>

Can you actually write a test before writing a single line of implementation logic? :open_mouth: 

How do you know what method, class, or interface will contain the logic? 

Sounds a bit odd...

That's exactly how I felt when I first read about TDD. 

But once I got the hang of it, I realised...

__That's the whole point! :stuck_out_tongue_winking_eye:__

__It guides you through the design.__

So don't worry, 

__In this post, I'll demonstrate each step with a simple example.__
{: .pd-bt-3}


<div class="bg-red full-width pd-tp-3 pd-bt-3 white-text mg-bt-3">

Step 1

### TEST
{: .bold}

<hr>



<div class="col-container font-md">

<div class="col-1">

The first step is to write a failing test.

For that, we must break down the requirements into tiny bite-size pieces.

Pick one of the requirements, and write a test to validate that behaviour.

Let's see how this is done.

</div>

<div class="visual col-2">
  {% assign image = page.images[1] %}
  {% include image.html image=image %}
</div>

</div>
</div>

__Example__
{: .pd-bt-1}

Requirement: I want a function that prints __'Hello World!'__.

This piece of requirement is so small that it need not be broken down further.

Now let's write a test to validate this behaviour.

So where should we start? :confused:

__Start with an `assert`.__

That's the easiest, and best in my experience.

There are so many `assert` methods in the JUnit framework.

Which one should I use here?

Well, I almost always use `assertThat`. 

<div class="border-box">

__WHY `assertThat()`?__

`assertThat` when combined with hamcrest matchers, can replace all others.

It is also a lot better than all other `assert` methods in the JUnit framework.

In this [JUnit4 Tutorial]({% post_url 2017-04-26-junit-tutorial %}), I explain the benefits and uses of `assertThat()` with examples.

</div>


`assertThat(actual, matcher);`

There are two parameters we need to pass into this method.

1. The first parameter is the '__actual__' or the return value from the method under test. 

    We don't have a method yet!

    So, we got to think backwards here.

    Normally what happens is, there is a class with a method in it. When we want to call the method, we create an object of that class and call the method on that object.

    ~~~
        
        Example example = new Example();

        example.method();

    ~~~
    {: .language-java}


    There's neither a class nor a method in this case. 

    Thinking backwards, I'll start with the method. Looking at the requirement, we are going to test whether the method returns the string 'Hello world!'.

    So, I'll name this method `getMessage()`. We can always change these names later.

    Now we need an object to call this method on.

    To create an object, there has to be a Type (a Class or an Interface). The class hasn't been created yet, but we sure can give it a name.

    I'll start with the object and name it greeting. 

    `greeting.getMessage()`

    So now the first parameter is all set, but we still got to create this object and initialize it to get this test compiling. 

    `Greeting greeting = new Greeting();`


2. The second parameter is a __matcher__, which is an expression, built of `org.hamcrest.Matcher`s, specifying allowed values.

    So the method I'm going to use here is `is` from hamcrest - `org.hamcrest.CoreMatchers` which returns the `Matcher`.

    The __expected__ value is the `String` "Hello world!", so I'll pass it into the `is()` method.

If you want to learn more about using hamcrest matchers, check out my [JUnit4 Tutorial]({% post_url 2017-04-26-junit-tutorial %}).
{: .gray-box}

Finally, the assert is ready.

`assertThat(greeting.getMessage(), is("Hello world!"));`

<div class="border-box">

There are a couple of things to note here:

1. To get this test to compile, we'll have to create a class and add the method `getMessage()` in it.
    
    __But make sure not to write anything more than what is needed to get the test compiling.__

2. We should make sure to run the test and see that it __fails__. 
      
      Because:

    - It rules out the possibility that the __new test will always pass because it is flawed.__
    
    - To make sure that the __new test does not pass without requiring new code__ (because the required behaviour already exists).

</div>

Here's the failing test:
{: .bold}

~~~

   public void test(){

      Greeting greeting = new Greeting();

      assertThat(greeting.getMessage(), is("Hello world!"));
   }


~~~
{: .language-java}


<div class="visual center pd-bt-3">
  {% assign image = page.images[4] %}
  {% include image.html styleClass="screen-shot" image=image  %}
</div>

<div class="bg-green full-width pd-tp-3 pd-bt-3 white-text mg-bt-3">

Step 2

### IMPLEMENTATION
{: .bold}

<hr>

<div class="col-container font-md">

<div class="col-1">

Write the minimum code to pass the test.

Run the test and see it pass!

</div>

<div class="visual col-2">
  {% assign image = page.images[2] %}
  {% include image.html image=image %}
</div>

</div>
</div>

As a result of Writing the test, and getting it to compile, we have the skeleton of the implementation.

Here's what we have so far:

~~~

public class Greeting {

  public Object getMessage() {
    // TODO Auto-generated method stub
    return null;
  }

}

~~~
{: .language-java}

The very minimum we have to do to pass the test is to return __"Hello world!"__ instead of null.

__Here's the implementation__

~~~

public class Greeting {

  public Object getMessage() {
    // TODO Auto-generated method stub
    return "Hello world!";
  }

}

~~~
{: .language-java}

It may look dodgy, ugly and you might be itching to do a little bit more here :stuck_out_tongue:. But be patient, we only want to get the test passing at this stage.
We will definitely refactor this in the next step.

__Run the TEST!__

<div class="visual center pd-bt-3">
  {% assign image = page.images[5] %}
  {% include image.html styleClass="screen-shot" image=image  %}
</div>

Now that we have a passing test, it's time for the next step.

<div class="bg-blue full-width pd-tp-3 pd-bt-3 white-text mg-bt-3 mg-tp-3">

Step 3

### REFACTORING
{: .bold}

<hr>

<div class="col-container font-md">

<div class="col-1">

Refactor the IMPLEMENTATION.

Refactor the TEST.

After each and every change, run the test to make sure it passes.

</div>

<div class="visual col-2">
  {% assign image = page.images[3] %}
  {% include image.html image=image %}
</div>

</div>
</div>


This step is as important as the two above. __Refactoring both implementation and test is crucial.__

Why should you care about the tests?

You'll see the answer later in the section [Quality Matters.](#quality)

### Refactoring the Implementation
{: .pd-tp-1}

The existing implementation definitely needs some dusting and refactoring.

So I'm going to do the following:

1. Remove the auto-generated comment.
2. Change the return value from `Object` to `String`.
3. Extract the String "Hello world" into a field.
4. Initialize the field in the constructor - this step is optional, actually, it would be better off without this. But I have included this just so we see that __refactoring the implementation may result in changes to the test as well__.

__Make sure to run the test after each change.__


<div class="purple-box mg-bt-3">

__The Implementation__
{: .center .white-text}

<div class="col-container">
<div class="col-1  bg-light-red">

__Before__
{: .center .pd-tp-1}

~~~

  public class Greeting {

    public Object getMessage() {
      // TODO Auto-generated method stub
      return "Hello world!";
    }

  }

~~~
{: .language-java .code}

</div>

<div class="col-2 bg-light-green">
__After__
{: .center .pd-tp-1}

~~~

  public class Greeting {

    private String message;

    public Greeting(String message) {
      this.message = message;
    }

    public String getMessage() {
      
      return message;
    }

  }

~~~
{: .language-java .code}
</div>
</div>
</div>


As a result of the above refactoring, the test has been changed as well.

<div class="purple-box pd-bt-3 mg-bt-3">

__The Test__
{: .center .white-text}

<div class="col-container">
<div class="col-1 bg-light-red">

__Before__
{: .center .pd-tp-1}

~~~

  @Test
  public void test(){

    Greeting greeting = new Greeting();

    assertThat(greeting.getMessage(), is("Hello world!"));
  }

~~~
{: .language-java .code}

</div>

<div class="col-2 bg-light-green">

__After__
{: .center .pd-tp-1}

~~~

  @Test
  public void test(){

    Greeting greeting = new Greeting("Hello world!");

    assertThat(greeting.getMessage(), is("Hello world!"));
  }

~~~
{: .language-java .code}

</div>
</div>
</div>


### Refactoring the Test

When it comes to refactoring TESTS, you got to turn your back on some of the BEST PRACTICES that you follow when you write production code. Because, 

__GOOD TEST CODE  !=  GOOD PRODUCTION CODE__
{: .center .gray-box .center-box}

You got to break some rules here. So, don't start refactoring your tests before you read these rules of thumb.

<div class="border-box center-box mg-tp-3 mg-bt-3">
__RULES OF THUMB__ :thumbsup:
{: .center}
For refatoring unit tests
{: .center}

<hr>

1. Magic numbers are actually GOOD.

2. Do REPEAT yourself (wherever it makes sense). 

3. Extra-long method names are OK.

4. Abstraction is no good, make it simple and straight forward as much as possible.

For more details on these rules, check out this post on [Why Good Developers Write Bad Unit Tests](https://mtlynch.io/good-developers-bad-tests)

</div>

Looking at the rules above, you might think, is there anything left for refactoring in the unit test? 

Well, in my experience there is always something/s that you can do to make it better.

1. Now for this Test, I can extract the local variable into a field, so that it can be used in other tests of the same class.

    You can go one step further and move the initialization of the field to a setUp method which would run before every test method. But I'm going to stop here for this example.

    Checkout my [JUnit4 Tutorial]({% post_url 2017-04-26-junit-tutorial %}), if you want to know how to use `setUp` and `tearDown` methods in JUnit4.
    {: .gray-box} 

2. Then the next important thing is the name of the test. 

    I'm following the [naming convention introduced by Roy Osherove](https://osherove.com/blog/2005/4/3/naming-standards-for-unit-tests.html), which is excellent.

__Naming convention for test methods__
{: .center .pd-tp-3}

<div class="border-box center break-all">

__UnitOfWork_StateUnderTest_ExpectedBehaviour__

methodUnderTest_state_expectedBehaviour

eg: getMessage_whenInitializedWithGreeting_returnsGreeting

</div>

<div class="purple-box mg-bt-3">


__Refacoring Of The Test__
{: .center .white-text}

<div class="row-container pd-bt-3">
<div class="row-1 bg-light-red mg-bt-3">

__Before__
{: .center .pd-tp-1}

~~~

  public class GreetingTest {

    @Test
    public void test(){

      Greeting greeting = new Greeting("Hello world!");

      assertThat(greeting.getMessage(), is("Hello world!"));
    }
  }

~~~
{: .language-java .code}

</div>

<div class="row-2 bg-light-green">

__After__
{: .center .pd-tp-1}

~~~

  public class GreetingTest {

    private Greeting greeting;

    @Test
    public void getMessage_whenInitializedWithGreeting_returnsGreeting() {
      
      greeting = new Greeting("Hello world!");
      assertThat(greeting.getMessage(),
          is("Hello world!"));
    }

  }

~~~
{: .language-java .code}

</div>
</div>
</div>

<div class="visual center pd-bt-3">
  {% assign image = page.images[6] %}
  {% include image.html styleClass="screen-shot" image=image  %}
</div>

<div class="full-width bg-tq white-text font-md pd-tp-3 pd-bt-3 mg-bt-3">

## TDD DEMONSTRATION
{: .center .bold .font-lg #tdd-demo}

<hr>

<div class="col-container">

<div class="col-1">

Now you have a basic idea of what is involved.

But there's nothing like watching how it's done practically.

So let's see it in action!

</div>

<div class="visual col-2">
  {% assign image = page.images[7] %}
  {% include image.html image=image %}
</div>

</div>

</div>

### HELLO WORLD IN TDD
{: .center .bold}

<div class="purple-box mg-bt-3 center white-text">

#### 1 | Writing the test

<video id="script-video" class="screen-shot maxw-700 center" controls="controls" width="800" height="600"
       name="Multiple responses in sequence" src="/assets/video/tdd/Test-driven-development-1.mp4" type="video/mp4" muted plays-inline></video>

</div>

<div class="purple-box mg-bt-3 center white-text">

#### 2 | Implementation

Writing the minimum code in order to pass the test

<video id="script-video" class="screen-shot maxw-700 center" controls="controls" width="800" height="600" 
       name="Multiple responses in sequence" src="/assets/video/tdd/Test-driven-development-2.mp4" type="video/mp4" muted plays-inline></video>

</div>

<div class="purple-box mg-bt-3 center white-text">

#### 3 | Refactor

Refactoring implementation

<video id="script-video" class="screen-shot maxw-700 center" controls="controls" width="800" height="600" 
       name="Multiple responses in sequence" src="/assets/video/tdd/Test-driven-development-3.mp4" type="video/mp4" muted plays-inline></video>

Refactoring test
{: .pd-tp-3}

<video id="script-video" class="screen-shot maxw-700 center" controls="controls" width="800" height="600" 
       name="Multiple responses in sequence" src="/assets/video/tdd/Test-driven-development-4.mp4" type="video/mp4" muted plays-inline></video>

</div>

It’s that simple. So what’s keeping you from practicing TDD? Let’s get started.

For the majority of us who are so used to writing the method or function first and writing the unit tests later or maybe skipping it altogether, it may feel like swimming upstream.

But like anything, a bit of practice will make it a lot easier and natural.

Following are a few things that motivated me and also planted the foundation of TDD in me.

- Test Driven Development: By Example" by Kent Beck - Reading this book, set my mind up for it and it really extracts the essence of test driven development.

- Writing great unit tests i.e. simple, understandable, and maintainable unit tests.

- TDD Kata - Small practice exercises that help you master it.


<div class="bg-red full-width white-text pd-bt-3 pd-tp-3 mg-tp-3">

## QUALITY MATTERS
{: #quality .center .bold}

<hr>

<div class="col-container font-md">
<div class="col-1">

What is a GOOD TEST?

What is a BAD TEST?

Why should I strive to write GOOD Tests?

</div>

<div class="visual col-2">
  {% assign image = page.images[8] %}
  {% include image.html image=image %}
</div>
</div>
</div>

<hr> 

Yes, the quality of unit tests does matter as much as the quality of production code.

##### Some qualities of a GOOD unit test

- Each unit test should be able to run independent of other tests.
- Each test should test just one thing (single behaviour, method, or function)
- All external dependencies should be mocked.
- The assumptions for each test should be clear and defined within the test method.
- name of the test method should be meaningful.
- Unit tests should be fast so that it could be run as often as required.
 
##### Why it's so important to write good unit tests?
    
  __Short answer: BAD__ unit tests are not going to last long.

  __Long answer:__ If unit tests are of low quality, or in other words, if a unit test meets one or more of the following conditions,

- Tests are not easily understandable by a person other than the one who wrote it.
- Tests interdepend on each other causing multiple tests to fail if one test is broken.
- Unit test suit take ages to run
- ... (the list goes on)

Maintaining those unit tests would become a nightmare in the long run.

Ultimately it would lead to ignoring all the tests one by one as they fail. 

Don't believe me? 

Then you may want to read this [open letter from an ignored test](https://dzone.com/articles/open-letter-from-an-ignored-test){:target="_blank"}


##### Power of having good unit tests

- Allows merciless refactoring - extremely rewarding.
- Gives you instant visual feedback - oh that green light :joy:
- Helps document the specification effectively.
- Guides the design of the production code (especially when TDD is practiced).
- Maintaining the production code will be a breeze.
- Others will be so grateful that you wrote those unit tests :grin: (trust me :wink:)

That being said, you should not overdo it, because it takes time and effort to maintain unit tests. 

TDD really helps in that aspect as well, because when you do it the other way around (i. e. write the code and then try to unit test it), you could easily end up having unnecessary tests.



<div class="bg-light-purple full-width white-text pd-bt-3 pd-tp-3 mg-bt-3 mg-tp-3">

## TDD KATA
{: #tdd-kata .center .bold}

<hr>

<div class="col-container font-md">
<div class="col-1">

Practice makes Perfect!

How to build that TDD muscle?

</div>

<div class="visual col-2">
  {% assign image = page.images[9] %}
  {% include image.html image=image %}
</div>
</div>
</div>


Like anything, __the key to TDD is practice.__ 

But how do you practice? 

TDD KATAs to the rescue.

<div class="border-box center">

__KATA__ has its roots in Japan.

"KATA means a detailed or defined set of movements to be practiced over and over again."

__TDD Kata is a tiny bit of coding that you could repeat over and over again.__

</div>



Not a new one every day, but the same coding exercise until you get sick of it. 

So, head over to [this repository](https://github.com/mwhelan/Katas){:target="_blank"} where you can find a list of Katas to practice and start now.


Please leave a comment below and let me know which KATA you got started with!
{: .mg-bt-3}