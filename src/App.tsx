import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Intro from "./components/Intro/Intro"
import Skills from "./components/Skills/Skills"


const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <Intro/>
      <Skills/>
    </>
  )
}

export default App
