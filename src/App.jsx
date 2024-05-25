import { useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Home from './componentes/pages/Home'
import Products from './componentes/pages/Products'
import Features from './componentes/pages/Features'
import About from './componentes/pages/About'
import Contact from './componentes/pages/Contact'

import ParticlesBackground from "./componentes/ParticlesBackground";
import Footer from "./componentes/Footer";


const App = () => {

  const [theme, setTheme] = useState('light')
  let tema = theme === 'light' ? "container " : "container dark"

  return (
    <>

      <div className={tema}  >

        <BrowserRouter >
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </BrowserRouter>
   
        <ParticlesBackground />



        <Footer />
       
      </div>

    </>
  )
}

export default App