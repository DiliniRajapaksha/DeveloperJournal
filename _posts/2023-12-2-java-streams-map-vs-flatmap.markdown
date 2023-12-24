---

layout: post
comments: true

aside: true
title:  "Java Streams - Map vs FlatMap"
date:   2023-12-23
updated-date: 2023-12-23
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "The difference between Map and FlatMap methods in Java Stream API"
excerpt_separator: <!--more-->

cover-image:
    url: /assets/img/thumb/map-vs-flatmap.svg
    alt: Map vs FlatMap
    title: Map vs FlatMap

images: 
  - url: /assets/img/thumb/map-vs-flatmap.svg
    alt: Map vs FlatMap
    title: Map vs FlatMap
    max-width: 250px
---

# Map Vs FlatMap

In Java streams, `map` and `flatMap` are two distinct functions that can be used to transform elements in a stream, but they are used in slightly different ways.

<!--more-->


## Map



The `map` operation is used to transform each element of the stream according to the provided function.

It applies a one-to-one transformation, meaning that each element in the original stream is transformed into exactly one element in the resulting stream.
The result is a new stream of the same size as the original stream.

   ```java
   List<String> words = Arrays.asList("hello", "world");
   List<Integer> lengths = words.stream()
                               .map(String::length)
                               .collect(Collectors.toList());
   // Result: [5, 5]
   ```

   In this example, each word in the stream is mapped to its length, resulting in a stream of integer values.

<hr>

## FlatMap

The `flatMap` operation is used for a one-to-many transformation of elements.
It takes a function that returns a stream of values for each input element and then flattens these streams into a single stream of values.
It is particularly useful when the mapping function returns a stream, and you want to avoid nested streams.

   ```java
   List<String> words = Arrays.asList("hello", "world");
   List<String> uniqueLetters = words.stream()
                                    .map(word -> word.split(""))
                                    .flatMap(Arrays::stream)
                                    .distinct()
                                    .collect(Collectors.toList());
   // Result: [h, e, l, o, w, r, d]
   ```

   In this example, the `map` function returns an array of letters for each word, and `flatMap` is used to flatten these arrays into a single stream of letters. The `distinct` operation then ensures that only unique letters are retained.

**In summary, the key difference is in the nature of the *transformation***. <br><br>
`map` is for one-to-one transformations.<br> `flatMap` is for one-to-many transformations, flattening the result into a single stream.
{: .border-box}
