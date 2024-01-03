---

layout: post
comments: true

aside: true
title:  "Java Optional | How and When to use it"
date:   2024-01-04
updated-date: 2024-01-04
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Here are some key aspects of using `Optional`, along with best practices."
excerpt_separator: <!--more-->
name: optional-use

cover-image:
    url: /assets/img/thumb/optional-use.svg
    alt: Java Optional
    title: Java Optional

images: 
  - url: /assets/img/thumb/optional-use.svg
    alt: Java Optional
    title: Java Optional
    max-width: 250px
---

In Java 8, the `Optional` class was introduced to address the problem of handling potentially null values in a more expressive and safer way. 

Here are some key aspects of using `Optional`, along with best practices.

<!--more-->

---

## How to use `Optional`

### How to create an Optional

- Use `Optional.of(value)` when you are certain that the value is non-null.

- Use `Optional.ofNullable(value)` when the value might be null.

```java
String nonNullValue = "Hello";
Optional String optional1 = Optional.of(nonNullValue);

String nullableValue = null;
Optional<String> optional2 = Optional.ofNullable(nullableValue);
```

### How to access the value of an Optional

- Use `get()` cautiously; it throws `NoSuchElementException` if the value is not present.

- Prefer `orElse(defaultValue)` or `orElseGet(() -> defaultValue)` to provide a default value when the original value is not present.

```java
Optional<String> optional = // ...

// Avoid using get() without checking isPresent()
String value = optional.orElse("Default");
```

### How to avoid null checks with `optional`

Use `ifPresent(Consumer<? super T> consumer)` to perform an action only when the value is present, which eliminates the need for explicit null checks.

```java
Optional<String> optional = // ...

optional.ifPresent(val -> System.out.println("Value: " + val));
```

---

## Best Practices

### Avoid using Optional for method parameters

While using Optional for method return types is acceptable, it's generally not recommended for method parameters. It can make the code less readable and complicate the method signature.

### Use Optional in Stream API

`Optional` integrates well with the Stream API. For example, you can use `Optional` in combination with `filter`, `map`, and other stream operations.

```java
List<String> strings = // ...
Optional<String> result = strings.stream()
                                .filter(s -> s.startsWith("A"))
                                .findFirst();
```

### Consider alternative approaches

In some cases, using `Optional` might be unnecessary, and a simple null check or default value assignment could be more readable and straightforward.

---

## When to use and not to use Optional

### :heavy_check_mark: Use `Optional` when:

- You want to make it explicit that a value might be absent.
- You want to take advantage of the functional programming features in the Stream API.
- You want to enforce explicit handling of absent values.

### :x: Avoid `Optional` when:

- Dealing with method parameters; it's generally not recommended.
- It doesn't improve the code readability or when simpler alternatives suffice.

---

`Optional` is a powerful tool for expressing optional values more clearly and avoiding null pointer exceptions. <br> However, it should be used judiciously, and developers should be mindful of its appropriate application to avoid unnecessary complexity in the code.
{: .border-box .center}

---

## References

[Tired of Null Pointer Exceptions? Consider Using Java SE 8's Optional!](https://www.oracle.com/technical-resources/articles/java/java8-optional.html)

[Chapter 10. Using Optional as a better alternative to null · Java 8 in Action: Lambdas, streams, and functional-style programming](https://livebook.manning.com/book/java-8-in-action/chapter-10)

--- 

{% include related-post.html post-name='map-flatmap' title = "The difference between Map and FlatMap methods in Java Stream API" %}