import { ArrowLeft, ArrowRight, Background, Card, Carousel, Circle, Content, Navigation, Title } from "./styles"
import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import user3 from "../../assets/img/user3.png";
import avaliacao5 from "../../assets/img/avaliacao.svg";
import avaliacao4 from "../../assets/img/avaliacao2.svg";
import leftArrow from "../../assets/img/leftArrow.svg";
import rightArrow from "../../assets/img/rightArrow.svg";
import { useState } from "react";

export const Avaliacoes = () => {
    const [page, setPage] = useState(1);

    function nextPage(){
        if(page < 3) setPage(page + 1);
        else setPage(1);
    }

    function backPage(){
        if(page > 1) setPage(page - 1);
        else setPage(3);
    }

    return(
        <Content>
            <Background>
                <Title>Avaliações dos usuários</Title>
                
                <Carousel>
                    <ArrowLeft src={leftArrow} onClick={backPage} />
                    <ArrowRight src={rightArrow} onClick={nextPage} />
                    <Card order={page === 1? 1 : page === 2? 3: 2}>
                        <img src={user3} alt="Imagem do Usuário" />
                        <h1>Fabio Takaki</h1>
                        <img src={avaliacao5} alt="Avaliação" />
                        <p>Show! Suporte eficiente e interface bem intuitiva.</p>
                    </Card>
                
                
                    <Card order={page === 1? 2 : page === 2? 1: 3}>
                        <img src={user1} alt="Imagem do Usuário" />
                        <h1>Cedryk Augusto</h1>
                        <img src={avaliacao5} alt="Avaliação" />
                        <p>Muito bom esse App! Rápido, prático e facil de usar.</p>
                    </Card>
            
            
                    <Card order={page === 1? 3 : page === 2? 2: 1}>
                        <img src={user2} alt="Imagem do Usuário" />
                        <h1>Gustavo Becelli</h1>
                        <img src={avaliacao4} alt="Avaliação" />
                        <p>Banco digital incrível! Se fosse escrito em Rust seria 5 estrelas.</p>
                    </Card>
                    
                </Carousel>
                <Navigation>
                    <Circle page={page} cicleId={1} onClick={() => {setPage(1)}}/>
                    <Circle page={page} cicleId={2} onClick={() => {setPage(2)}}/>
                    <Circle page={page} cicleId={3} onClick={() => {setPage(3)}}/>
                </Navigation>
            </Background>
        </Content>
    );
} 