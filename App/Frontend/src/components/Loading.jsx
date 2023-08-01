import { styled } from 'styled-components';
import burgerImg from '../assets/images/comida-rapida.webp'
function Loading() {
    return ( 

        <LoadingWrapper>
            <img src={burgerImg} alt="" style={{height: '80px', width: '80px'}}/>
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
const LoadingText = styled.p`
    font-size: 2rem;
`
export default Loading