import React from 'react';
import {Button, Card} from 'react-bootstrap';
import './App.css';
import Header from './Components/News/Header';
import News from './Components/News/News';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <TopHeadline></TopHeadline>
      
    </div>
  );
}

export default App;
