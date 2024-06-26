import React from "react";
import styled from "styled-components";


const Spacer = styled.div`
  width: 100vw; // Takes full width of the viewport
  height: 200px; // Fixed height for all devices
  background: linear-gradient(to bottom, #c0b699 1%, #0f5e9c 50%);

  @media (max-width: 360px) { 
    height: 50px; 
  }

  @media (min-width: 361px) and (max-width: 767px) { 
    height: 80px; 
  }

  @media (min-width: 768px) {
    height: 200px; 
  }
`;

const P = styled.p`
  @media (max-width: 768px) {
    text-align: center;
    font-size:12px;
  }
`;

const Ptester = () => (
<Spacer/>
);

export default Ptester;