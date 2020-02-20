---
layout: post
comments: true
title:  "How to unit test with JUnit 4 (Junit 4 tutorial with examples)"
date:   2017-04-26 13:33:41 +1100
categories: blog
markdown_ext: "markdown, mkdown, mkdn, mkd, md"
description: In this tutorial we will look into the basics of JUnit 4 which are essential to writting quality unit tests that makes sense and are easy to maintain.
excerpt_separator: <!--more-->
cover-image: 
    url: /assets/img/junit/junit.png
    alt: How to write great unit tests with JUnit
    title: How to write great unit tests with JUnit
    
images: 
  - url: /assets/img/junit/junit.png
    alt: How to write great unit tests with JUnit
    title: How to write great unit tests with JUnit

  - url: /assets/img/junit/method-execution-stack.png
    alt: JUnit4 annotated method execution order
    title: JUnit4 annotated method execution order
    max-width: 225px

redirect_from:
  - /junit-tutorial

aside: true
content-upgrade:
    title: SOURCE CODE
    text: Download the example source code for this post.
    img: /assets/img/download-side.png
    list-builder-id: f3470674-5ce6-4f33-b483-d1a544b38131
    mailmunch-href: mailmunch-pop-743283

ads:
    - url: /courses/the-spring-boot-course
      img: 
        url: /assets/img/spring-boot-course/course-ad.png
        alt: Spring Boot Course
        title: Spring Boot Course

    
---

In this tutorial we will look into the basics of JUnit 4 which are essential to writting quality unit tests that makes sense and are easy to maintain.

