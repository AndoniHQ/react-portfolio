import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ParticlesBg from './components/Particles'

function App() {
  return (
    <>
      <div>
        <ParticlesBg/>
        <Navbar/>
        <Home/>
        <About/>
        <Technologies/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
