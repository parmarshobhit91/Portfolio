import './App.css'
import { Element } from 'react-scroll'


import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'


function App() {

  return (
    <div>
      <Navbar />

      <div className='container mx-auto md:mx-48 my-10'>
        <Element name='home'>
          <Home />
        </Element>

        <Element name='about'>
          <About />
        </Element>

        <Element name='skills'> 
          <Skills />
        </Element>

        <Element name='experience'>
          <Experience />
        </Element>

        <Element name='projects'>
          <Projects />
        </Element>

        <Element name='contact'>
          <Contact />
        </Element>

      </div>
      <Footer />
    </div>
  )
}

export default App