1. [How to use the basic annotations of JUnit4](#junit4---basic-annotations)
2. [How to use assertions in JUnit4](#junit4---assertions)
3. [Exceptions testing in JUnit4](#junit4---exceptions-testing)
4. [JUnit4 Parameterized tests](#junit4---parameterized-tests)

<!--more-->

<hr>

## JUnit4 - Basic annotations

<hr> 

### Following are the most commonly used annotations and their usage in a basic unit test written in JUnit 4.

- `@Test` - Marks the method as a test method.
- `@Before` and `@After` sandwiches **each test method** in the class.
- `@BeforeClass` and `@AfterClass` sandwiches **all of the test methods** in a JUnit test class. 

### Following is the execution order of the above mentioned methods when a JUnit4 test is run.

<div class="col-container pd-bt-1">

<div class="col-1" markdown="1">

1. Method annotated with `@BeforeClass`
2. Method annotated with `@Before`
3. First method annotated with `@Test` i.e. `test1()`.
4. Method annotated with `@After`    
5. Method annotated with `@Before`
6. Second method annotated with `@Test` i.e. `test2()`.
7. Method annotated with `@After`
8. Method annotated with `@AfterClass`
    
</div>  

<div class="col-2">

{% assign image = page.images[1] %}
{% include image.html image=image %}
    
</div> 
</div>



~~~
    public class SampleTest {

        @BeforeClass
        public static void setUpBeforeClass() throws Exception {
            
            
            //Method annotated with `@BeforeClass` will execute once before any of the test methods in this class.

            //This method could be used to set up any test fixtures that are computationally expensive and shared by several test methods. e.g. establishing database connections 

            //Sometimes several tests need to share computationally expensive setup (like logging into a database). While this can compromise the independence of tests, sometimes it is a necessary optimization. From http://junit.sourceforge.net/javadoc/org/junit/BeforeClass.html
           
        }

        @AfterClass
        public static void tearDownAfterClass() throws Exception {
            
            //Method annotated with `@AfterClass` will execute once after all of the test methods are executed in this class.

            //If you allocate expensive external resources in a BeforeClass method you need to release them after all the tests in the class have run. Annotating a public static void method with @AfterClass causes that method to be run after all the tests in the class have been run. All @AfterClass methods are guaranteed to run even if a BeforeClass method throws an exception. From http://junit.sourceforge.net/javadoc/org/junit/AfterClass.html
        }

        @Before
        public void setUp() throws Exception {
             //Method annotated with `@Before` will execute before each test method in this class is executed.

             //If you find that several tests need similar objects created before they can run this method could be used to do set up those objects (aka test-fixtures).
        }
        
        @After
        public void tearDown() throws Exception {
             
             //Method annotated with `@After` will execute after each test method in this class is executed.

             //If you allocate external resources in a Before method you must release them in this method.
        }

        @Test
        public void test1() {
           
           //A public void method annotated with @Test will be executed as a test case.
        }

        @Test
        public void test2() {
   
            //Another test cases
        }

    }
~~~
{: .language-java}


<div class="center">
{% assign ad = page.ads[0] %}
{% include inline-ad.html ad=ad %}
</div>


<hr>

## JUnit4 - Assertions

<hr> 


##### When it comes to assertions, there is the set of old JUnit assertions such as:

- org.junit.Assert.assertArrayEquals
- org.junit.Assert.assertEquals
- org.junit.Assert.assertFalse
- org.junit.Assert.assertNotNull
- org.junit.Assert.assertNotSame
- org.junit.Assert.assertNull
- org.junit.Assert.assertSame
- org.junit.Assert.assertTrue

##### And the `org.junit.Assert.assertThat` method (available in JUnit4) which uses matchers and is better than old style assertions because it provides:

 - Better readability
    + `assertThat(actual, is(equalTo(expected)));` is better than `assertEquals(expected, actual);`
    + `assertThat(actual, is(not(equalTo(expected))));` is better than `assertFalse(expected.equals(actual));`
 - Better failiure messages
    + `java.lang.AssertionError: Expected: is "hello" but: was "hello world"` is better than 

        `org.junit.ComparisonFailure: expected:<hello[]> but was:<hello[ world]>`
 - Flexbility
    + Multiple conditions could be asserted using matchers like `anyOf` or `allOf`. 

        eg: `assertThat("hello world", anyOf(is("hello world"), containsString("hello")));` In this case, the test will pass if either the actual string is "hello world" or if it contains the word "hello".

##### Following is a list of hamcrest coreMatchers from the [hamcrest docs](http://hamcrest.org/JavaHamcrest/javadoc/1.3/org/hamcrest/CoreMatchers.html){:target="_blank"}. 


{::nomarkdown}<ul> <li> allOf </li> <li> any </li> <li> anyOf </li> <li> anything </li> <li> both </li> <li> containsString </li> <li> describedAs </li> <li> either </li> <li> endsWith </li> <li> equalTo </li>   </ul> {:/}    | {::nomarkdown} <ul> <li> everyItem </li>  <li> hasItems </li> <li> instanceOf </li> <li> is </li> <li> isA </li> <li> not </li> <li> notNullValue </li> <li> nullValue </li> <li> sameInstance </li> <li> startsWith </li> <li> theInstance </li> </ul> {:/} 


### How to use `assertThat` with `hamcrest` matches.

~~~~
@Test
public void testAssetThatExamples() {

    // 'theString' should contain 'S' and 'r'
    assertThat("theString", both(containsString("S")).and(containsString("r")));

    List<String> items = Arrays.asList("John", "James", "Julia", "Jim");

    // items list should have James and Jim
    assertThat(items, hasItems("James", "Jim"));

    // Every item in the list should have the character 'J'
    assertThat(items, everyItem(containsString("J")));

    // check all of the matchers
    assertThat("Once", allOf(equalTo("Once"), startsWith("O")));

    // negation of all of the matchers
    assertThat("Once", not(allOf(equalTo("test"), containsString("test"))));
}
~~~~
{: .language-java}


[JUnit4 wiki for Assertions](https://github.com/junit-team/junit4/wiki/Assertions){:target="_blank"} contains a list of examples for each of the assertions mentioned above. Also [this](https://objectpartners.com/2013/09/18/the-benefits-of-using-assertthat-over-other-assert-methods-in-unit-tests){:target="_blank"} is a comprehensive post on `assertThat`. I like the table at the end the most, which is a comparison of the `assertThat` with the old style assert methods, very useful.



<div>
  {% include content-upgrade-inline.html %}  
</div>

<hr>

## JUnit4 - Exceptions testing

<hr> 

Does your method throw exceptions? There are a few different ways to verify whether expected exceptions are thrown, given the conditions.
For example, we need a method which reads a file and it throws file not found exception with the message "The file 'file_name' does not exist!". We can test if the file not found exception is thrown in a number of ways. The first is the simplest and the most straight forward way which is preferred, but if we need to test the exception message as well, we could make use of the other two.

### Following are the three different ways to test that a method would throw the expected exception. 

 1. Set the `expected` parameter `@Test(expected = FileNotFoundException.class)`.

    ~~~~
    @Test(expected = FileNotFoundException.class) 
        public void testReadFile() throws IOException { 
            FileReader reader = new FileReader("test.txt");
            reader.read();
            reader.close();
        }
    ~~~~
    {: .language-java}


 2. Using `try` `catch`

    ~~~
    @Test
        public void testReadFile2() { 
            try {
                FileReader reader = new FileReader("test.txt");
                reader.read();
                reader.close();
                fail("Expected an IOException to be thrown");
            } catch (IOException e) {
                assertThat(e.getMessage(), is("test.txt (No such file or directory)"));
            }
                 
        }
    ~~~
    {: .language-java}

 3. Testing with `ExpectedException` Rule.

    ~~~
     @Rule
        public ExpectedException thrown = ExpectedException.none();

        @Test
        public void testReadFile3() throws IOException {
                
            thrown.expect(IOException.class);
            thrown.expectMessage(startsWith("test.txt (No such file or directory)"));
            FileReader reader = new FileReader("test.txt");
            reader.read();
            reader.close();
        }
    ~~~
    {: .language-java}

You could read more about exceptions testing in [JUnit4 wiki for Exception testing](https://github.com/junit-team/junit4/wiki/Exception-testing){:target="_blank"}  and [bad.robot - Expecting Exceptions JUnit Rule](http://baddotrobot.com/blog/2012/03/27/expecting-exception-with-junit-rule/index.html){:target="_blank"}.


<hr>

## JUnit4 - Parameterized tests

<hr>

Often times we need to test a single method with several different test data or inputs and `Parameterized` tests are very useful to maintain a very clean and readable tests in such cases.

e.g. In the following example, the `getTotalCharactersWithoutSpaces` method will count the number of characters ignoring any whitespace. We need to test this with different test input samples. Without Parameterized test, we would have to repeat the assertion for each of the test data which would make tests less readable and maintainable over time.

~~~
@RunWith(Parameterized.class)
public class GreetingTest {

    @Parameters
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][] {
                 { "hello world", 10 }, { "helloworld", 10 }, { "hello", 5 }
                 //The first item in the array is the input, and second is the expected outcome.
           });
    }

    private String input;
    private int expected;
    
    //This constructor must be provided for the parameterized tests to work.
    public GreetingTest(String input, int expected) {
        this.input = input;
        this.expected = expected;
    }
    
    @Test
    public void test() {
        
        Greeting greeting = new Greeting();
        assertThat(greeting.getTotalCharactersWithoutSpaces(input), is(expected));
    }

}
~~~
{: .language-java}

Again more elaborated examples could be found in the [JUnit4 wiki for Parameterized tests](https://github.com/junit-team/junit4/wiki/Parameterized-tests){:target="_blank"}



Have you tried **TDD**? check this out! [Get started with Test Driven Development (A beginner's guide)]({% post_url 2016-12-30-test-driven-development-tutorial %})

Please leave a comment and let me know if you liked it!
