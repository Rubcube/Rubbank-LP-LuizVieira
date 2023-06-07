import appstore from '../../assets/img/appstore.png';
import approval from '../../assets/img/approval.svg';
import mockup2 from '../../assets/img/mockup2.svg';
import { Content ,Background, Mockup, Subtitle, Title, CallToAction, BtnDownload, Tag, Visualizer } from "./styles";

export const HeroSection = () => {
    return (
        <>
        <Mockup/>
        <Background/>
        <Content id="inicio">
            <Title><span>Seu banco</span>, no seu tempo, e na palma da sua mão</Title>
            <Subtitle>
                Mais <span>liberdade</span>, menos burocracia. Experimente a <span>praticidade</span> do nosso banco digital.
            </Subtitle> 
            <Visualizer src={mockup2}/>
            <CallToAction>
                <img src={appstore} alt="Lojas de Aplicativos" />
                <BtnDownload><h1>Baixar App</h1></BtnDownload>
            </CallToAction>
            <Tag>
                <img src={approval} alt=''/>
                <h2>Seu banco como você precisa</h2>
            </Tag>
        </Content>
        </>
    );
}