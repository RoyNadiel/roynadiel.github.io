import Layout from './Layout';
import Header from './components/layout/Header';
import SocialBar from './components/layout/SocialBar';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import Experience from './components/layout/Experience';
import AboutMe from './components/layout/AboutMe';
import ParticlesBackground from './components/layout/ParticlesBackground';


function App() {

  return (
    <>
     <ParticlesBackground />
     <Layout>
      <Header/>
      <SocialBar/>
      <Hero/>
      <Projects/>
      <Experience/>
      <AboutMe/>
     </Layout>
    </>
  )
}

export default App
