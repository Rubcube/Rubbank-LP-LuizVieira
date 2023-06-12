import { Actions, Classes, Content, Icons, Item, Rights } from "./styles";
import instagram from "../../assets/img/iconinstagram.svg";
import linkedin from "../../assets/img/iconlinkedin.svg";
import rub from "../../assets/img/iconrub.svg";
import appstore from "../../assets/img/APPSTORE.svg";
import googleplay from "../../assets/img/GOOGLEPLAY.svg";

export const Footer = () => {
    return(
        <>
        <Classes/>
        <Content>
            <Actions>
                <Item>
                    <h1>Acompanhe nossas redes:</h1>
                    <Icons>
                        <a href="https://instagram.com/rubcube_?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/company/rubcube/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://www.rubcube.com/rubcamp" target="_blank" rel="noopener noreferrer">
                            <img src={rub} alt="" className="logoRub"/>
                        </a>
                    </Icons>
                </Item>
                <Item className="stores">
                    <h1>Baixe em:</h1>
                    <Icons>
                        <a href="https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1" target="_blank" rel="noopener noreferrer">
                            <img src={googleplay} alt="" height={63}/>
                        </a>
                        <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noopener noreferrer">
                            <img src={appstore} alt="" height={56}/>
                        </a>
                    </Icons>
                </Item>
            </Actions>
            <Rights>© Rubcamp 2023</Rights>
        </Content>
        </>
    );
}