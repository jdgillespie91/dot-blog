const articles = [
  {
    link: "/articles/testing-your-mocks",
    title: "Testing Your Mocks",
    summary: "Mocks can be a pain; here's some help.",
    backgroundColor: "#FFA69E",
    content: "# Testing Your Mocks\n" +
    "\n" +
    "I want to write about a technique I picked up on a recent project that can be used to improve the robustness of a test suite. After all, what's more exciting than reliable tests? \n" +
    "\n" +
    "First, let's talk about what your test suite might look like at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these functional tests and integration tests. Since these words are somewhat arbitrary, we'll define them too.\n" +
    "\n" +
    "- ***Functional test*** \n" +
    "    \n" +
    "    A functional test is one that exercises your system by mocking external dependencies; that is, it can run in isolation. These tests should be run to validate a change in your system. Typically, these tests run quickly and are used to cover many code paths.\n" +
    "\n" +
    "- ***Integration test***\n" +
    "\n" +
    "    An integration test is one that asserts on the behaviour assumed in functional tests. It must, by definition, run against a live version of the dependency. These tests should be run periodically in order to validate the behaviour of the external dependency. Typically, these tests are slow to run and therefore used to cover a restricted set of code paths.\n" +
    "\n" +
    "Now, suppose that we have a good set of functional tests and a good set of integration tests. We're feeling pretty good about this, right? Our functional tests give us the confidence to refactor and change our system and the integration tests guard us against unexpected changes in the dependency.\n" +
    "\n" +
    "So let's talk through what happens when an integration test fails. We jump in, learn the new behaviour of the dependency, change our integration tests and mocks to reflect this, and everything's sorted. Our functional tests might highlight issues with the new behaviour but that's cool, it's what they're there for.\n" +
    "\n" +
    "Then suppose the same thing happens six months from now. You've shipped a bunch of features in the meantime and worked with other APIs. It takes you a bit of time to get up to speed but you manage to fix the failing test. You're getting a green build locally and you're just about to push when you remember you need to change the mocks! Phew... \n" +
    "\n" +
    "Now, think about two years from now. You've moved on to greener pastures but you're still keeping in touch with the team. You hear about the new grad that got put on a bug that had gone unresolved for weeks. They were not happy when they found the mock that was asserting on the wrong behaviour! Yep, you guessed it... another developer noticed a failing integration test, amended it but missed where that behaviour was being assumed, and went home with everything green but a bug in the system.\n" +
    "\n" +
    "You might be thinking, how could you forget to change the mock? I buy that at least enough to talk about it. In this case, the developer did change a mock. They just missed the other one. Yes, there are two mocks. No, the code isn't perfect. But that's how we got to this point in the first place, so how do we deal with it?\n" +
    "\n" +
    "This finally leads me on to the technique. The goal is to have something that alerts us when our mock behaves differently to our external dependency. So the question is,\n" +
    "\n" +
    "Where do we assert on the assumed behaviour of the external dependency?\n" +
    "\n" +
    "That's right, in the integration tests! So the answer is simple.\n" +
    "\n" +
    "We run the integration tests against the external dependency and its mocks.\n" +
    "\n" +
    "Then, whenever the dependency changes, our integration tests fail against the live dependency and we change them to reflect the new behaviour. Assuming our mocks fall short of the mark, these now cause the integration tests to fail and so we change these too. Finally, we can address any issues now highlighted in the functional suite.\n" +
    "\n" +
    "And that's it..."
  },
  {
    link: "/articles/a-sad-tale",
    title: "A Sad Tale",
    summary: "He ran out of money, so he had to stop playing poker.",
    backgroundColor: "#FAF3DD",
    content: ""
  },
  {
    link: "/articles/the-door-car",
    title: "The Door Car",
    summary: "When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.",
    backgroundColor: "#B8F2E6",
    content: ""
  },
  {
    link: "/articles/running-out-of-imagination",
    title: "I'm Running Out of Imagination",
    summary: "The river stole the gods.",
    backgroundColor: "#D1B3C4",
    content: ""
  },
  {
    link: "/articles/cats-and-dogz",
    title: "Cats and Dogz",
    summary: "Cats are good pets, for they are clean and are not noisy.",
    backgroundColor: "#FFA69E",
    content: ""
  },
  {
    link: "/articles/the-girl-on-the-train",
    title: "The Girl on the Train",
    summary: "Two seats were vacant...",
    backgroundColor: "#FAF3DD",
    content: ""
  },
  {
    link: "/articles/the-rumourmonger",
    title: "The Rumourmonger",
    summary: "She did not cheat on the test, for it was not the right thing to do.",
    backgroundColor: "#B8F2E6",
    content: ""
  },
  {
    link: "/articles/day-and-night",
    title: "Day and Night",
    summary: "The sky is clear; the stars are twinkling.",
    backgroundColor: "#D1B3C4",
    content: ""
  },
  {
    link: "/articles/a-random-title",
    title: "A Random Title",
    summary: "The clock within this blog and the clock on my laptop are 1 hour different from each other.",
    backgroundColor: "#FFA69E",
    content: ""
  },
  {
    link: "/articles/a-strangely-long-article-title",
    title: "A Strangely Long Article Title... Maybe It's Too Long",
    summary: "The lake is a long way from here.",
    backgroundColor: "#FAF3DD",
    content: ""
  },
  {
    link: "/articles/third-article",
    title: "Ports and Adapters",
    summary: "Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.",
    backgroundColor: "#B8F2E6",
    content: ""
  },
  {
    link: "/articles/entering-vote",
    title: "Entering Vote",
    summary: "The entering vote coats the prepared editorial.",
    backgroundColor: "#D1B3C4",
    content: ""
  },
  {
    link: "/articles/castle",
    title: "Castle",
    summary: "The castle dresses without the desktop metric.",
    backgroundColor: "#FFA69E",
    content: ""
  },
  {
    link: "/articles/insecure-fog",
    title: "Insecure Fog",
    summary: "The insecure fog reiterates a peanut mankind.",
    backgroundColor: "#FAF3DD",
    content: ""
  },
  {
    link: "/articles/lens-cries-throughout-vein",
    title: "The Lens Cries Throughout the Vein",
    summary: "The lens cries throughout the vein!",
    backgroundColor: "#B8F2E6",
    content: ""
  },
  {
    link: "/articles/detector",
    title: "The Detector",
    summary: "Should a detector recover the compound connector?",
    backgroundColor: "#D1B3C4",
    content: ""
  },
  {
    link: "/articles/typesetting-nut",
    title: "The Typesetting Nut",
    summary: "Her typesetting nut discontinues the worry.",
    backgroundColor: "#FFA69E",
    content: ""
  },
  {
    link: "/articles/injury-toe-stem",
    title: "Injury",
    summary: "Will the injury toe the stem?",
    backgroundColor: "#FAF3DD",
    content: ""
  },
  {
    link: "/articles/ground-pound",
    title: "Ground Pound!",
    summary: "A ground pounds down upon the satisfying formula underneath the name.",
    backgroundColor: "#B8F2E6",
    content: ""
  },
  {
    link: "/articles/helicopter",
    title: "Helicopter",
    summary: "A preface rockets with a helicopter.",
    backgroundColor: "#D1B3C4",
    content: ""
  },
  {
    link: "/articles/skin-weds",
    title: "Skin Weds",
    summary: "Every sliced skin weds.",
    backgroundColor: "#FFA69E",
    content: ""
  },
  {
    link: "/articles/appendix",
    title: "Appendix",
    summary: "Near an appendix breathes the client.",
    backgroundColor: "#FAF3DD",
    content: ""
  }
];

module.exports = articles;
