---

layout: lesson
comments: true

title:  "REST API with Spring Boot | Lesson 10 | Integration Testing Part 2"
date:   2021-09-26
categories: courses/spring-boot
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: "Integration Testing Part 2"
excerpt_separator: <!--more-->

youtube:
    url: https://youtu.be/YMgNyfuTtz8
    image:
        url: /assets/img/spring-boot-course/Lesson 10 - Integration testing - part 2.png
        alt: 'Integration Testing Part 2'

cover-image: 
    url: /assets/img/spring-boot-course/Lesson 10 - Integration testing - part 2.png
    alt: Spring Boot Application
    title: Spring Boot Application

next-lesson:
    title: Lesson 11 - Endpoint Implementation To Save A Comment
    url: Lesson-11-save-endpoint-testing-implementation
    youtube-url: https://youtu.be/fMHOldR44rQ

---

<hr>

# How to Preload H2 Database For Integration Testing

<hr>

The cool thing about spring boot is that we don't have to worry about database configuration for our testing. Because we added the h2 dependency at the begining, it configures an in memeory database for us, all ready for our testing purposes. Now all I have to do is to pre-load it with my test data. There are a few ways to do this.

### Three options to preload the database for testing purposes

1. Inject the repository in to the test class and save values directly through that. 

2. Use @Sql or @SqlGroup annotation to execute a set of sql statements. These annotaitons can be used on both class and method levels

3. Create a script file in src/integration-test/resources folder and add all the insert statements there, it will be executed during applciation loading.

For my testing, I'll use a combination of the last two methods.


## Using a Script file to preload the database


- Create a new source folder, in `src/integration-test` called `resources`.

- In there, create a file named `test-data.sql`

- Add some insert statements in this file.

- Use the `@Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/test-data.sql")` annotation over the test method or class to run the script before the test.

:bulb: If you named this file `import.sql`, it will be picked up by hibernate automatically to pre-load the database, and you don't have to use the @Sql annotation.
{: .border-box}


#### Example test-data.sql file

```
insert into `comment` (post_id, message) values (1, 'test comment1');

insert into `comment` (post_id, message) values (1, 'test comment2');

insert into `comment` (post_id, message) values (1, 'test comment3');

insert into `comment` (post_id, message) values (1, 'test comment4');

```
{: .language-sql}

#### Code example - using the script file to pre-load the database

```

    @Test
    @Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/test-data.sql")
    public void getCommentsByPostId_whenDataPresent_returnsAllvalues() throws Exception {

        mvc.perform(get("/posts/1/comments")).andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.[0].postId", is(1))).andExpect(jsonPath("$.[0].message", is("test comment1")))
                .andDo(print());
    }

```
{: .language-java}

## Using @Sql and @SqlGroup annotations to execute a set of sql statements

This is best done with an example. In the above example I have used the @Sql annotation to run the script file to load some data, but after the test execution, I want to remove all the data to clear the database for my other tests. This can be done with a single sql statement. So I would use another @Sql annotation to run the delete statement like so, `@Sql(executionPhase = ExecutionPhase.AFTER_TEST_METHOD, statements = "delete from comment;")`.

I would also use the @SqlGroup annotation to group these together.

#### Code example - using the @Sql and @SqlGroup annotation to execute a set of sql statements

```
@Test
    @SqlGroup({ @Sql(executionPhase = ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/test-data.sql"),
            @Sql(executionPhase = ExecutionPhase.AFTER_TEST_METHOD, statements = "delete from comment;") })
    public void getCommentsByPostId_whenDataPresent_returnsAllvalues() throws Exception {

        mvc.perform(get("/posts/1/comments")).andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.[0].postId", is(1))).andExpect(jsonPath("$.[0].message", is("test comment1")))
                .andDo(print());
    }

```
{: .language-java}

<hr>

# How to test the REST API response 

<hr>

The response is a JSON, so I will use json path expressions to check that I'm getting the correct response. The [documentation](https://github.com/json-path/JsonPath){:target="_blank"} provide all the expresstions that can be used.

Following are some exapmles that I used in my testing.

```
jsonPath("$").isArray()
jsonPath("$.[0].postId", is(1))
jsonPath("$.[0].message", is("test comment1"))
jsonPath("$.id", is(greaterThan(0)))
jsonPath("$.length()", is(1))
```
{: .language-java}

Please find the complete source code @ <https://github.com/JavaCodeHouse/comments-application>{:target="_blank"}


