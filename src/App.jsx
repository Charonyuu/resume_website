import Nav from './component/nav'
import NotePage from './component/note_page';
import HomePage from './component/home_page';
import AboutPage from './component/about_page';
import ExperiencePage from './component/experience_page';
import PortfolioPage from './component/portfolio_page';
import SingleNotePage from './component/single_note_page';
import { Switch, Route } from "react-router-dom";
function App() {

  return (
        <Switch>
          <Route path="/about">
            <Nav><AboutPage/></Nav>
          </Route>
          <Route path="/experience">
            <Nav><ExperiencePage/></Nav>
          </Route>
          <Route path="/portfolio">
            <Nav><PortfolioPage/></Nav>
          </Route>
          <Route path="/note/:id">
            <SingleNotePage />
          </Route>
          <Route path="/note">
            <Nav><NotePage /></Nav>
          </Route>
          <Route exact path="/">
            <Nav><HomePage /></Nav>
          </Route>
        </Switch>
  )
}

export default App
