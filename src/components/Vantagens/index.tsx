import { Classes, Content, Header, Items } from "./styles";
import check from "../../assets/img/check.svg";
import security from "../../assets/img/visualizer_security.svg";

export const Vantagens = () => {
    return (
        <>
        <Classes/>
        <Content id="vantagens">
            <Header>
                <h2>Quer economizar tempo de dinheiro?</h2>
                <h1>Temos uma experiência feita pra você</h1>
            </Header>
            <main>
                <div>
                    
                    <Items>
                        <img src={check}/>
                        <div>
                            <h3>Segurança em 1° lugar</h3>
                            <p>Contamos com criptografia de ponta a ponta, além do controle de tentativas de senhas incorretas</p>
                        </div>
                    </Items>
                    <Items>
                        <img src={check}/>
                        <div>
                            <h3>Suporte 24 horas por dia</h3>
                            <p>Canal de chat ativo 24 horas por dia diretamente com o suporte</p>
                        </div>
                    </Items>
                    <Items>
                        <img src={check}/>
                        <div>
                            <h3>Transações a qualquer momento</h3>
                            <p>Envie ou receba seus pagamentos a qualquer momento do dia com apenas alguns cliques</p>
                        </div>
                    </Items>
                    <Items className="dashed">
                        <img src={check}/>
                        <div>
                            <h3>Sem anuidade</h3>
                            <p>100% isento de taxas de manutenção</p>
                        </div>
                    </Items>
                </div>
                <img src={security}/>
                
            </main>
        </Content>
        </>
    );
}