import React, {forwardRef, Suspense, useRef, } from "react"; 
import styled from "styled-components";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Canvas, useFrame  } from "@react-three/fiber";
import { Environment } from "@react-three/drei"; 

// Buttons// 
import Waterbutton from "./ButtonComponents/Waterbutton";
// Models//
import { OceanForHeroModel } from "./ModelsComponents/OceanForHeroModel";
import { ShipFinal } from "./ModelsComponents/ShipFInal";


// CSS with Styled Components
const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 720px;

  @media (max-width: 768px) {
    flex-direction: column;
    // height: auto;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 2;
    flex:2;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 70px;
margin-right:70px;
  @media (max-width: 768px) {
    padding-right: 0;
    order: 1;
  }
`;

const Title = styled(motion.h4)`
  font-size: 75px;
  color: black;
  margin: 0;
  padding-left:70px;

  @media (max-width: 768px) {
    padding-top:60px;
    font-size: 26px;
    width:auto;
  }
`;

const Descp = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  justify-content:center;
`;

const Subtitle = styled(motion.h2)`
  color: black;
  font-weight: 300;
  padding-left: 15px;

  @media (max-width: 768px) {
    padding-left: 60px;
    font-size: 15px;
  }
`;

const Button = styled.div`

@media (max-width: 768px) {
  display:none;
}
`
//text roll in //
const fadeInVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

//animation for ship sway//
const AnimatedShip = () => {
  const shipRef = useRef();

  useFrame(() => {
    const time = Date.now() * 0.0001;
    shipRef.current.rotation.x = Math.sin(time* 5.25) * Math.PI * 0.02;  
    shipRef.current.rotation.z = Math.cos(time * 5.25) * Math.PI * 0.04;
  });

  return (
     <group ref={shipRef}>
        <ShipFinal />
     </group>
  );
};

// Hero component //
const Hero = forwardRef(({ portRef }, ref) => {
  return (
    <Section ref={ref}>
      <Container>

{/* Left Side */}
        <Left>
          <Suspense>
            <Canvas camera={{ position: [0, 5, 20], fov: 90 }}> 
                <Environment preset="lobby"/> 
                        <group scale={1.8} rotation-y={-5.2} position={[0,-5,0]} >
                            <AnimatedShip />
                        </group> 
                    <OceanForHeroModel position={[0,-4,-3]} rotation-y={5} scale={1.3}/>
            </Canvas>
          </Suspense>
        </Left>

 {/* Right Side */}
        <Right>
            <Title initial="hidden" animate="visible" variants={fadeInVariant}>
                BLAKE DODSON
             </Title>

                    {/* text scroll editing */}
                    <Descp>
                          <Subtitle initial="hidden" animate="visible" variants={fadeInVariant}>
                            I am a <></>
                              <TypeAnimation
                                sequence={['Storyteller', 1000, 'Frontend Developer', 2000,'Creator', 1000, 'Captain', 1000,]} 
                                cursor={false} 
                                repeat={Infinity} /> 
                          </Subtitle>
                    </Descp>
              {/* button */}
              <Button>
              <Waterbutton portRef={portRef}/>
              </Button>
        </Right>
      </Container>
    </Section>
  );
});

export default Hero;