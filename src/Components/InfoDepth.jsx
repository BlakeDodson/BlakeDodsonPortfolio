
import styled from 'styled-components';
import React, { forwardRef } from 'react';



// css//

const PageContainer = styled.div`
  width: 100vw;
  height:100%;
  text-align: center;
  background: linear-gradient(to bottom, #0f5e9c 10%, #0D1D27 100%);
  overflow-y: auto;
`;


const Title = styled.h1`
  font-size: 24px; 
  margin: 0; 

  @media (min-width: 768px) {
    font-size: 40px; 
    margin: 0;
  }
`;


const InfoTitle = styled.h2`
  color: white;
  font-size: 18px; 
  text-align: center; 

  @media (min-width: 768px) {
    font-size: 25px;
    text-align: left;
  }
`;


const InfoParagraph = styled.p`
  font-size: 12px; 
  text-align: justify;  
  color: white;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 12px;
    text-align: left;
  }
`;


const ParagraphGroup = styled.p`
  margin: 20px 10%;  
font-size:12px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding-bottom:20px;
  }
`;


const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;  
  padding: 8px 16px; 
  border: 0.5px dashed grey;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, visibility 0.2s, opacity 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
  width: auto; 
  max-width: 150px;  
`;


const Fish = styled.img`
  height: 50px; 
  width: 50px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.3s ease-in-out;
  margin-right: 30px;  
`;


const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;  
  gap: 10px;  
  max-width: 100%; 
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
    max-width: 1400px;
  }
`;

// Info groups
const InfoGroup1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #0f5e9c 15%, rgba(255,255,255,0) 100%), url('/img/ClownFish.png') no-repeat center center; 
  background-size: cover;
  border: solid white 1px;
  box-sizing: border-box;
  padding: 20px; 
  height: 100%;
  min-height: 300px; 

  &:hover {
    background-color: white;
    color: black;
    background-image: none;
  }

  &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button} {
    visibility: visible;
    opacity: 1;
    color: black;
  }
`;

const InfoGroup2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #0f5e9c 15%, rgba(255,255,255,0) 100%),  url('/img/Tang.png')   no-repeat center center;
    background-size: cover;
    border: solid white 1px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:30px;
    height: 100%;
    min-height: 300px; 

    &:hover {
      background-color: white;
      color: black;
      background-image: none;
    }

    &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button}{
      visibility: visible;  
      opacity: 1;          
      color: black;
    }
    `;


const InfoGroup3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #0f5e9c 15%, rgba(255,255,255,0) 100%), url('/img/ParrotFish.png') no-repeat center center;
    background-size: cover;
    border: solid white 1px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:30px;
    height: 100%;
    min-height: 300px; 

    &:hover {
      background-color: white;
      color: black;
      background-image: none;
    }

    &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button} {
      visibility: visible;  
      opacity: 1;         
      color: black;
    }
    `;



const InfoGroup4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #09385d 10%, rgba(255,255,255,0) 100%), url('/img/Grouper.png') no-repeat center center;
    background-size: cover;
    border: solid white 1px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:30px;
    height: 100%;
    min-height: 300px;


    &:hover {
      background-color: white;
      color: black;
      background-image: none;
    }

    &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button} {
      visibility: visible; 
      opacity: 1;         
      color: black;
    }
    `;

const InfoGroup5 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom,#09385d 10%, rgba(255,255,255,0) 100%), url('/img/Shark.png')  no-repeat center center;
    background-size: cover;
    border: solid white 1px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:30px;
    height: 100%;
    min-height: 300px;

    &:hover {
      background-color: rgba(255, 255, 255, 1); 
      color: black;
      background-image: none;
    }

    &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button} {
      visibility: visible;  
      opacity: 1;         
      color: black;
    }
    `;

const InfoGroup6 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #09385d 10%, rgba(255,255,255,0) 100%), url('/img/LionFish.png') no-repeat center center;
    background-size: cover;
    border: solid white 1px;
    box-sizing: border-box;
    padding-left:20px;
    padding-right:30px;
    height: 100%;
    min-height: 300px;

    &:hover {
      background-color: white;
      color: black;
      background-image: none;
    }

    &:hover ${InfoParagraph}, &:hover ${InfoTitle}, &:hover ${Fish}, &:hover ${Button} {
      visibility: visible;  
      opacity: 1;          
      color: black;
    }
    `;

