import { useState } from 'react'
import Nav from './component/nav'
import NotePage from './component/note_page';
import HomePage from './component/home_page';
import AboutPage from './component/about_page';
import ExperiencePage from './component/experience_page';
import PortfolioPage from './component/portfolio_page';
import './App.css'
import { Switch, Route } from "react-router-dom";
function App() {

  return (
    <section className="all">
      <div className="left_section">
        <Nav />
      </div>
      <div className="right_section">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/experience">
            <ExperiencePage/>
          </Route>
          <Route path="/portfolio">
            <PortfolioPage/>
          </Route>
          <Route path="/note">
            <NotePage />
          </Route>
          <Route path="/*">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </section>
  )
}

export default App
