[x] Outline

- Why should we mock?
    - Most of the classes we come across have dependencies. and often times methods delegates some of the work to other methods in other classes, and we call these classes dependencies. When unit testing such methods, if we only used JUnit, our tests will also depend on those methods as well. We want the unit tests to be independent of all other dependencies.
    - eg: we want to test the method addCustomer in CustomerService class, and within this addCustomer method, the save method of the CustomerDao class is invoked. We don't want to call the real implementation of the CustomerDao save() method for a few reasons:
        - We may not yet have implemented it.
        - We don't want the unit test of the addCustomer() fail if there is a defect in save() method in the CustomerDao.
        - We only want to test the logic inside the addCustomer() in isolation.
    - So we should some how mock the behavior of the dependencies. This is where mocking frameworks comes in to play.
    - Mockito famework is what I use for just this and in this post we'll see how to use mockito effectively to mock those dependencies.
- What is mockito?
    - - Mockito is a mocking framework that tastes really good. It lets you write beautiful tests with a clean & simple API. Mockito doesn’t give you hangover because the tests are very readable and they produce clean verification errors.  from http://site.mockito.org/
- How to inject mocks
    - So going back to the example above, how do we mock out the dependency using Mockito?
    - We inject a mock to the class under test instead of the real implementation while we run our tests.
    - Following is the class under test

public class CustomerService {

@Inject
private CustomerDao customerDao;

public boolean addCustomer(Customer customer){

if(customerDao.exists(customer.getPhone())){
     return false;
}

     return customerDao.save(customer);
}
public CustomerDao getCustomerDao() {
     return customerDao;
}

public void setCustomerDao(CustomerDao customerDao) {
     this.customerDao = customerDao;
}

}

- Following is the test

public class CustomerTest {

@Mock
private CustomerDao dao;

@InjectMocks
private CustomerService service;

@Before
public void setUp() throws Exception {

     MockitoAnnotations.initMocks(this);
}

@Test
public void test() {

     //assertion here
}

}

    - @Mock will create a mock implementation for the  CustomerDao
    - @ InjectMocks will inject the mocks marked with @Mock to this instance when it is created.
    - When or where are these instances of the class under test and the dependents are created?
        - It is done by this line  we added in the setUp method

MockitoAnnotations.initMocks(this);

        - So as you know, these instances would be created at the start of every test method this test class.
- When then pattern
    - Great! now we have successfully created and injected the mock, and then we should tell the mock how to behave when certain methods are called on it.
    - We do this in each of the test methods, the following line of code tells the Mockito framework that we want the save method of the mock doa instance to return true when passed in a certain customer instance

when(dao.save(customer)).thenReturn(true);

    - when is  static method of the Mockito class and it returns an
OngoingStubbing<T> (T is the return type of the method that we are mocking in this case it is boolean)
    - If we just extract that out

OngoingStubbing<Boolean> stub = when(dao.save(customer));

    - Following are some of the methods that we can call on this stub
        - thenReturn(returnValue)
        - thenThrow(exception)
        - thenCallRealMethod()
        - thenAnswer() - this could be used when we need to mock a void method.
    - Going back we simply put this all in one line

when(dao.save(customer)).thenReturn(true);

    - Do we really need to pass in an actual customer object to the save method here? No, we could use matchers like the following:

when(dao.save(any(Customer.class))).thenReturn(true);

    - However, when there are multiple parameters to the method, we cannot mix matcher and actual objects, for example we cannot do the following:

Mockito.when(mapper.map(any(), "test")).thenReturn(new Something());

    - `matchers can't be mixed with actual values in the list of arguments to a single method.` This would compile without a complaint but would fail during runtime.
    - We either have to use matchers for all parameters or should pass in real values or objects.
- Verify
    - Another great thing about mocking is that we can verify that certain methods have been called on those mock objects during test execution in addition to assertions or in place of assertions when the method under test is void.
    - There are two overloaded verify methods.
        - one which accepts only the mock object - we can use this if the method is supposed to be invoked only once.
        - the other accepts the mock and a `VerificationMode` - there are  quite a few methods in the Mockito class which provides some useful verificationModes
            - times(int wantedNumberOfInvocations)
            - atLeast( int wantedNumberOfInvocations )
            - atMost( int wantedNumberOfInvocations )
            - calls( int wantedNumberOfInvocations )
            - only( int wantedNumberOfInvocations )
            - atLeastOnce()
            - never()
    - eg:

package com.tdd;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class CustomerTest {

@Mock
private CustomerDao daoMock;

@InjectMocks
private CustomerService service;

@Before
public void setUp() throws Exception {

MockitoAnnotations.initMocks(this);
}

@Test
public void test() {

when(daoMock.save(any(Customer.class))).thenReturn(true);

Customer customer=new Customer();
assertThat(service.addCustomer(customer), is(true));

//verify that the save method has been invoked
verify(daoMock).save(any(Customer.class));
//the above is similar to :  verify(daoMock, times(1)).save(any(Customer.class));

//verify that the exists method is invoked one time
verify(daoMock, times(1)).exists(anyString());

//verify that the delete method has never been  invoked

verify(daoMock, never()).delete(any(Customer.class));
}

}

- Answer

- Spy

Notes:

- Spy -  when you want to verify calls to some real methods that you are calling internally

- Answer:


 when(repositoryMock.save(productTypeDomain)).then(returnsFirstArg());

<Object> Answer<Object> org.mockito.AdditionalAnswers.returnsFirstArg()
Returns the first parameter of an invocation.

This additional answer could be used at stub time using the then|do|willorg.mockito.stubbing.Answer methods. For example :
given(carKeyFob.authenticate(carKey)).will(returnsFirstArg());
doAnswer(returnsFirstArg()).when(carKeyFob).authenticate(carKey)

- Exceptions:

Verify does not work after the method throwing an exception is called.
Inorder to verify the only option is to use try catch method to testing

- Matchers:

matchers can't be mixed with actual values in the list of arguments to a single method.
The following works.
Mockito.when(mapper.map(any(), any())).thenReturn(new Something());
But the following does not work
Mockito.when(mapper.map(any(), "test")).thenReturn(new Something());