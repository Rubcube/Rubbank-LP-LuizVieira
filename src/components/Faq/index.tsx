import { useState } from "react";
import { Card, Content, Title } from "./styles";

export const Faq = () => {
    const [isColapsable1, setIsColapsable1] = useState(false);
    const [isColapsable2, setIsColapsable2] = useState(false);
    const [isColapsable3, setIsColapsable3] = useState(false);
    return(
        <Content id="faq">
            <Title>Perguntas frequentes</Title>
            <Card isColapsable={isColapsable1} onClick={() => setIsColapsable1(!isColapsable1)}>
                <div>
                    <h1>Quais são as taxas e tarifas das contas Rubbank?</h1>
                    <span className="more">+</span>
                    <span className="minus">-</span>
                </div>
                <p>Tanto a abertura da conta Rubbank, quanto sua manutenção é totalmente gratuita e isenta de anuidade. è só baixar o app, criar sua conta e aproveitar nossos benefícios!</p>
            </Card>
            <Card isColapsable={isColapsable2} onClick={() => setIsColapsable2(!isColapsable2)}>
                <div>
                    <h1>Quais documentos são necessários para abrir uma conta Rubbank?</h1>
                    <span className="more">+</span>
                    <span className="minus">-</span>
                </div>
                <p>Para abrir sua conta basta baixar o app colocar seu cpf e pronto! Fácil, rápido e sem burocracia!</p>
            </Card>
            <Card isColapsable={isColapsable3} onClick={() => setIsColapsable3(!isColapsable3)}>
                <div>
                    <h1>Quais são as vantagens de um banco digital?</h1>
                    <span className="more">+</span>
                    <span className="minus">-</span>
                </div>
                <p>Um banco digital oferece uma experiêcia simplificada e rápida, além de disponibilizar seus serviços 24 horas por dia</p>
            </Card>
            <br/>
            <br/>
        </Content>
    );
}