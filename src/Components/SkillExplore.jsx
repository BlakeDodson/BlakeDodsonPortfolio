import React, {forwardRef, Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Environment, OrbitControls } from "@react-three/drei";

// Models//
import { SkillsReef } from "./ModelsComponents/SkillsReef";


// Styled Components
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: auto;
    width:auto;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  background-color: #0f5e9c;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    width:auto;
  }
`;

const DivTester4 = styled.div`
  flex: 1;
  background-color: #0f5e9c;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 50vh; 
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Click = styled.img`
  height: 50px;
  width: 50px;
  @media (max-width: 768px) {
   height:15px;
   width:15px;
  }
`;

const P = styled.p`
  @media (max-width: 768px) {
    text-align: center;
    font-size:12px;
  }
`;

const P2 = styled.p`
display:none;

  @media (max-width: 768px) {
    display:block;
    text-align: center;
    font-size:12px;
  }
`;


const Cubeloader = () =>{
  return(
<mesh>
  <meshBasicMaterial/>
  <boxGeometry/>
</mesh>
  )
} 
// Explore Component//
const SkillExplore = forwardRef(({skillExploreRef}, ref) => {
  return (
    <Section ref={ref}>
      <Container>
 {/* Title */}
        <TitleDiv>
                <TextWrapper> SKILLS REEF EXPLORATION</TextWrapper>
                <P>Click The Objects To Learn About My Education, Tools And Inspiration!</P>
                <P2>Turn Horizontal For Best View!</P2>
                <Click src="./img/CLick.png"></Click>
        </TitleDiv>
{/* Interactive */}
        <DivTester4>
               <Canvas camera={{ position: [0, 13.5, 30], fov: 56 }}>
                <Suspense fallback={<Cubeloader/>}>
                   <Environment preset="lobby"/>
                   <fog attach="fog" args={["#0f5e9c", 28, 40]}/>
                        {/* Controls */}
                            <OrbitControls
                              minAzimuthAngle={-Math.PI / 6.3} // -90 degrees
                              maxAzimuthAngle={Math.PI / 8.1}  // 90 degrees
                              minPolarAngle={Math.PI / 2.3}    // 45 degrees
                              maxPolarAngle={Math.PI / 2.4} 
                              enableZoom={false}
                            />
                            {/* Model-Reef */}
                              <group scale={1.1}rotation-y={-7.85} position={[.5,-5,-2]}>
                                  <SkillsReef/>
                              </group>
                       </Suspense>
               </Canvas>
        </DivTester4>
      </Container>
    </Section>
  )
})

export default SkillExplore;