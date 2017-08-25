import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

const article = ({match}) => (
  <div>
    <ul>
      <li>Article: {match.params.articleId}</li>
      <li>First paragraph...</li>
      <li>Second paragraph...</li>
    </ul>
  </div>
);

const home = () => (
  <div className="Board">
    <div className="Card">
      <ul><li><Link to="/articles/first-article">First article</Link></li></ul>
    </div>
    <div className="Card">
      <ul><li><Link to="/articles/second-article">Second article</Link></li></ul>
    </div>
    <div className="Card">
      <ul><li><Link to="/articles/third-article">Third article</Link></li></ul>
    </div>
    <div className="Card">
      <ul><li><Link to="/articles/fourth-article">Fourth article</Link></li></ul>
    </div>
    <div className="Card">
      <ul><li><Link to="/articles/fifth-article">Fifth article</Link></li></ul>
    </div>
  </div>
);

const about = () => (
  <div>
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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

      <Route exact path="/" component={home}/>
      <Route exact path="/about" component={about}/>
      <Route exact path="/articles/:articleId" component={article}/>
    </div>
  </Router>
);

export default app
