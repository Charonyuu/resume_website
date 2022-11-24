import { useState } from 'react'
import Nav from './component/nav'
import Notepage from './component/note_page';
import Homepage from './component/home_page';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [page, setPage] = useState('home')

  return (
    <section className="all">
    <Nav page={page} setPage={setPage}/>
    <Switch>
        <Route exact path="/">
          <Homepage setPage={setPage}/>
        </Route>
        <Route path="/note">
          <Notepage />
        </Route>
      </Switch>
    </section>
  )
}

export default App