const InfoBox = styled.div`
   flex: 2;
`;

const NextSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;

// Depth Component
const InfoDepth = forwardRef(({ theDepthRef }, ref) => {
  return (
    <PageContainer ref={ref}>
      {/* Title Section */}
      <Title>THE DEPTH OF WHAT IS POSSIBLE</Title>
      <ParagraphGroup>
       Here Is A Few Ways To Expand Your Website!
      </ParagraphGroup>
{/* Content */}
      <ContentRow>

        {/* Product */}
        <InfoGroup1>
        <InfoBox>
          <InfoTitle>Product Design</InfoTitle>
          <InfoParagraph>
             Showing off your product is essential, what better way then having it able to
             be interactive? Having a 3D model of products like drinks, bikes, furniture intigrated
             into your website for your customers to be given the option to see it function, or even style the model 
             differnetly to fit their needs! This opens a better customer experince which leads to greater involvement.  
          </InfoParagraph>
             <NextSection>
                {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup1>

        {/* Gaming */}
        <InfoGroup2>
        <InfoBox>
          <InfoTitle>Game Intergration</InfoTitle>
          <InfoParagraph> 
              Integrating small games into your website 
              can significantly enhance customer engagement and retention. 
              These interactive elements not only provide a 
              fun and unique user experience but also encourage visitors
              to spend more time on your site. This increased engagement 
              can lead to higher conversion rates as users become more
              familiar with the brand and what it offers. 
          </InfoParagraph>
               <NextSection>
                  {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup2>

       {/* Education */}
        <InfoGroup3>
        <InfoBox>
          <InfoTitle>Educational Experiences</InfoTitle>
          <InfoParagraph> 
              Adding an educational 3D model to your website 
              can profoundly enrich the learning experience for visitors. 
              It allows users to explore complex concepts 
              in a visually engaging and hands-on manner, 
              which can enhance understanding and retention of information, 
              making the information accessible and comprehensible 
              even to those without expert knowledge.
          </InfoParagraph>
            <NextSection>
                {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup3>

       {/* AR/VR */}
        <InfoGroup4>
        <InfoBox>
          <InfoTitle>AR & VR</InfoTitle>
          <InfoParagraph> 
             These immersive technologies allow you to interact with
             content in a highly personalized and impactful way, whether 
             it's through virtual tours, interactive product demos, 
             or simulated experiences. AR/VR can make complex information 
             more accessible and enjoyable, enhancing user understanding 
             and fostering a deeper connection with your brand. 
          </InfoParagraph>
               <NextSection>
                  {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup4>

     {/* Data */}
        <InfoGroup5>
        <InfoBox>
          <InfoTitle>Data Visualization</InfoTitle>
          <InfoParagraph> 
              By transforming complex data sets into graphical representations
              like charts, graphs, and maps, data visualization makes it easier 
              for visitors to understand and engage with the content. 
              This clarity can lead to better decision-making for users.
          </InfoParagraph>
             <NextSection>
                {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup5>

        {/* Websites */}
        <InfoGroup6>
        <InfoBox>
          <InfoTitle>Enhanced Website's</InfoTitle>
          <InfoParagraph> 
             Interactivity not only makes the user feel more connected 
             and involved with the website but also provides a 
             fun and engaging way to explore content.
             React Three Fiber thus serves as a powerful bridge 
             between complex 3D graphics and user-centric web experiences,
             enabling websites to deliver uniquely tailored experiences.
          </InfoParagraph>
             <NextSection>
                {/* <Button>See Product</Button> */}
             </NextSection>
        </InfoBox>
        </InfoGroup6>

      </ContentRow>
  </PageContainer>
  );
})

export default InfoDepth;