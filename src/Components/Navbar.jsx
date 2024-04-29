import React from "react";
import styled from "styled-components";


const Section = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  padding-top:20px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; 

  @media (max-width: 768px) {
    justify-content: space-between; 
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.div`
  display: flex;
  gap: 20px;
  list-style: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Listitem = styled.li`
  color: black;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-size: 17px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px; 
`;

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 10px;
  color: black;
  background: transparent;
  border: 0.5px dashed grey;
  border-radius: 15px;
  margin-right: 25px; 

  &:hover {
    background-color: #0f5e9c;
    color: white;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 80px; 
  }
`;
// navbar//
function Navbar({ homeRef, portRef, skillExploreRef, theDepthRef, contactRef }) {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <Section>
      <Container>
                <Links>
                  <Logo src="./img/logo.webp"/>
                    <List>
                      <Listitem onClick={() => scrollToRef(homeRef)}>Home</Listitem>
                      <Listitem onClick={() => scrollToRef(portRef)}>Port</Listitem>
                      <Listitem onClick={() => scrollToRef(skillExploreRef)}>Skills Reef</Listitem>
                      <Listitem onClick={() => scrollToRef(theDepthRef)}>The Depth</Listitem>
                      <Listitem onClick={() => scrollToRef(contactRef)}>Contact</Listitem>
                    </List>
                </Links>
        <Icons>
             <Button onClick={() => scrollToRef(contactRef)}>CONTACT</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar