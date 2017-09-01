import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const article = ({match}) => (
  <div className="Article">
    <ul>
      <li>Article: {match.params.articleId}</li>
      <li>First paragraph...</li>
      <li>Second paragraph...</li>
    </ul>
  </div>
);

const home = () => {
  const articles = [
    {
      link: "/articles/first-article",
      title: "First article",
      summary: "Hello, world!"
    },
    {
      link: "/articles/a-sad-tale",
      title: "A Sad Tale",
      summary: "He ran out of money, so he had to stop playing poker."
    },
    {
      link: "/articles/the-door-car",
      title: "The Door Car",
      summary: "When I was little I had a car door slammed shut on my hand. I still remember it quite vividly."
    },
    {
      link: "/articles/running-out-of-imagination",
      title: "I'm Running Out of Imagination",
      summary: "The river stole the gods."
    },
    {
      link: "/articles/cats-and-dogz",
      title: "Cats and Dogz",
      summary: "Cats are good pets, for they are clean and are not noisy."
    },
    {
      link: "/articles/the-girl-on-the-train",
      title: "The Girl on the Train",
      summary: "Two seats were vacant..."
    },
    {
      link: "/articles/the-rumourmonger",
      title: "The Rumourmonger",
      summary: "She did not cheat on the test, for it was not the right thing to do."
    },
    {
      link: "/articles/day-and-night",
      title: "Day and Night",
      summary: "The sky is clear; the stars are twinkling."
    },
    {
      link: "/articles/a-random-title",
      title: "A Random Title",
      summary: "The clock within this blog and the clock on my laptop are 1 hour different from each other."
    },
    {
      link: "/articles/a-strangely-long-article-title",
      title: "A Strangely Long Article Title... Maybe It's Too Long",
      summary: "The lake is a long way from here."
    },
    {
      link: "/articles/third-article",
      title: "Ports and Adapters",
      summary: "Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard."
    },
    {
      link: "/articles/entering-vote",
      title: "Entering Vote",
      summary: "The entering vote coats the prepared editorial."
    },
    {
      link: "/articles/castle",
      title: "Castle",
      summary: "The castle dresses without the desktop metric."
    },
    {
      link: "/articles/insecure-fog",
      title: "Insecure Fog",
      summary: "The insecure fog reiterates a peanut mankind."
    },
    {
      link: "/articles/lens-cries-throughout-vein",
      title: "The Lens Cries Throughout the Vein",
      summary: "The lens cries throughout the vein!"
    },
    {
      link: "/articles/detector",
      title: "The Detector",
      summary: "Should a detector recover the compound connector?"
    },
    {
      link: "/articles/typesetting-nut",
      title: "The Typesetting Nut",
      summary: "Her typesetting nut discontinues the worry."
    },
    {
      link: "/articles/injury-toe-stem",
      title: "Injury",
      summary: "Will the injury toe the stem?"
    },
    {
      link: "/articles/ground-pound",
      title: "Ground Pound!",
      summary: "A ground pounds down upon the satisfying formula underneath the name."
    },
    {
      link: "/articles/helicopter",
      title: "Helicopter",
      summary: "A preface rockets with a helicopter."
    },
    {
      link: "/articles/skin-weds",
      title: "Skin Weds",
      summary: "Every sliced skin weds."
    },
    {
      link: "/articles/appendix",
      title: "Appendix",
      summary: "Near an appendix breathes the client."
    }
  ];

  return (
    <div className="Board">
      {articles.map(a => {
        return (
          <Link to={a.link} className="Card">
            <div className="CardTitle">{a.title}</div>
            <div className="CardSummary">{a.summary}</div>
          </Link>
        )
      })}
    </div>
  )
};

const about = () => (
  <div className="About">
    <ul>
      <li>Email: foo</li>
      <li>Phone: bar</li>
    </ul>
  </div>
);

const app = () => (
  <Router>
    <div>
      <div className="Header">
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Route exact path="/" component={home}/>
      <Route exact path="/about" component={about}/>
      <Route exact path="/articles/:articleId" component={article}/>
    </div>
  </Router>
);

export default app
