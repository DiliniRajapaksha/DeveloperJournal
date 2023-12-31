---

layout: post
comments: true

aside: true
title:  "Java 8 Optional - Avoid the explicit null check on list"
date:   2024-01-01
updated-date: 2024-01-01
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "How to get the first item of a nullable list in Java with Optional"
excerpt_separator: <!--more-->
name: nullable-list

cover-image:
    url: /assets/img/thumb/optional.svg
    alt: Java optional
    title: Java optional

images: 
  - url: /assets/img/thumb/optional.svg
    alt: Java optional
    title: Java optional
    max-width: 250px
---

# Avoid the ugly null check with Optional

How to get the first item of a nullable list in Java using Optional

<!--more-->


### Without `Optional` (the traditional way)

```java
public static void main(String[] args) {
        //        List<String> items = null;  
        List<String> items = List.of("1", "2", "3");  

        if (items != null && !items.isEmpty()) {
            String firstItem = items.get(0);
            System.out.println("First item: " + firstItem);
        } else {
            System.out.println("List is null or empty");
        }
    }
```

This is simple and widely understood by Java developers.
May be more familiar to developers who are not yet accustomed to Java 8 features.

But it's a bit verbose.

The null check and the access to the first element are combined in a single block, potentially making the code less expressive.

### With Optional (More expressive way)

```java
    public static void main(String[] args) {  
//        List<String> items = null;  
        List<String> items = List.of("1", "2", "3");  
  
        Optional.ofNullable(items)  
                .flatMap(list -> list.stream().findFirst())  
                .ifPresentOrElse(  
                        item -> System.out.println("First item: " + item),  
                        () -> System.out.println("List is null or empty")  
                );  
    }  
  
}
```

### Using `map` method instead of `flatMap` (still using Optional)

```java 
    public static void main(String[] args) {  
//        List<String> items = null;  
        List<String> items = List.of("1", "2", "3");  
  
        Optional.ofNullable(items)  
                .map(list -> list.stream().findFirst())  
                .ifPresentOrElse(  
                        item -> System.out.println("First item: " + item.get()),  
                        () -> System.out.println("List is null or empty")  
                );  
    }

```

Using Optional expresses the intent more clearly: "I want the first item of the list if it is present and not empty."

Separates the null check, filtering, and mapping, making each step more explicit.

Which method would you use?

{% include related-post.html post-name='map-flatmap' title = "The difference between Map and FlatMap methods in Java Stream API" %}