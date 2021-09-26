---

layout: lesson
comments: true

title:  "REST API with Spring Boot | Lesson 9 | Spring Transaction Handling"
date:   2021-05-08
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Spring Transaction Handling"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/nSu1wMXsPqY
    image:
        url: /assets/img/spring-boot-course/Lesson 9 - Spring Transaction handling.png
        alt: 'Spring Boot Application'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson 9 - Spring Transaction handling.png
    alt: Spring Boot Application
    title: Spring Boot Application

images: 
  - url: /assets/img/spring-boot-course/transactions/trasactions.001.jpeg
    alt: Spring transactions
    title: Spring transactions
  - url: /assets/img/spring-boot-course/transactions/trasactions.005.jpeg
    alt: Spring transactions
    title: Spring transactions

next-lesson:
    title: Lesson 10 - Integration Testing Part 2
    url: lesson-10-integration-testing-2
    youtube-url:

---

<hr>

# Transactional Methods

<hr>

What happens when a method is transactional? 

The method executes inside of a transaction, if anything goes wrong in the middle of the method execution, the transaction will be rolled back, otherwise, it will be committed.

<div class="img-lg">
    {% assign image = page.images[0] %}
    {% include image.html image=image %}
</div>

### Transactional Method Example

Let's say there were 100 comments in a database, and while a method is being executed, 30 of them were successfully streamed, but then something happens in the middle of it and it could not read from the database anymore. 

If the method runs within a transaction, the whole method will fail instead of returning 30 comments. 

That prevents us from getting an incomplete list of comments.

<hr>

# How Spring Transactions Work | What Happens Behind The Scene?

<hr>

Spring provides comprehensive transaction support, and the following is a very simplified overview of how it works.

Spring Framework’s transaction support is enabled via AOP proxies. So the caller of the method invokes the proxy, not the target, and at this point, a transaction is created. Then the target method is invoked, and on the way back, either the transaction is committed or rolled back.
{: .gray-box .bold}

<div class="img-lg">
    {% assign image = page.images[1] %}
    {% include image.html image=image %}
</div>

<hr>

# How To Enable Spring's Transaction Management

<hr>

Typically transaction management is enabled using `@EnableTransactionManagement` annotation or it could also be done via XML.

We are building a Spring Boot application, so most of the configuration is done for me. because I have spring-data libraries in the classpath, transaction management is enabled by the framework. So, you don't have to do anything to enable transaction management.

In order to apply transaction management, all you have to do is add the `@Transactional` annotation.

<hr>

# What Is @Transactional Annotation In Spring?

<hr>

The `@Transactional` annotation is metadata that specifies that an interface, class, or method must have transactional semantics. For example, "start a brand new read-only transaction when this method is invoked, suspending any existing transaction".

