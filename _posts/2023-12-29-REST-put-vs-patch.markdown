---

layout: post
comments: true

aside: true
title:  "PUT vs PATCH"
date:   2023-12-29
updated-date: 2023-12-29
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "The difference between the PUT and PATCH operations."
excerpt_separator: <!--more-->
name: put-patch

cover-image:
    url: /assets/img/thumb/PUT-vs-PATCH.svg
    alt: PUT vs PATCH
    title: PUT vs PATCH
images: 
  - url: /assets/img/thumb/PUT-vs-PATCH.svg
    alt: PUT vs PATCH
    title: PUT vs PATCH
    max-width: 250px
---

The difference between the PUT and PATCH operations.

<!--more-->

---

## PUT

**Replace**


The PUT operation is used to **completely replace** the resource at the specified URL with the new representation provided in the request.

It requires sending the complete representation of the resource in the request payload.

If the resource exists at the given URL, the server replaces it with the new representation.

If the resource does not exist, the server may create a new resource based on the provided representation and assign it the specified URL.


---


## PATCH 

**Update**

The PATCH operation is used to **partially update** a resource at the specified URL with the changes provided in the request.

It requires sending only the specific changes or instructions to be applied to the resource in the request payload, rather than the complete representation.

The server applies the provided changes to the resource while preserving the existing data not explicitly mentioned in the request.

If the resource does not exist, the server may choose to create it or return an error, depending on the API design.


---

## PUT vs PATCH

The main difference between PUT and PATCH lies in the extent of modification to the resource. 

PUT replaces the entire resource, while PATCH updates only specific parts of it. 

PUT requires sending the complete representation, while PATCH only requires sending the changes or instructions to be applied. 

The choice between PUT and PATCH depends on the desired behavior and requirements of the API design.

---

{% include related-post.html post-name='design' title = "REST API Design" %}