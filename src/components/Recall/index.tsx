import { BtnDownload, Content, Subtitle, Tag, Title } from "./styles";
import approval from '../../assets/img/approval.svg';

export const Recall = () =>{
    return(
        <Content>
            <Title>Não perca essa <span>oportunidade</span></Title>
            <Subtitle>Tenha o <span>controle</span> das suas <span>finanças</span> na palma da sua mão</Subtitle>
            <BtnDownload onClick={() => {window.open("https://play.google.com/store/games?hl=pt_BR&gl=US&pli=1", '_blank')}}><h1>Baixar Agora</h1></BtnDownload>  
            <Tag><img src={approval} alt=''/><h2>Seu banco como você precisa</h2></Tag>
        </Content>
    );
}