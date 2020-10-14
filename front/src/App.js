import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Curso from './components/Cursos'
import Chat from './components/Chat'

const App = ()=>(
  <Router>
    <Route path="/chat" exact component={Chat}/>
    <Route path="/cursos" component={Curso}/>
  </Router>
)

export default App;
