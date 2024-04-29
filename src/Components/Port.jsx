import React, { useState, useEffect, forwardRef } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import OrbitControlz from "./OrbitControlz";
import DiveButton from "./ButtonComponents/DiveButton";
import { PortTown } from "./ModelsComponents/PortTown";

// CSS with Styled Components
const Section = styled.div`
  height: 100vh;
  display: flex;
  background: white;
overflow:hidden;
  @media (max-width: 768px) {
    // flex-direction: column;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 100vw; 
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    order: 1; 

  }
`;

const Title = styled.h1`
  font-size: 35px;
  color: black;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Right = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    order: 2; 
  }
`;

const Iconlist = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 24px;
  color: light grey;
  justify-content: space-between;

  @media (max-width: 768px) {
    display:none;
  }
`;

const Span = styled.span`
  font-size: 15px;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px; 

  }
`;

// Port //
const Port = forwardRef(({ skillExploreRef }, ref) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section ref={ref}>
      <Container>
        {/* Left Side */}
        <Left>
          <Title> PORT-FOLIO </Title>
          <Span> 
            Nestled along the shimmering coast of the Digital Sea,
            the quaint Town of Port-Folio. Each dock hosts a diverse fleet of ships,
            representing an array of projects. A Majestic galleons adorned with intricate designs 
            mirror elaborate shopfront websites. Sleek racing yachts,
            with their streamlined profiles, symbolize high-performance 
            web applications, optimized for speed and efficiency. 
            Rustic fishing boats, each with a unique charm, 
            represent smaller, personal projects - 
            crafted with love and attention to detail. 
            Port-Folio serves not just as a portfolio of work,
            but as a harbor of creativity, innovation, 
            and endless possibility.
          </Span> 
          <Iconlist>           
            <DiveButton skillExploreRef={skillExploreRef}/>
          </Iconlist>
        </Left>

        {/* Right Side */}
        <Right>
          <Canvas camera={{ position: [80, 40, 30], fov: 45 }}>
            <Environment preset="lobby"/>
            {!isMobile && <OrbitControlz/>}
            <PortTown position={[-10, -7, 16]} scale={(.8)}/>
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
});

export default Port;