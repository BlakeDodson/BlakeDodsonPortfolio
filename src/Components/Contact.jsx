import React, { forwardRef, useRef, useState} from "react";
import styled from "styled-components";
import {Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from 'framer-motion';

// Email hookup //
import emailjs from "@emailjs/browser"

// Models//
import { JellyModels } from "./ModelsComponents/JellyModels";


const Section = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #0D1D27 30%, #000000 100%);
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto; 
  }
`;

const ModelsContainer = styled.div`
  flex: 2;
  width:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  z-index:1;

  @media (max-width: 768px) {
    height:auto;
  }
`;


const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding-top:90px;
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%; 
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: auto;
`;

const Title = styled.h1`
  font-size: 35px;
  color: white;
  text-align: center;
  margin: 10px 0;
  margin-bottom:30px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: auto;
`;

const Button = styled.button`
  width: auto; 
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0f5e9c;
  color: white;
  cursor: pointer;
  margin-top:15px;

  &:hover {
    background-color: white;
    color: black;
  }

`;

// Contact //
const Contact = forwardRef(({ contactRef }, ref) => {

  // Form setup//
  const form = useRef();
  const [sucess, SetSucess] = useState(null)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kn2oqtx', 'template_ivzysbd', form.current, {
        publicKey: 'pja0lPs742lCy4d1U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          SetSucess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          SetSucess(false);
        },
      );
  };

  return (
    <Section ref={ref}>
      <Container>
{/* Left Side */}
        <FormContainer>
            <Title>LET'S CONNECT</Title>
                <Form ref={form} onSubmit={sendEmail}>
                      <Input placeholder="name" name="name"></Input>
                      <Input placeholder="email" name="email"></Input>
                      <TextArea placeholder="message" name="message"></TextArea>
                    <Button type="submit">Send A Message</Button>
                    {sucess && "Thanks for the message!"}
                </Form>
        </FormContainer>
{/* Right Side */}
        <ModelsContainer>  
           <Canvas >
                <Environment preset="sunset"/>
                <JellyModels scale={.4} position-y={-2}/>
           </Canvas>
        </ModelsContainer>
      </Container>
    </Section>
  )
});

export default Contact