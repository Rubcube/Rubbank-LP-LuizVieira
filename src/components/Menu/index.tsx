import { useState } from 'react';
import { BtnBaixar, Logo, MenuIcon, NavBar, GlobalMenuClasses, Dropdown } from './styles';

type props = {
    menu?: string;
    pageActive?: string;
}

const MenuItems = ({pageActive}: props) => {
    return (
        <ul>
            <li><a href='#inicio' className={pageActive === "inicio"? "active": ""} >Início</a></li>
            <li><a href='#vantagens' className={pageActive === "vantagens"? "active": ""} >Vantagens</a></li>
            <li><a href='#faq' className={pageActive === "faq"? "active": ""} >Perguntas frequentes</a></li>
        </ul>
    );
}

export const Menu = ({menu, pageActive}: props) => {
    const [drop, setDrop] = useState(false);
    return(
        <>
        <GlobalMenuClasses isScrolling={menu === "scrolling"}/>
        <NavBar className={menu}>
            <a href=""><Logo isScrolling={menu === "scrolling"} /></a>
            <MenuItems pageActive={pageActive} />
            <MenuIcon drop={drop} onClick={() => {setDrop(!drop)}}/>
            <BtnBaixar isScrolling={menu === "scrolling"} onClick={() => {window.open("https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1", '_blank')}}>
                <h1>Baixar Agora</h1>
            </BtnBaixar>
            <Dropdown drop={drop}>
                <div onClick={() => {setDrop(false)}}>
                    <MenuItems/>
                </div>
            </Dropdown>
        </NavBar>
        </>
    );
}