import React from "react"
import Navbar from "./components/nav"
import Slider from "./components/slider"
import About from "./components/about"
import Tour from "./components/tour"
import Contact from "./components/contact"
import Footer from "./components/footer"

function App() {

  return (
    <div>
      <Navbar/>
      <Slider/>
      <About/>
      <Tour/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
