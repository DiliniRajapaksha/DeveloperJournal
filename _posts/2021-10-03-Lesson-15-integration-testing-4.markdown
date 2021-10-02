---

layout: lesson
comments: true

title:  "REST API with Spring Boot | Lesson 15 | Integration testing part 4"
date:   2021-10-03
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "REST API Integration testing part 4 "
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/NMOLPNtlQp0
    image:
        url: /assets/img/spring-boot-course/Lesson15-spring-boot.png
        alt: 'Lesson14-spring-boot'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson15-spring-boot.png
    alt: Spring Boot Application
    title: Spring Boot Application

next-lesson:
    title: Lesson 16 - Deployment
    url: 
    youtube-url: https://youtu.be/QAKlzQk0WuY

---

<hr>

# Integration Tests For Delete

<hr>

```

    @Test
    @SqlGroup({
            @Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, statements = "insert into `comment` (id, post_id, message) values (1, 1, 'testCommentFor delete');"),
            @Sql(executionPhase = ExecutionPhase.AFTER_TEST_METHOD, statements = "delete from comment;") })
    public void deleteComment_forValidRequest_returnsResponseCode204() throws Exception {

        mvc.perform(delete("/comments/1")).andExpect(status().isNoContent()).andDo(print());

    }

    @Test
    @SqlGroup({
            @Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, statements = "insert into `comment` (id, post_id, message) values (1, 1, 'testCommentFor delete');"),
            @Sql(executionPhase = ExecutionPhase.AFTER_TEST_METHOD, statements = "delete from comment;") })
    public void deleteComment_forValidRequest_deletesComment() throws Exception {

        mvc.perform(get("/posts/1/comments"))
                .andExpect(jsonPath("$.length()", is(1)))
                .andExpect(jsonPath("$.[0].id", is(1)))
                .andDo(print());

        mvc.perform(delete("/comments/1")).andDo(print());
        
        mvc.perform(get("/posts/1/comments"))
        .andExpect(jsonPath("$.length()", is(0)))
        .andDo(print());

    }
    
    
    @Test
    @Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, statements = "delete from comment;")
    public void deleteComment_whenCommentDoesNotExist_returnsResponseCode404() throws Exception {

        mvc.perform(delete("/comments/1")).andExpect(status().isNotFound()).andDo(print());

    }

```
{: language-java}

Please find the complete source code @ <https://github.com/JavaCodeHouse/comments-application>{:target="_blank"}