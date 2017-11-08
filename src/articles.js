const articles = [
  {
    link: "/articles/first-article",
    title: "First article",
    summary: "Hello, world!",
    backgroundColor: "#FFA69E",
    content: "I want to write about a technique I picked up on a recent project that can be used to improve the robustness of a test suite... After all, what's more exciting than a reliable tests?\n" +
    "\n" +
    "First, let's talk about what your test suite might look at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these _functional_ tests and _integration_ tests. Since these words are somewhat arbitrary, we'll define them too.\n" +
    "\n" +
      "First, let's talk about what your test suite might look at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these _functional_ tests and _integration_ tests. Since these words are somewhat arbitrary, we'll define them too.\n" +
    "\n" +
    "First, let's talk about what your test suite might look at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these _functional_ tests and _integration_ tests. Since these words are somewhat arbitrary, we'll define them too.\n" +
    "\n" +
    "First, let's talk about what your test suite might look at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these _functional_ tests and _integration_ tests. Since these words are somewhat arbitrary, we'll define them too.\n" +
    "\n" +
    "First, let's talk about what your test suite might look at the moment. Suppose that you have an application with some external dependency. Maybe you're pulling data from someone's API. Maybe you're a consumer of some event source. Whatever it is, it's external and can change at any time and you need to be on top of it.\n" +
    "\n" +
    "You'll typically have two types of test that exercise this dependency. For now, let's call these _functional_ tests and _integration_ tests. Since these words are somewhat arbitrary, we'll define them too.\n"
  },
  {
    link: "/articles/a-sad-tale",
    title: "A Sad Tale",
    summary: "He ran out of money, so he had to stop playing poker.",
    backgroundColor: "#FAF3DD"
  },
  {
    link: "/articles/the-door-car",
    title: "The Door Car",
    summary: "When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.",
    backgroundColor: "#B8F2E6"
  },
  {
    link: "/articles/running-out-of-imagination",
    title: "I'm Running Out of Imagination",
    summary: "The river stole the gods.",
    backgroundColor: "#D1B3C4"
  },
  {
    link: "/articles/cats-and-dogz",
    title: "Cats and Dogz",
    summary: "Cats are good pets, for they are clean and are not noisy.",
    backgroundColor: "#FFA69E"
  },
  {
    link: "/articles/the-girl-on-the-train",
    title: "The Girl on the Train",
    summary: "Two seats were vacant...",
    backgroundColor: "#FAF3DD"
  },
  {
    link: "/articles/the-rumourmonger",
    title: "The Rumourmonger",
    summary: "She did not cheat on the test, for it was not the right thing to do.",
    backgroundColor: "#B8F2E6"
  },
  {
    link: "/articles/day-and-night",
    title: "Day and Night",
    summary: "The sky is clear; the stars are twinkling.",
    backgroundColor: "#D1B3C4"
  },
  {
    link: "/articles/a-random-title",
    title: "A Random Title",
    summary: "The clock within this blog and the clock on my laptop are 1 hour different from each other.",
    backgroundColor: "#FFA69E"
  },
  {
    link: "/articles/a-strangely-long-article-title",
    title: "A Strangely Long Article Title... Maybe It's Too Long",
    summary: "The lake is a long way from here.",
    backgroundColor: "#FAF3DD"
  },
  {
    link: "/articles/third-article",
    title: "Ports and Adapters",
    summary: "Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.",
    backgroundColor: "#B8F2E6"
  },
  {
    link: "/articles/entering-vote",
    title: "Entering Vote",
    summary: "The entering vote coats the prepared editorial.",
    backgroundColor: "#D1B3C4"
  },
  {
    link: "/articles/castle",
    title: "Castle",
    summary: "The castle dresses without the desktop metric.",
    backgroundColor: "#FFA69E"
  },
  {
    link: "/articles/insecure-fog",
    title: "Insecure Fog",
    summary: "The insecure fog reiterates a peanut mankind.",
    backgroundColor: "#FAF3DD"
  },
  {
    link: "/articles/lens-cries-throughout-vein",
    title: "The Lens Cries Throughout the Vein",
    summary: "The lens cries throughout the vein!",
    backgroundColor: "#B8F2E6"
  },
  {
    link: "/articles/detector",
    title: "The Detector",
    summary: "Should a detector recover the compound connector?",
    backgroundColor: "#D1B3C4"
  },
  {
    link: "/articles/typesetting-nut",
    title: "The Typesetting Nut",
    summary: "Her typesetting nut discontinues the worry.",
    backgroundColor: "#FFA69E"
  },
  {
    link: "/articles/injury-toe-stem",
    title: "Injury",
    summary: "Will the injury toe the stem?",
    backgroundColor: "#FAF3DD"
  },
  {
    link: "/articles/ground-pound",
    title: "Ground Pound!",
    summary: "A ground pounds down upon the satisfying formula underneath the name.",
    backgroundColor: "#B8F2E6"
  },
  {
    link: "/articles/helicopter",
    title: "Helicopter",
    summary: "A preface rockets with a helicopter.",
    backgroundColor: "#D1B3C4"
  },
  {
    link: "/articles/skin-weds",
    title: "Skin Weds",
    summary: "Every sliced skin weds.",
    backgroundColor: "#FFA69E"
  },
  {
    link: "/articles/appendix",
    title: "Appendix",
    summary: "Near an appendix breathes the client.",
    backgroundColor: "#FAF3DD"
  }
];

module.exports = articles;
