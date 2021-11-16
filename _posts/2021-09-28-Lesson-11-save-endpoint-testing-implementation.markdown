---

layout: lesson-video
comments: true

title:  "REST API with Spring Boot | Lesson 11 | POST Request Testing And Implementation"
date:   2021-09-28
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Unit Testing and Implementation"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/fMHOldR44rQ
    image:
        url: /assets/img/spring-boot-course/Lesson11-spring-boot.png
        alt: 'Lesson11-spring-boot'

cover-image: 
    url: /assets/img/thumb/spring-boot-post.svg
    alt: Spring Boot Application
    title: Spring Boot Application

next-lesson:
    title: Lesson 12 - Integration testing part 3
    url: Lesson-12-integration-testing-3
    youtube-url: https://youtu.be/wTKs-XAgt2I

---

<span id="ezoic-pub-video-placeholder-13"></span>

<hr>

# POST Request

<hr>

## Controller

```
    
    @PostMapping("posts/{id}/comments")
    public Comment addComment(@RequestBody Comment comment, @PathVariable("id") int postId) {

        validateComment(comment, postId);

        comment.setPostId(postId);

        return commentService.createComment(comment);

    }

    private void validateComment(Comment comment, int postId) {
        if (postId < 1) {
            throw new InvalidParameterException();
        }

        if (comment.getId() > 0) {
            throw new InvalidParameterException();
        }

        if (comment.getMessage() == null || comment.getMessage().isEmpty()) {
            throw new InvalidParameterException();
        }
    }


```
{: .language-java}

## Service

```
    public Comment createComment(Comment comment) {
        
        if(comment.getPostId()<1) {
            throw new InvalidParameterException();
        }
        
        return commentRepository.save(comment);
    }


```
{: .language-java}

Please find the complete source code @ <https://github.com/JavaCodeHouse/comments-application>{:target="_blank" .url}
