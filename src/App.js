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
