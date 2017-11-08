import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import articles from './articles.js'

function Header() {
  return (
    <div className="header">
      <HomeHeader link="/"/>
    </div>
  )
}

function HomeHeader(props) {
  return <Link className="logo" to={props.link}>says</Link>
}

function Cards() {
  return (
    <div className="body">
      <div className="body-container">
        {articles.map(a => {
          return <Card link={a.link} title={a.title} summary={a.summary} backgroundColor={a.backgroundColor}/>
        })}
      </div>
    </div>
  )
}

function Card(props) {
  const style = {backgroundColor: props.backgroundColor};

  return (
    <Link className="card" to={props.link} style={style}>
      <div className="card-title">{props.title}</div>
      <div className="card-summary">{props.summary}</div>
    </Link>
  )
}

function About() {
  return (
    <div className="body">
      <div className="body-container">
        <div className="about">
          <ul>
            <li>Email: foo</li>
            <li>Phone: bar</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Article({match}) {
  const a = articles.filter(x => x.link === "/articles/" + match.params.articleId)[0];
  const style = {backgroundColor: a.backgroundColor};

  return (
    <div className="body" style={style}>
      <div className="body-container" style={style}>
        <div className="article" style={style}>
          <ul>
            <li>Article: {match.params.articleId}</li>
            <li>First paragraph...</li>
            <li>Second paragraph...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <AboutFooter link="/about"/>
    </div>
  )
}

function AboutFooter(props) {
  return <Link className="about-link" to={props.link}>about</Link>
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Route exact path="/" component={Cards}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/articles/:articleId" component={Article}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
