# Testing Your Mocks

I want to write about a technique I picked up on a recent project that can be used to improve the robustness of a test suite. After all, what's more exciting than reliable tests? 

First, let's talk about what your test suite might look like at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.

You'll typically have two types of test that exercise this dependency. For now, let's call these functional tests and integration tests. Since these words are somewhat arbitrary, we'll define them too.

- ***Functional test*** 
    
    A functional test is one that exercises your system by mocking external dependencies; that is, it can run in isolation. These tests should be run to validate a change in your system. Typically, these tests run quickly and are used to cover many code paths.

- ***Integration test***

    An integration test is one that asserts on the behaviour assumed in functional tests. It must, by definition, run against a live version of the dependency. These tests should be run periodically in order to validate the behaviour of the external dependency. Typically, these tests are slow to run and therefore used to cover a restricted set of code paths.

Now, suppose that we have a good set of functional tests and a good set of integration tests. We're feeling pretty good about this, right? Our functional tests give us the confidence to refactor and change our system and the integration tests guard us against unexpected changes in the dependency.

So let's talk through what happens when an integration test fails. We jump in, learn the new behaviour of the dependency, change our integration tests and mocks to reflect this, and everything's sorted. Our functional tests might highlight issues with the new behaviour but that's cool, it's what they're there for.

Then suppose the same thing happens six months from now. You've shipped a bunch of features in the meantime and worked with other APIs. It takes you a bit of time to get up to speed but you manage to fix the failing test. You're getting a green build locally and you're just about to push when you remember you need to change the mocks! Phew... 

Now, think about two years from now. You've moved on to greener pastures but you're still keeping in touch with the team. You hear about the new grad that got put on a bug that had gone unresolved for weeks. They were not happy when they found the mock that was asserting on the wrong behaviour! Yep, you guessed it... another developer noticed a failing integration test, amended it but missed where that behaviour was being assumed, and went home with everything green but a bug in the system.

You might be thinking, how could you forget to change the mock? I buy that at least enough to talk about it. In this case, the developer did change a mock. They just missed the other one. Yes, there are two mocks. No, the code isn't perfect. But that's how we got to this point in the first place, so how do we deal with it?

This finally leads me on to the technique. The goal is to have something that alerts us when our mock behaves differently to our external dependency. So the question is,

Where do we assert on the assumed behaviour of the external dependency?

That's right, in the integration tests! So the answer is simple.

We run the integration tests against the external dependency and its mocks.

Then, whenever the dependency changes, our integration tests fail against the live dependency and we change them to reflect the new behaviour. Assuming our mocks fall short of the mark, these now cause the integration tests to fail and so we change these too. Finally, we can address any issues now highlighted in the functional suite.

And that's it...
