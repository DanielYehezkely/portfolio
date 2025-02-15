import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/Skills"
import About from "./components/About/About"


const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <Intro/>
      <Skills/>
      <About/>
    </>
  )
}

export default App
