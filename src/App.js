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
          <Top/>
            <Switch>
         
              <Route exact path="/"><Home/></Route>
              <Route path="/members" component={Members}><Members/></Route>
              <Route exact path="/research" component={Research}><Research/></Route>
              <Route exact path="/research/clinical"><Research/></Route>
              <Route exact path="/research/uxui"><Research/></Route>
              <Route exact path="/research/industry" ><Research/></Route>
              <Route exact path="/research/bio"><Research/></Route>
              <Route path="/publication" component={Publication}><Publication/></Route>
              <Route path="/contact" component={Contact}><Contact/></Route>
              <Route path="/gallery" component={Gallery}><Gallery/></Route>
        
            </Switch>
          <Footer/> 
         </>
       </Router>

    
    </div>
  );
}

export default App;
