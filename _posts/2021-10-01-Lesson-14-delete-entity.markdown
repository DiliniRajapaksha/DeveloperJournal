---

layout: lesson
comments: true

title:  "REST API with Spring Boot | Lesson 14 | Delete Entity"
date:   2021-09-30
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "REST API for Deleting an entity"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/qqYkfzbXIQ0
    image:
        url: /assets/img/spring-boot-course/Lesson14-spring-boot.png
        alt: 'Lesson14-spring-boot'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson14-spring-boot.png
    alt: Spring Boot Application
    title: Spring Boot Application

next-lesson:
    title: Lesson 15 - End To End Testing
    url: 
    youtube-url: https://youtu.be/NMOLPNtlQp0

---

<hr>

# Integration Tests For Saving An Entity

<hr>


```
    @Test
    public void addComments_validRequest_statusCreated() throws Exception {

        mvc.perform(post("/posts/1/comments").content("{\"message\": \"test comment\"}")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isCreated()).andDo(print());

    }

    @Test
    public void addComments_invalidRequestWithCommentId_status400() throws Exception {

        mvc.perform(post("/posts/1/comments").content("{\"id\": 1, \"message\": \"test comment2\"}")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isBadRequest()).andDo(print());

    }

    @Test
    public void addComments_invalidPostIdInRequest_status400() throws Exception {

        mvc.perform(post("/posts/-1/comments").content("{\"message\": \"test comment3\"}")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isBadRequest()).andDo(print());

    }

    @Test
    public void addComments_validRequest_returnsCreatedCommentWithIdPostIdAndMessage() throws Exception {

        mvc.perform(post("/posts/4/comments").content("{\"message\": \"test comment4\"}")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$.id", is(greaterThan(0))))
                .andExpect(jsonPath("$.postId", is(4))).andExpect(jsonPath("$.message", is("test comment4")))
                .andDo(print());

    }


```
{: .language-java}

<hr>

# @ResponseStatus Annotation

<hr>

In oder to return the proper response status code, the `@ResponseStatus` annotation could be used on the controller method. If this is not done the default status code will be returned, which is 200.


```
    @PostMapping("posts/{id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment addComment(@RequestBody Comment comment, @PathVariable("id") int postId) {

        validateComment(comment, postId);

        comment.setPostId(postId);

        return commentService.createComment(comment);

    }

```
{: .language-java}


Please find the complete source code @ <https://github.com/JavaCodeHouse/comments-application>{:target="_blank"}
