---
layout: post
comments: true

aside: true
title:  "What is JDK, JRE, and JVM"
date:   2023-12-30
updated-date: 2023-12-30
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "A closer look at JDK, JRE, and JVM"
excerpt_separator: <!--more-->
name: jdk

cover-image:
    url: /assets/img/thumb/jdk.svg
    alt: jdk-jre-jvm
    title: jdk-jre-jvm
images: 
  - url: /assets/img/thumb/jdk.svg
    alt: jdk-jre-jvm
    title: jdk-jre-jvm
    max-width: 250px
  - url: /assets/img/jdk.png
    alt: jdk
    title: jdk

---

Let's take a closer look at JDK, JRE, and JVM to understand the function of each.

<!--more-->  

---

# 𝗝𝗗𝗞 (𝗝𝗮𝘃𝗮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗞𝗶𝘁)


## What is JDK?

JDK is like a toolkit for Java developers. It contains tools, executables, and binaries needed for Java development, including compilers, debuggers, and other utilities.

  

## What does JDK include?

JDK includes the JRE (Java Runtime Environment), development tools, libraries, header files, and documentation.

Here's a comprehensive list of what's included in the JDK.

### Development Tools

- **javac**: The Java compiler used to compile Java source code into bytecode.
- **javap**: The Java Class File Disassembler used to disassemble compiled class files.
- **javadoc**: The Java documentation generator used to create API documentation from source code comments.

### Execution Tools

- **java**: The Java Virtual Machine (JVM) launcher that executes compiled Java applications.
- **jjs (JShell)**: The interactive command-line tool for evaluating Java expressions and statements. (deprecated in JDK 11)


### Packaging Tools

- **jar**: The Java Archive tool used to package files into a Java Archive (JAR) file.
- **javapackager**: The tool for packaging and deploying Java applications, including self-contained applications.


### Debugging Tools

- **jdb**: The Java Debugger used for debugging Java applications.
- **jstack**: The utility to print Java thread stack traces for a given Java process.

###  Monitoring and Management Tools

- **jconsole**: The Java Monitoring and Management Console used to monitor and manage Java applications.
- **jstat**: The Java Virtual Machine statistics monitoring tool.



### Security Tools
- **keytool**: The tool for managing keystores and certificates for secure communication.
- **jarsigner**: A tool to sign and verify Java Archive (JAR) files.


### Miscellaneous Tools
- **extcheck**: A utility to detect version conflicts between a Java application and installed extensions.

Checkout all the tools included in OpenJDK @ <https://openjdk.org/tools>{:target="_blank"}



  
## What is the use of JDK?

Developers use JDK to write, compile, and debug Java applications.


---

# 𝗝𝗥𝗘 (𝗝𝗮𝘃𝗮 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁)

  

## What is JRE?

JRE is like a runtime environment where Java programs run. It provides the necessary runtime libraries and components for executing Java applications.


*JRE is a complete runtime environment that provides everything needed to run Java applications, including the JVM, core libraries, supporting APIs, tools, and utilities.*<br><br>
It creates an environment in which compiled Java bytecode can be executed and interact with the system, while leveraging the comprehensive Java API for various functionalities.
{: .border-box}


  

## What does JRE include?

JRE includes the JVM (Java Virtual Machine), core libraries, and other supporting files. 


### Core Libraries (Java API)

The JRE includes the core Java libraries, which provide the fundamental building blocks for Java applications. 

These libraries encompass a wide range of classes and APIs for data structures, I/O operations, networking, GUI components, concurrency, and more.



### Java Native Interface (JNI)

JNI is a programming framework that allows Java code to call and be called by native applications or libraries written in other programming languages like C or C++. 

The JRE includes support for JNI, enabling interaction between Java and native code.



### Java Accessibility API

This API provides accessibility support, making it possible for Java applications to be used by individuals with disabilities. 

It includes features like screen readers and keyboard navigation.




### Security Components

The JRE includes security components to ensure a secure execution environment for Java applications. 

