import React from "react"

import { About, Intro, NavBar, Projects, Skills } from "./components"

const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <Intro/>
      <Skills/>
      <About/>
      <Projects/>
    </>
  )
}

export default App
