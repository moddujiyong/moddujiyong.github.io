import React from 'react';
import Top from './components/top/Top';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Gallery from './pages/gallery/Gallery';
import Members from './pages/members/Members';
import Research from './pages/research/Research';

import "./App.scss"; 

import Publication from './pages/publication/Publication';
import PublicationCHO from './pages/publication/PublicationCHO';

import Contact from './pages/contact/Contact';




function App() {



  return (
     <div className="App">
    
       <Router basename={process.env.PUBLIC_URL}>
         <>
            <Switch>
         
              <Route exact path="/">   <Top/><Home/><Footer/> </Route>
              <Route path="/members" component={Members}> <Top/><Members/><Footer/></Route>
              <Route exact path="/research" component={Research}> <Top/><Research/><Footer/></Route>
              <Route exact path="/research/clinical"> <Top/><Research/><Footer/></Route>
              <Route exact path="/research/uxui"> <Top/><Research/><Footer/></Route>
              <Route exact path="/research/industry" > <Top/><Research/><Footer/></Route>
              <Route exact path="/research/bio"> <Top/><Research/><Footer/></Route>
              <Route path="/publication" component={Publication}> <Top/><Publication/><Footer/></Route>
              <Route path="/contact" component={Contact}> <Top/><Contact/><Footer/></Route>
              <Route path="/gallery" component={Gallery}> <Top/><Gallery/><Footer/></Route>
        
            </Switch>
  
         </>
       </Router>

    
    </div>
  );
}

export default App;
