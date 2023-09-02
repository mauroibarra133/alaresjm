import { styled, keyframes } from 'styled-components';

import burgerImg from '../assets/images/comida-rapida.webp'
function Loading() {
    return ( 

        <LoadingWrapper>
            <img src={burgerImg} alt="Loading Burger" style={{height: '80px', width: '80px'}}/>
            <LoadingText>
                Loading...
            </LoadingText>
        </LoadingWrapper>
     );
}
const LoadingWrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
`;

// Aplicar esta animación a tu componente
const LoadingText = styled.p`
  font-size: 2rem;
  animation: ${fadeAnimation} 1s ease-in-out infinite;
`;


export default Loading