import React from 'react';
import {Button, Card} from 'react-bootstrap';
import './App.css';
import Header from './Components/News/Header';
import News from './Components/News/News';
import Fragment from './Components/Fragment/Fragment.js'
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
