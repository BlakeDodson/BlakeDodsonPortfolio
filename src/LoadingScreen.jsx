import { useProgress } from '@react-three/drei';
import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoadingScreenStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: grid;
  place-items: center;
  grid-template-rows: auto auto 1fr; 
  gap: 0.1px;
  background-color: #b8c6db;
  background-image: linear-gradient(0deg, #f2f9ff 0%, #f5f7fa 74%);
  opacity: 1;
  transition: opacity 1s ease-in-out;
  animation: ${({ hidden }) => hidden ? css`${fadeOut} 0.5s ease-in-out forwards 1s` : 'none'};
`;

const Title = styled.h4`
  font-size: 4rem;
  font-weight: 900;
  color: #1a202c;
  margin: 0;
padding-top:320px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


const ProgressBarContainer = styled.div`
  width: 50%;
  height: 1rem;
  background-color: rgba(102, 106, 113, 0.42);
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin: 0;
`;

const ProgressBar = styled.div`
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  background-color: #0f5e9c;
  transition: width 0.5s ease-in-out;
`;

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <>
      <LoadingScreenStyled hidden={!active}>
        <Title>PORT-FOLIO</Title>
        <ProgressBarContainer>
          <ProgressBar $progress={progress} />
        </ProgressBarContainer>
      </LoadingScreenStyled>
    </>
  );
};

export default LoadingScreen;