There are quite a few settings that can be applied to this annotation. The following table from the [documentation](https://docs.spring.io/spring-framework/docs/4.2.x/spring-framework-reference/html/transaction.html#transaction-declarative-attransactional-settings) lists all of them. 

### @Transactional Settings

|---
|Property|  Type|  Description|
|:-|:-|:-|
|`value` |String |Optional qualifier specifying the transaction manager to be used.|
|`propagation` |enum: `Propagation` |Optional propagation setting.|
|`isolation` |enum: `Isolation`|Optional isolation level.|
|`readOnly` |boolean |Read/write vs. read-only transaction|
|`timeout` |int (in seconds granularity)|Transaction timeout.|
|`rollbackFor` |Array of Class objects, which must be derived from Throwable. |Optional array of exception classes that must cause rollback.|
|`rollbackForClassName` |Array of class names. Classes must be derived from Throwable. |Optional array of names of exception classes that must cause rollback.|
|`noRollbackFor` |Array of Class objects, which must be derived from Throwable. |Optional array of exception classes that must not cause rollback.|
|`noRollbackForClassName` |Array of String class names, which must be derived from Throwable. |Optional array of names of exception classes that must not cause rollback.|
{: .table .table-sp}

### Defaults Of Some @Transactional Settings

|---
|Property|  Default value |
|:-|:-|
|`propagation`|  `PROPAGATION_REQUIRED`|
|`Isolation`|  `ISOLATION_DEFAULT`|
|`readOnly`| read/write.|
|`timeout`|  The default timeout of the underlying transaction system, or to none if timeouts are not supported.|
|`rollbackFor`|  RuntimeExceptions triggers rollback, and any checked Exceptions do not.|
{: .table}

### **`propagation`**

These are the transaction propagation behaviours defined by the `propagation` enum. Let's look at a couple of them.

`REQUIRED` - Supports a current transaction, create a new one if none exists.
    If there is a transaction already started, then this method will execute within that, otherwise, a new one will be created.

`REQUIRES_NEW` - Create a new transaction, and suspend the current transaction if one exists.


### **`readOnly`**

The next attribute I want to look at is `readOnly`, which is a boolean.

**What happens when the read-only attribute is set to `true`?**
    Spring doesn't handle persistence, so it cannot define exactly what `read-only` should do. So this is just a hint to the provider which in this case is hibernate. According to the documentation, if using hibernate as the JPA provider, when `readOnly` flag is set to `true`,  `flushMode` on the Hibernate session will be set to NEVER, preventing any changes to data.

Following is the excerpt from the spring data documentation which states this.

> "It's definitely reasonable to use transactions for read only queries and we can mark them as such by setting the readOnly flag. This will not, however, act as check that you do not trigger a manipulating query (although some databases reject INSERT and UPDATE statements inside a read only transaction). The readOnly flag instead is propagated as hint to the underlying JDBC driver for performance optimizations. Furthermore, Spring will perform some optimizations on the underlying JPA provider. E.g. when used with Hibernate the flush mode is set to NEVER when you configure a transaction as readOnly which causes Hibernate to skip dirty checks (a noticeable improvement on large object trees)."
> --- [Spring Documentation](https://docs.spring.io/spring-data/jpa/docs/1.5.0.RELEASE/reference/html/jpa.repositories.html)

### **`timeout`**

`timeout` is the number of seconds before a transaction times out.

## javax.transaction.Transactional vs org.springframework.transaction.annotation.Transactional

Spring transaction management also supports the `@Transactional` annotation from Java (`javax.transaction.Transactional`) as a drop-in replacement for the `@Transactional` annotation provided by Spring. However, it lacks some of the settings available in the one from Spring such as `readOnly` and `timeout` which are quite useful. So I would use Spring's `@Transactional` annotation instead of the one from Java.

## What Can Be Annotated With @Transactional?


The `@Transactional` annotation can be placed on interfaces, classes, or both class and interface methods.

> "Spring recommends that you only annotate concrete classes (and methods of concrete classes) with the `@Transactional` annotation, as opposed to annotating interfaces. You certainly can place the `@Transactional` annotation on an interface (or an interface method), but this works only as you would expect it to if you are using interface-based proxies. The fact that Java annotations are not inherited from interfaces means that if you are using class-based proxies ( proxy-target-class="true") or the weaving-based aspect ( mode="aspectj"), then the transaction settings are not recognized by the proxying and weaving infrastructure, and the object will not be wrapped in a transactional proxy, which would be decidedly bad."     
> --- [Spring Documentation](https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/transaction.html#transaction-declarative-annotations)   

Don't worry if you are confused with the above excerpt, it's all explained below. <i class="fa fa-hand-o-down" aria-hidden="true"></i>

<hr>

# Transaction Configuration In Spring

<hr>

In a typical Spring application, configuration could be done via XML or Java/annotations.

### XML Based configuration

When using XML based configurations, the following line in the config file would enable annotation-driven transaction management.

    <!-- enable the configuration of transactional behavior based on annotations -->
      <tx:annotation-driven transaction-manager="txManager"/>
{: .language-xml }

Following are the settings or the attributes which can be set on this tag.

    transaction-manager
    mode 
    proxy-target-class
    order

### Java Based configuration

When using java based configuration, `@EnableTransactionManagement` annotation would be used to provide the same configuration as above.

It has the following three optional elements.

    mode
    order
    proxyTargetClass


Regardless of the mode of configuration, i.e. either XML or Java based configuration, so long as we have not specifically set these attributes, the default values apply. So let's look at each one.

### The proxyTargetClass or proxy-target-class

This could be either true or false.

The default value is **false**. In which case, **JDK interface-based proxies** are created. 

If this attribute is set to **true**, then **CGLIB proxies** will be used, which are class-based, and therefore any `@Transactional` annotations on interfaces will be ignored.


### The mode

There are 2 values that can be applied to the `mode` attribute. `proxy` and `aspectJ`. 

The default value of the mode attribute is **`proxy`**. It processes annotated beans to be proxied using Spring’s AOP framework, which would proxy interfaces annotated with `@Transactional`.

But when the mode is set to **`aspectJ`** the interfaces annotated with `@Transactional` will be ignored. 

That's because,

> The aspect that interprets @Transactional annotations is the AnnotationTransactionAspect. When using this aspect, you must annotate the implementation class (and/or methods within that class), not the interface (if any) that the class implements. AspectJ follows Java’s rule that annotations on interfaces are not inherited. 
> --- [Spring Documentation](https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/aop.html#aop-aj-ltw-spring)

<div class="border-box" markdown="1">
    

### Keep in mind when using `proxy` mode which is the default setting.

1. only external method calls will be transactional. 

    even though a method is marked with `@Transactional` annotation, if it is called within another method of the same object, it will not have transactional behaviour.

2. you should apply the `@Transactional` annotation only to methods with **public** visibility. 
   
    If you do annotate protected, private or package-visible methods with the `@Transactional` annotation, no error is raised, but the annotated method does not exhibit the configured transactional settings.

*So if you want transactional behaviour in either self invocations or non-public methods, consider the use of `aspectJ` mode instead of `proxy`.*

</div>

### What Happens In A Spring Boot Application

In a Spring Boot application, transaction management is enabled by the framework, without having to add the `@EnableTransactionManagement` annotation, and the defaults are applied.
Hence there is no restriction as to where to place the `@Transactional` annotations, but it is safer to follow the recommendation because in case those need to be changed later on.

<hr>

**I highly recommend reading the [documentation](https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/transaction.html) for Spring transaction management as we cannot cover everything here.**