This includes security providers, cryptographic algorithms, and mechanisms to handle digital certificates and permissions.



### Internationalization and Localization Support

The JRE includes features and tools to support internationalization and localization, allowing Java applications to be adapted for different languages and regions.


  

## What is the use of JRE?

End-users use JRE to run Java applications on their machines.

---


# 𝗝𝗩𝗠 (𝗝𝗮𝘃𝗮 𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗠𝗮𝗰𝗵𝗶𝗻𝗲)

  

## What is JVM?

JVM is like a virtual computer that executes compiled Java bytecode. It translates bytecode (instructions) into machine-specific instructions and manages the program's execution.
  

## What does JVM do?

JVM interprets Java bytecode and executes it by interacting with the system hardware and operating system.

When you write Java code, it's first compiled into bytecode by the Java compiler. 

Bytecode is a platform-independent representation of your code.

There is a JVM implementation specific to each platform (Windows, Mac, Linux...)

The JVM knows nothing about the Java programming language, but only of a particular binary format, the `class` file format.

The JVM loads classes from the bytecode as needed.

Then the Execution engine of JVM converts the bytecode to native machine instructions and executes the program.

## Main components of JVM

### Class Loader Subsystem

**The class loader has three components.**

1. Bootstrap Class Loader
2. Extension Class Loader
3. Application Class Loader

Here's what they do: 

1. **Bootstrap Class Loader**

  Loads core Java classes like `java.lang.Object` and other runtime classes essential for JVM operation.


2. **Extension Class Loader**

  Loads classes from the Java extension directory (usually $JAVA_HOME/lib/ext).

  *eg: classes from javax libraries such as javax.xml.*


3. **Application Class Loader**

  Loads classes from the application classpath specified by the `CLASSPATH` environment variable or the `-cp` option.


### Runtime Data Areas


- **Method Area (Class Area)**

  Stores class metadata, static fields, and method information. Each loaded class has its own method area.

- **Heap**

  Stores objects and their instance variables. It's shared among all threads and is where garbage collection occurs.



- **Stack**

  Stores local variables, method call information, and partial results. 

  Each thread has its own stack, created along with the thread. It includes the method call stack (frames) and local variables.



- **PC (Program Counter) Register**

  Holds the address of the JVM instruction being executed.



- **Native Method Stack**

  Stores native method information.



### Execution Engine

Execution engine consists of **Interpreter** and **Just-In-Time (JIT) Compiler**.



- **Interpreter**

  Reads and interprets bytecode line by line and executes the corresponding native instructions. Slower compared to the JIT compiler but platform-independent.



- **Just-In-Time (JIT) Compiler**

  Translates bytecode into native machine code specific to the underlying hardware, optimizing performance.

  The compiled code is cached for future use.



### Garbage Collector (GC)

Manages memory by reclaiming memory that is no longer in use (garbage collection).



### Native Interface

**JNI (Java Native Interface)** allows Java code to call and be called by native applications or libraries written in languages like C or C++.



### Native Method Libraries

Libraries of native methods that provide implementations for native (platform-dependent) methods.

These components work together to load classes, manage memory, execute bytecode, and interface with native code, enabling Java applications to run in a platform-independent manner. 


The JVM provides a consistent runtime environment across various operating systems and hardware architectures, allowing Java applications to run reliably and efficiently.


**This is a very abstract and simplified overview of the JVM and its components. <br>
*There's lot more to explore in each sub component.***
{: .border-box}

  

## How is JVM related to JRE?

JVM is a key component of JRE. When you run a Java application, the JRE starts the JVM to execute the application's bytecode.

---

Following image is a screenshot from the [Java Documentation](https://docs.oracle.com/javase/8/docs/index.html)

{% assign image = page.images[1] %}
{% include image.html image=image %}


---

{% include related-post.html post-name='process' title = "The difference between Process and Threads" %}

---

{% include related-post.html post-name='map-flatmap' title = "The difference between Map and FlatMap methods in Java Stream API" %}


