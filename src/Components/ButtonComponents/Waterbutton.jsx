import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// css//
const StyledButton = styled(motion.button)`
  background: transparent;
  border: .5px dashed grey;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  width: 200px;
  display: block;
  margin: 0;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f5e9c;
    z-index: -1;
    transition: transform 3.8s ease;
    transform: translateY(100%);
  }

  &:hover::after {
    transform: translateY(0);
  }
`;

// Combined Framer Motion animation variants
const combinedVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

// Button//
const WaterButton = ({portRef}) => {
  
  const scrollToPort = () => {
    portRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledButton
      whileHover="hover"
      whileTap="tap"
      variants={combinedVariants}
      initial="hidden"
      animate="visible"
    onClick={scrollToPort}
    >
      Travel to Port-folio
    </StyledButton>
  );
};

export default WaterButton;