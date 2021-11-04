// React scroll
import { Element } from "react-scroll"
// Components
import Nav from './components/Nav'
import Title from './components/Title'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Element name="top">
        <Nav />
      </Element>
      <Title />
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Footer />
      </Element>
    </>
  );
}

export default App;
