import React from 'react';
import styled from 'styled-components';

// Breakpoints for responsive design
const breakpoints = {
  mobile: '480px', // Adjust as needed
};

// Styled-components with responsive adjustments
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; // Space between sections on mobile
  
  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    margin-bottom: 10px;
    order:2;
  }
`;

const FooterMiddle = styled.div`
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 10px;
    order:1;
  }
`;

const FooterRight = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    align-items: center;
    display:none;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  outline: none;
`;
// Footer component
const FooterComponent = () => {
  return (
    <FooterContainer>
 {/* left */}
                  <FooterLeft>
                        <p>Phone: +208 771 4479</p>
                        <p>Email: BlakeDodson47@yahoo.com</p>
                  </FooterLeft>
 {/* middle */}
                  <FooterMiddle onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up">
                                <line x1="12" y1="19" x2="12" y2="5"></line>
                                <polyline points="5 12 12 5 19 12"></polyline>
                          </svg>
                          Resurface
                  </FooterMiddle>
 {/* right */}
                  <FooterRight>
                          <p>PORT-folio</p>
                          <Link target="_blank" href="https://icons8.com/icon/23547/natural-user-interface-2">Click</Link> icon by <Link target="_blank" href="https://icons8.com">Icons8</Link>
                  </FooterRight>
    </FooterContainer>
  );
};

export default FooterComponent;