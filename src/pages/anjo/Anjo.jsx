// scss
import "./anjoStyle/Anjo.scss"



// JSX
const Anjo = () =>{
    return(
        <>
            <aside className="aside">
                <div className="aside_content">
                    <div className="aside_content_anjo">
                       <h1>
                            Anjo da guarda
                       </h1>
                       <br/>
                        <p>
                            O anjo guardião é o arquiteto primordial do destino, o negociador de nossos débitos cármicos, tanto nos céus quanto na terra e nos guia sobre o que devemos fazer antes da ascensão celestial ao mundo. Aqueles que seguem fielmente a orientação e as instruções do seu anjo guardião nunca se perdem. Também conhecido como Eleeda/Aleda e Ehi.
                        </p> 
                    </div>
                    
                    <div className="aside_content_anjoname">
                        <h1>
                            <span className="aside_content_anjoname_span">Reyel</span> anjo protetor
                        </h1>
                        <br/>
                        <p className="aside_content_anjoname_paragrafo">
                            Reyel é chamado para confrontar os hereges e aqueles que nos causam danos, quer de forma consciente ou inconsciente. Ele domina todos os sentimentos ligados à religião e à meditação. Revela as ações dos inimigos, sejam eles visíveis ou invisíveis, possibilitando a proteção contra eles e revelando segredos sobre as forças divinas e cósmicas. Age em oposição aos ímpios e aos opositores de Deus. Reyel trabalha em conjunto com Obaluaê, agindo como seus anjos protetores, seguindo as ordens de Obaluaê para a execução de rituais de nascimento.
                        </p>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Anjo;