import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

function CartVacio() {
    return ( 
        <Cartvacio__container>
        <Message__cart> El carrito está vacio</Message__cart>
            <NavLinkStyled to='/carta' ><ButtonStyled className="button" >Ver Carta</ButtonStyled></NavLinkStyled>
        </Cartvacio__container>

     );
}


const Cartvacio__container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`
const Message__cart = styled.p`
    text-align: center;
`
const NavLinkStyled = styled(NavLink)`
    width: 100%;
    display: flex;
    justify-content: center;
`
const ButtonStyled = styled.button`
    display: flex;
    width: fit-content;
    height: 2rem;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    text-align: center;
    font-size: 0.8125rem;
    font-family: 'Amiri';
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.00163rem;
    text-transform: uppercase;
    border: none;
    background-color: var(--gray-1);

    &:hover{
    cursor: pointer;
    transform: scale(1.1);
    background-color: var(--gray-3);
}
`
export default CartVacio;
