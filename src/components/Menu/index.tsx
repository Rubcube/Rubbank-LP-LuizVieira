import { BtnBaixar, Logo, MenuIcon, NavBar } from './styles';

export const Menu = () => {
    return(
        <NavBar>
            <Logo/>
            <ul>
                <li><a href='#inicio' autoFocus>Início</a></li>
                <li><a href='#vantagens'>Vantagens</a></li>
                <li><a href='#faq'>Perguntas frequentes</a></li>
            </ul>
            <MenuIcon/>
        </NavBar>
    );
}