import React, { Component } from 'react';
import './App.css';
import './scss/portfolio.css';
import './scss/Bapcai.css';
import './scss/media.css';
import data from "./data.json"
import Header from './Component/Header';
import Banner from './Component/Banner';
import About from './Component/About';
import Exp from './Component/Exp';
import Project from './Component/Project';
import Service from './Component/Service';
import Review from './Component/Review';
import Post from './Component/Post';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { Letter } from './Component/Letter';
import { Alert, AlertContainer } from "react-bs-notifier";
import AlertInfomation from './Component/AlertInfomation';
import Ani from "./Component/Ani"
class App extends Component {
  
  render() {
    return (
      <div>
        <Header></Header>
        <AlertInfomation></AlertInfomation>
        <Banner></Banner>
        <About></About>
        <Exp></Exp>
        <Project></Project>
        <Service></Service>
        <Review></Review>
        <Post></Post>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}



export default App;
