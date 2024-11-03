import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Achievements from './pages/Achievements';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/skills' Component={Skills} />
          <Route path='/projects' Component={Projects} />
          <Route path='/education' Component={Education} />
          <Route path='/achievements' Component={Achievements} />

        </Routes>
    </>
  )
}

export default App
