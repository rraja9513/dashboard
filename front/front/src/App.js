import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar_Component";
import Home from "./components/Home_Component";
import Magazines from "./components/Magazines_Component";
import About from "./components/About_Component";
import Article from "./components/Article_Component";
import Conference from "./components/Conference_Component";
import Contact from "./components/Contact_Component";
import Press from "./components/PressRelease_Component";
import Ranking from "./components/Ranking_Component";
import Tech from "./components/TechNews_Component";
import Mainstream from './article_pages/mainstream';
import Health from './article_pages/health';
import Pas from './article_pages/pas';
import Defence from './ranking_pages/defence';
import Quality from './ranking_pages/quality';
import Bpm from './ranking_pages/bpm';
import Ai from './tech_pages/ai';
import Techdata from './tech_pages/techdata';
import Trust from './tech_pages/trust';
function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={Home}/>
      <Route path="/magazines" exact component={Magazines}/>
      <Route path="/about" exact component={About}/>
      <Route path="/article" exact component={Article}/>
      <Route path="/conference" exact component={Conference}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/press" exact component={Press}/>
      <Route path="/ranking" exact component={Ranking}/>
      <Route path="/tech" exact component={Tech}/>
      <Route path="/mainstream" exact component={Mainstream}/>
      <Route path="/health" exact component={Health}/>
      <Route path="/pas" exact component={Pas}/>
      <Route path="/defence" exact component={Defence}/>
      <Route path="/quality" exact component={Quality}/>
      <Route path="/bpm" exact component={Bpm}/>
      <Route path="/ai" exact component={Ai}/>
      <Route path="/techdata" exact component={Techdata}/>
      <Route path="/trust" exact component={Trust}/>
    </Router>
  );
}

export default App;
