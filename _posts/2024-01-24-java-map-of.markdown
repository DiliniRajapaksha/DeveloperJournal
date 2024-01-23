---

layout: post
comments: true

aside: true
title:  "Creating Immutable Maps with Java"
date:   2024-01-24
updated-date: 2024-01-24
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Immutable Maps with Java"
excerpt_separator: <!--more-->
name: immutable-maps

cover-image:
    url: /assets/img/thumb/map-immutable.svg
    alt: Java Optional
    title: Java Optional

images: 
  - url: /assets/img/thumb/map-immutable.svg
    alt: Java Optional
    title: Java Optional
    max-width: 250px
---

# Immutable Maps

In Java, an immutable map is a map that cannot be modified after it has been created. Once an immutable map is created, its contents cannot be changed, which offers several benefits in terms of thread-safety.

<!--more-->

### Thread safty of immutable maps

Immutable maps are inherently thread-safe because they cannot be modified once created. 

In a multithreaded environment, concurrent modifications to a data structure can lead to race conditions and unpredictable behavior. 

Immutable maps eliminate this concern, making them a safer choice for concurrent programming.

Since immutable maps cannot be modified, they can be safely shared among different threads or components without the need for synchronization mechanisms. 

This simplifies code and reduces the likelihood of bugs related to shared mutable state.

However, thread safty comes with a cost. More on that later...

It's important to understand that the immutability of the map only applies to the structure of the map itself, not to the mutability of the objects it contains. <br> <br> The immutability of the map ensures that once the map is created, its keys and values (references) cannot be changed, added, or removed.
{: .border-box}

## How to create an immutable map

Both `Map.of()` and `Map.ofEntries()` are methods introduced in Java 9 to create immutable maps with a specified set of key-value pairs. 

*You cannot pass null as key or value to these methods.*

However, there are some differences in terms of flexibility and use cases.

1. **Number of Elements:**
   - `Map.of()`: This method allows you to create a map with up to 10 key-value pairs. If you need more than 10 entries, you would need to use a different approach or combine multiple calls to `Map.of()` with other map operations.
   - `Map.ofEntries()`: This method can handle any number of key-value pairs. You can use the `Map.entry()` method to create `Map.Entry` instances, and then pass these entries as arguments to `Map.ofEntries()`.

2. **Usage:**
   - `Map.of()`: Convenient for creating small maps with a fixed number of entries. The syntax is concise and easy to read.
   - `Map.ofEntries()`: More suitable when you have a larger number of entries or when the number of entries is not known at compile time. It provides a more flexible way to create a map.

Here are examples of using both methods:

**Using `Map.of()`:**
```java
import java.util.Map;

public class MapOfExample {
    public static void main(String[] args) {
        Map<String, Integer> map = Map.of(
                "key1", 1,
                "key2", 2,
                "key3", 3
        );
        System.out.println(map);
    }
}
```

**Using `Map.ofEntries()`:**
```java
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MapOfEntriesExample {
    public static void main(String[] args) {
        Map<String, Integer> map = Map.ofEntries(
                Map.entry("key1", 1),
                Map.entry("key2", 2),
                Map.entry("key3", 3)
        );
        System.out.println(map);
    }
}
```

In the `Map.ofEntries()` example, you can use the `Map.entry()` method to create entries, and then pass those entries to `Map.ofEntries()`. This method allows you to create maps with any number of entries.

--- 

## Time complexity of Immutable vs Mutable Maps in Java

### Immutable Maps

**Creation**

Time complexity for creating an immutable map (using methods like Map.of() or Collections.unmodifiableMap()) is typically O(n), where n is the number of key-value pairs.

**Access (Read)**

Accessing a value in an immutable map is generally O(1) because you can directly retrieve a value using its key.

**Modification**

Modifying an immutable map involves creating a new map with the desired changes. The time complexity for this operation is O(n) where n is the number of changes.

### Mutable Maps

**Creation**

Creating a mutable map (e.g., HashMap or TreeMap) has a time complexity of O(1) or O(log n), depending on the specific implementation.

**Access (Read)**

Accessing a value in a mutable map is typically O(1) for hash-based maps (like HashMap) and O(log n) for tree-based maps (like TreeMap).

**Modification**

Modifying a mutable map can have an average time complexity of O(1) for common operations like insertion, deletion, and retrieval, but in some cases, it might degrade to O(n) for worst-case scenarios (e.g., dealing with hash collisions in a hash map).

### Time complexity comparison

| Operation                | Immutable Maps              | Mutable Maps               |
|:- |:- |:- |
|--------------------------|-----------------------------|----------------------------|
| Creation             | O(n)                        | O(1) or O(log n)           |
| Access (Read)        | O(1)                        | O(1) (HashMap) or O(log n) (TreeMap) |
| Modification         | O(n)                        | O(1) (average), O(n) (worst-case) |
{: .table-striped}

<br>

This table provides a high-level comparison of time complexities for common operations associated with maps. Keep in mind that the actual performance may depend on specific implementations and factors such as the size of the map, hash collisions, and the distribution of keys.

In summary, immutable maps generally have higher time complexity for modification operations, as they involve creating a new map. 
{: .border-box}

Mutable maps, on the other hand, can have constant or logarithmic time complexity for modification operations, making them more efficient in scenarios with frequent changes. 

The choice between immutable and mutable maps depends on the specific requirements and characteristics of the application.

---

{% include related-post.html post-name='map-flatmap' title = "The difference between Map and FlatMap methods in Java Stream API" %}