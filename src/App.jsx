import React, {Suspense, useRef} from "react"
import styled, { createGlobalStyle } from "styled-components"

// Webpage//
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import Port from "./Components/Port.jsx"
import WaveSplit from "./Components/WaveSplit.jsx"
import SkillExplore from "./Components/SkillExplore.jsx"
import Ptester from "./Components/PTester.jsx"
import InfoDepth from "./Components/InfoDepth.jsx"
import Contact from "./Components/Contact.jsx"
import FooterComponent from "./Components/FooterComponent.jsx"
import LoadingScreen from "./LoadingScreen.jsx"


// css//
const Container = styled.div`
margin:0;
font-family: "Prata", serif;
scrollbar-width:null;
color:white;
background:white;
overflow-x:hidden;
`

const GlobalStyle = createGlobalStyle`
  body {margin: 0;}
`;



// App // 
function App() {

  // refs//
  const homeRef = useRef(null);
  const portRef = useRef(null);
  const skillExploreRef = useRef(null);
  const theDepthRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <Container>
        <LoadingScreen/>
      <GlobalStyle/>
      <Navbar
      homeRef={homeRef} 
      portRef={portRef} 
      skillExploreRef={skillExploreRef} 
      theDepthRef={theDepthRef} 
      contactRef={contactRef}
      />
      <Hero portRef={portRef} ref={homeRef}/>
      <Port ref={portRef} skillExploreRef={skillExploreRef}/>
     <WaveSplit/>
     <SkillExplore ref={skillExploreRef}/>
     <Ptester/>
     <InfoDepth ref={theDepthRef}/>
     <Contact ref={contactRef}/>
     <FooterComponent/>
    </Container>
  )
}

export default App
