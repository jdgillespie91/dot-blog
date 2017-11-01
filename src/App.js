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

const home = () => (
  <div className="Board">
    <Link to="/articles/first-article" className="Card">
      <ul>
        <li>First article</li>
      </ul>
    </Link>
    <Link to="/articles/second-article" className="Card">
      <ul>
        <li>Second article</li>
      </ul>
    </Link>
    <Link to="/articles/third-article" className="Card">
      <ul>
        <li>Third article</li>
      </ul>
    </Link>
    <Link to="/articles/fourth-article" className="Card">
      <ul>
        <li>Fourth article</li>
      </ul>
    </Link>
    <Link to="/articles/fifth-article" className="Card">
      <ul>
        <li>Fifth article</li>
      </ul>
    </Link>
  </div>
);

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
