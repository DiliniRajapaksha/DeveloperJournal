---

layout: post
comments: true

aside: true
title:  "Java Stacks and Queues"
date:   2024-01-02
updated-date: 2024-01-02
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Java Stacks and Queues"
excerpt_separator: <!--more-->
name: stack-queue

cover-image:
    url: /assets/img/thumb/stack-queue.svg
    alt: Java optional
    title: Java optional

images: 
  - url: /assets/img/thumb/stack-queue.svg
    alt: Java optional
    title: Java optional
    max-width: 250px
---

Let's look at how to work with stacks and queues in Java.

<!--more-->

# Stack

A stack is a Last In, First Out (LIFO) data structure, where the last element added is the first one to be removed. 

Think of it like a stack of plates where you always take the top one. 

In Java, the `Stack` class and the `Deque` interface (with implementations like `ArrayDeque` or `LinkedList`) can be used to implement a stack.

Here's a basic example using `ArrayDeque`:

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class StackExample {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();

        // Push elements onto the stack
        stack.push(1);
        stack.push(2);
        stack.push(3);

        // Pop elements from the stack
        while (!stack.isEmpty()) {
            System.out.println(stack.pop());
        }
    }
}
```

---

# Queue

A queue is a First In, First Out (FIFO) data structure, where the first element added is the first one to be removed. 

It's like a line of people waiting for a bus, where the person who arrived first is the first to board.

In Java, the `Queue` interface and its implementations like `LinkedList` or `ArrayDeque` can be used to implement a queue.

Here's a basic example using `LinkedList`:

```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        // Enqueue elements into the queue
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);

        // Dequeue elements from the queue
        while (!queue.isEmpty()) {
            System.out.println(queue.poll());
        }
    }
}
```

In these examples, `push` is used to add elements to the stack, and `pop` is used to remove elements. 

For the queue, `offer` is used to enqueue elements, and `poll` is used to dequeue elements. 

These are just a few basic operations, these classes/interfaces provide additional methods for more advanced use cases.

---

## Queue vs Deque Interfaces

### Queue Interface

The Queue interface is designed for representing a queue data structure, which follows the First In, First Out (FIFO) principle. 

In a queue, elements are added at the end (enqueued) and removed from the front (dequeued). 

Some important methods in the `Queue` interface include,

- `boolean offer(E e)`: Adds an element to the end of the queue and returns `true` if the operation was successful.
    
- `E poll()`: Removes and returns the element at the front of the queue, returning `null` if the queue is empty.
    
- `E peek()`: Retrieves, but does not remove, the element at the front of the queue, returning `null` if the queue is empty.
    

### Deque Interface

The `Deque` interface, short for "double-ended queue," extends the `Queue` interface and adds support for operations at both ends of the queue. 

This means you can add and remove elements from both the front and the end of the deque. 

Some additional methods provided by the `Deque` interface include,

- `void addFirst(E e)`: Adds an element to the front of the deque.
    
- `void addLast(E e)`: Adds an element to the end of the deque.
    
- `E removeFirst()`: Removes and returns the element at the front of the deque.
    
- `E removeLast()`: Removes and returns the element at the end of the deque.

---

{% include related-post.html post-name='map-flatmap' title = "The difference between Map and FlatMap methods in Java Stream API" %}