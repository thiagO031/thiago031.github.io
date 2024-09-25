// react
// import { useState } from "react";

// css
import "./cartaStyle/Carta.scss"


// variaveis
const nome = "Thiago Torres Santana";
const nascimento = "10/09/2001";



// jSX
const Carta = () =>{
    // const [collapse, setCollapse] = useState(false);

    return(
        <>
            <div className="main">
                <div className="main_content">
                    <div className="main_content_carta">
                        <h1 className="main_content_carta_h1Titulo">
                            {nome}
                        </h1>
                        <h1>
                            {nascimento}
                        </h1>

                        <p className="main_content_carta_paragrafo">
                            Definir, de certa maneira, implica em estabelecer limites, restringir. Mesmo quando as definições são flexíveis, elas restringem o pensamento e o aprisionam em palavras, contendo as vastas possibilidades que precisam ser exploradas. Você representa a busca incansável. A busca por um ambiente social e pessoal sempre harmonioso, sem perceber que essa mesma harmonia envolve também o movimento necessário para a criação. Suas principais qualidades são suas convicções firmes, a capacidade de gerar ideias, o altruísmo, a compaixão e a generosidade.
                            <br /><br />
                            Sua base é a correção e o direcionamento de tudo o que está errado no mundo, de acordo com sua visão. Deseja cultivar raízes e que sua vida seja permeada pelo lar e pelas pessoas que ama. Você está sempre em busca da paz, adora a ideia de uma família numerosa e ama tudo o que cresce e se expande. Sente-se animado simplesmente por estar vivo, sempre sentindo a presença do amor. Por conta disso, assume o papel de conselheiro prático e confiável, e seus amigos sempre o procuram nos momentos difíceis. Por natureza, você é uma pessoa simpática, intuitiva e persistente.
                            <br /><br />
                            Tem um temperamento equilibrado, é de muita responsabilidade e tem um lado que é voltado para os problemas de casa, sendo assim, ama que a casa esteja cheia de animais, plantas, móveis e tudo na mais perfeita ordem. Possui gostos elevados e aprecia a elegância, luxo e conforto. Consegue alcançar facilmente o sucesso no ambiente social e, também é muito popular.
                            <br /><br />
                            Tem um temperamento equilibrado, é de muita responsabilidade e tem um lado que é voltado para os problemas de casa, sendo assim, ama que a casa esteja cheia de animais, plantas, móveis e tudo na mais perfeita ordem. Possui gostos elevados e aprecia a elegância, luxo e conforto. Consegue alcançar facilmente o sucesso no ambiente social e, também é muito popular.
                            <br /><br />
                            <span className="main_content_carta_paragrafo_span">
                            {/* <span className={`main_content_carta_paragrafo_span ${collapse ? "expanded" : ""}`}> */}
                                No entanto, tudo tem dois lados e quando escolhe o caminho mais fácil e cômodo passa a expressar um lado extremamente vaidoso mais desenvolvido e, também um lado egoísta pronunciado, tem de trabalhar esses pontos negativos por meio do estudo de fenômenos e do estudo do universo. Se entender que é limitado e tomar consciência de suas limitações, conseguirá equilibrar seu lado emocional e seus pensamentos, assim tendo harmonia, prosperidade e a paz que tanto almeja.
                                <br /><br />
                                A busca do pensamento correto é um objetivo elevado, pois nem todos os pensamentos são corretos devido à interferência dos desejos e supostas necessidades. Portanto, ao concentrar-se nos objetivos ideais, diferenciando-os dos imaginários, é possível corrigir o pensamento.
                                <br /><br />
                                A sua luz interior é inegável, mas só se tornará realidade, compreensão e ordem quando buscar verdadeiramente a humildade dentro de si, que é a chave que abrirá inúmeras portas mágicas normalmente fechadas para pessoas comuns. Você é um ser extremamente forte, confiável, com objetivos claros, trabalhador, conservador e merecedor de confiança. Você é o pilar que sustenta a família, a empresa e os amigos. Para amadurecer, é indispensável exercitar o pensamento, expandindo a mente e aumentando a capacidade de discernir os movimentos da vida ao seu redor.
                                <br /><br />
                                É por natureza, comedido e sabe apreciar artes, principalmente uma boa música, um bom teatro e uma boa comida, se veste bem, no estilo clássico, o qual prefere ao moderno. Com ampla capacidade de organização, mas precisa de estabilidade e ordem, tendo naturalmente grande energia, habilidades práticas e forte determinação, com certeza conseguirá, com estes traços, atingir suas metas e seus objetivos.
                                <br /><br />
                                Os valores rompem os limites das conveniências restritivas e interesseiras, para se apoiar na ética universal, ancestral e perene, que têm, por base, Deus, os seres, a natureza e a si próprio, compreendendo que o limite da própria liberdade começa na fronteira do direito alheio, nunca aspirando para si o que não gostaria de receber dos outros.
                                <br /><br />
                                Você é extremamente minucioso, organizado, possui uma postura natural, com gestos simples e delicados. Tem prazer em ser um ouvinte atento e sempre se interessa pelas conversas com pessoas que parecem ser sinceras, honestas e verdadeiras. No entanto, é importante que você tenha um espírito empreendedor, ou seja, colocar suas ideias em prática, mesmo que inicialmente possam parecer "loucas". Tome cuidado com a obesidade, o excesso de autoridade e o desejo de controlar demais a vida dos outros.
                                <br /><br />
                                A sua constituição se bem trabalhada tem em si mesmo a força da liderança, é criativo, forte pensamento progressista, otimista, disposição física, atraente fisicamente, magnético, é competitivo, independente e amigo de todos, sempre disposto a ajudar àqueles que lhe pedem ajuda, influenciador, inovador, inventivo. Gosta também de planejar com antecedência, apesar de muitas vezes realizar os projetos sem mesmo consultar outras pessoas, e por ter a natureza da ousadia, está constantemente sonhando com grandes empreendimentos, sempre à procura de novidades, seja no presente ou no futuro.
                                <br /><br />
                                Mas, se faz necessário se voltar para o cuidado extremo já que é muito propenso a arrogância, inclinado ao ciúme, egocentrismo, egoísta, orgulhoso, cabeça dura, não sabe se controlar, não é decidido, descontrole em ocasiões que deveria manter a paciência, e, também possui instabilidade emocional e é impaciente.
                                <br /><br />
                                O homem cria uma representação de si mesmo na matéria e observa a si próprio através de suas próprias concepções e percepções. E é nesse processo que encontra contentamento e satisfação. O sucesso tanto no âmbito profissional, quanto afetivo e pessoal depende exclusivamente da maneira como se pensa e se expressa.
                                <br /><br />
                                Tende a ser bastante individualista e, por isso, dificilmente aceita sugestões ou críticas de outras pessoas. Trabalhos que não exigem muita movimentação, como caixa de supermercado ou contador, têm o efeito de deixá- lo deprimido e até mesmo estressado, proporcionando pouco conforto e insatisfação. É fundamental que trabalhe por conta própria ou em cargos em que possa exercer liderança, pois, por possuir ouvidos sensíveis, não é receptivo às ordens, principalmente se provenientes de alguém com nível de estudo inferior.
                                <br /><br />
                                Possui emoções poderosas e habilidades para receber e dar amor. Assim, é de extrema importância encontrar uma forma de expressar os seus sentimentos em vez de buscar realização em interesses financeiros. Ao ficar desanimado, pode cair em dramas emocionais de outras pessoas, porque a sua sensibilidade desenvolvida precisa encontrar um jeito de se manifestar. A ordem e o método são, no geral, coisas boas para você, mas lembrando que um plano de vida definido é um pré-requisito para fazer bom uso do seu enorme potencial.
                                <br /><br />
                                Por ter uma inclinação para começar as coisas e não terminar, necessita adquirir conhecimento, prudência e sabedoria, desenvolvendo assim seu imenso potencial e seus objetivos e metas.
                                <br /><br />
                                Ao observar tais definições de Deus e todas as suas faces procure olhar para si mesmo e ver o que você realmente procura na terra nessa oportunidade de reencarnação. O destino que você busca é o sucesso através do trabalho. Pode ser até considerado um compulsivo, um viciado em trabalho, justamente por nunca se sentir cansado.
                                <br /><br />
                                Deve manter muita paciência, confiança e disposição para ajudar o próximo. Sua vida, em geral, não é simples, por ser muito exigente e esperar demais dos outros, terá de trabalhar muito, com muita dedicação e afinco para manter um bom nível na vida financeira, afetiva e social. Sendo assim tudo o que consegue é sólido, tem fundação e dura para sempre. Está sempre dedicado de corpo e alma em seus projetos, metas, objetivos e conquistas, e geralmente é sempre bem-sucedido profissionalmente.
                                <br /><br />
                                Não tem muitos amigos, porém os que possui são os mais sinceros e leais. Não mostra interesse por quantidade, optando pela qualidade em tudo e em todos. Muito sensível, com muitas ideias criativas e com aguçado senso de visão, tem capacidade para expressar as suas ideias originais e inspiradoras. Isso pode ajudá-lo muito a vencer possíveis preocupações quanto à sua instabilidade financeira e assim a tomar as melhores decisões nessa área também.
                                <br /><br />
                                A convivência pode ser extremamente difícil, pois geralmente rejeita a mudança e as coisas novas, é perfeccionista demais e cobra muito os outros, sejam eles familiares, amigos ou subordinados, se tornando muita das vezes, chato e mal compreendido. Se levar uma vida de negatividade, terá forte inclinação para roubo, fraude, conspiração e um orgulho ferido.
                                <br /><br />
                                Precisa viver em equilíbrio, desenvolver o senso de responsabilidade em tudo o que for fazer a aplicar. Viver uma vida equilibrada requer disciplina e comprometimento consigo mesmo. Para não levar a vida como em uma montanha-russa, é de extrema importância praticar a justiça e servir os outros sempre que puder. Deve se relacionar de maneira positiva com todos e respeitar o direito que eles têm de cometer erros, também deve se relacionar com pessoas inteligentes e com as quais possa compartilhar os seus próprios interesses.
                                <br /><br />
                                O propósito da sua vida está direcionado para a busca de aventura, com uma necessidade intrínseca de liberdade e uma sensação vital de obrigação e necessidade de constantes mudanças para se sentir vivo. A ideia de se estabelecer provoca um medo esmagador, assim como a monotonia de uma rotina rígida.
                                <br /><br />
                                Essa ânsia por liberdade se manifesta em várias áreas da sua vida e muitas vezes é interpretada como inquietação, falta de compromisso e irresponsabilidade. No entanto, essa não é uma verdade absoluta. Você tem uma sede inesgotável por liberdade, é aventureiro e gosta de correr riscos, sempre em movimento, o que o faz questionar estruturas. A construção do conhecimento é feita junto com o outro, e não apenas para o outro. Portanto, é necessário repensar a forma de comunicação que separa a emissão da recepção.
                                <br /><br />
                                Ao longo da história, o ser humano sempre buscou encontrar respostas para as questões fundamentais da existência. Cada indivíduo constrói sua visão de mundo com base em suas próprias experiências. A realidade e a rotina diária estão sempre testando essa percepção, nos desafiando a reagir, aprimorar nossas percepções, conceitos ou mesmo mudar nossa forma de pensar e revitalizar nosso espírito. Alguns fazem isso de forma consciente, enquanto para outros acontece de maneira inconsciente.
                                <br /><br />
                                Observe atentamente o seu desejo por novidades é a base da sua infinita criatividade. No entanto, é importante encontrar uma estrutura que funcione para você, pois necessita de um certo nível de disciplina para desbloquear seu potencial, assim também como se interessar por analisar sua consciência ou inconsciência na maneira como se comporta diante dos seus desejos. Ao dar mais valor a paixão do que a própria vida você torna-se tão determinado a ter sucesso que esquece a importância da disciplina e de valores extremamente necessários à sua conduta moral. De que adianta o sucesso sem a saudável consideração ao que é lícito? A disciplina como consistência em um determinado comportamento para conquistar algo quanto a disciplina moral a que nos habitua a medir com amor e compaixão onde realmente podemos empenhar a nossa paixão e determinação.
                                <br /><br />
                                Nesse contexto, sua vida se direciona mais para a criatividade, sendo enérgica e extremamente espontânea. A necessidade de fazer mudanças e buscar respostas vem do desejo de encontrar prazer e evitar o sofrimento. No entanto, ao negligenciar sua verdadeira missão na terra, você ficará triste ao perceber que alguns podem interpretar seu comportamento como autocomplacente ou frívolo, mas não vá além disso. Permita-se correr riscos, pois essa é a sua forma de jogar, e a aventura é seu sobrenome. Busque seus desafios, pois assim prosperará em situações imprevisíveis.
                                <br /><br />
                                Você é um comunicador excepcional e tem o talento de motivar as pessoas ao seu redor. Esse talento verbal pode ser usado para causas nobres, unindo indivíduos e inspirando mudanças.
                                <br /><br />
                                Contudo, quando em desequilíbrio e incapaz de conceber um Deus que une, agindo de forma completamente individualista e sendo abusado, os resultados podem ser devastadores. No cenário mais favorável, estamos tratando de um habilidoso manipulador, mas no pior dos casos, estamos diante de um Adolf Hitler.
                                <br /><br />
                                Um homem completamente dilacerado, com um aperto de mão frouxo e incapaz de manter relações humanas saudáveis, desde as mais simples até as mais íntimas. Atormentado por um complexo de Édipo extremo, desenvolvendo uma ligação doentia com sua mãe, sendo profundamente traumatizado ao presenciar atos contraditórios entre os pais, além de sofrer graves complexos de inferioridade em relação aos colegas de escola devido às suas origens modestas. Em relação ao pai, há uma dinâmica de subserviência e temor, porém há a percepção de que o pai exerce sua liderança familiar de maneira excessivamente severa, tirânica e injusta.
                                <br /><br />
                                Como um indivíduo determinado, você prefere não se acomodar, sendo flexível, desinteressado ou oportunista em suas relações com parceiros, empregos ou simples descontrações e hobbies. Em busca da próxima grande aventura, é propenso a deixar assuntos em aberto para que outros lidem com eles. Também se caracteriza pela impulsividade, rapidez, impaciência, inflexibilidade e indulgência, mas um dos seus maiores desafios é a necessidade de gratificação instantânea. Sempre em busca de situações emocionantes, frequentemente tende a experimentar álcool, drogas, novos alimentos e novidades.
                                <br /><br />
                                Indivíduos com uma missão de vida como a sua enfrentam desafios ao buscar uma carreira que os satisfaça plenamente, não apenas se recusando a se contentar com um emprego convencional das 9 às 5, mas também por buscar se envolver apaixonadamente em um trabalho específico, apenas para descobrir que não corresponde às suas expectativas e desejos. Além disso, têm consciência de que sua paixão pode ser passageira e, consequentemente, resiste a experimentar coisas novas.
                                <br /><br />
                                Assim, o ciclo vicioso persiste. O medo de se comprometer leva à falta de compromisso, o que, por sua vez, intensifica a inquietude e ansiedade, levando a ideia de uma vida sem propósito. Existe o perigo de cair na armadilha de buscar algo novo e emocionante em sua vida, mas temendo arriscar-se e ficar preso em um trabalho que deteste. No entanto, nem tudo é sombrio.
                                <br /><br />
                                Você é uma pessoa inteligente, versátil e capaz de se adaptar a diferentes situações. Possui habilidades em diversas áreas e, se encontrar uma carreira que permita trabalhar de forma independente, alcançará o sucesso desejado.
                                <br /><br />
                                Como você necessita de liberdade, a carreira escolhida deve permitir funções e responsabilidades variadas, de forma a evitar a monotonia. E assim, encontrará satisfação em uma ampla variedade de carreiras, como: Turismo, Marketing, Ensino, Fotografia, Guias de turismo, Palestrantes motivacionais, Pesquisa, Escrita, Produção cinematográfica, Treinamento e coisas que envolvam novidades!
                                <br /><br />
                                Como é adaptável e ousado, deve assumir responsabilidade, pois pode naturalmente ser levado a posições de autoridade. Você é excelente para lidar com as pessoas e perceber muitas oportunidades e com o seu propósito de vida não apenas precisa lidar com suas batalhas internas, mas também discorda das normas sociais.
                                <br /><br />
                                Um dos maiores desafios para alguém como você é compreender que a inquietude não significa que nunca encontrará a felicidade na vida, ou que precisa evitar a rotina a todo custo. Precisa aproveitar a curiosidade infantil e o amor pela aventura com as pessoas e coisas ao seu redor é o primeiro passo para uma vida enriquecedora e realizada.
                                <br /><br />
                                Ao ter consciência da necessidade desesperada por aventura e, às vezes, uma natureza rebelde, será capaz de encontrar maneiras de construir uma vida emocionante, nova e que ofereça a estabilidade necessária para ser feliz em um mundo estruturado.
                                <br /><br />
                                O seu talento está ligado à lua e diz respeito a necessidade de autoconhecimento e o desenvolvimento da intuição. Ao contrário do sol — que é expansivo e brilhante —, o satélite traz uma energia intimista de intuição e autoconhecimento. Você também pode ter muitas visões através dos seus sonhos, que na maioria das vezes, são proféticos ou orientadores.
                                <br /><br />
                                Para descobrir qual é a diferença que mora em nós, precisamos do autoconhecimento. O autoconhecimento é, nada mais, do que olhar para dentro. A felicidade só é possível quando estamos fluindo e só podemos fluir dentro do caminho que é o nosso. Já a intuição abre caminhos. O hemisfério esquerdo do cérebro interpreta literalmente as frases ditas, já o hemisfério direito percebe a intenção oculta de quem fala. O esquerdo entende pelo aspecto lógico, racional e sequencial, e o direito compreende aos saltos, tem insight e visão holística, e a intuição é uma forma de conhecimento inconsciente que faz com que possamos tomar atitudes de forma mais rápida.
                                <br /><br />
                                Sente grande necessidade de autonomia e liberdade para agir. Não gosta de ser mandado, preferindo "ser o cabeça" e liderar; só aceitará bem um chefe, se este o deixar trabalhar com independência. Não gosta de pedir: faz primeiro, e depois comunica. Se tiver sócio, precisará delimitar bem o seu território, para que cada um "seja dono do seu pedaço" e não interfira nas decisões do outro.
                                <br /><br />
                                Não gosta de rotina, e de apenas continuar aquilo que foi construído pelos outros. Se você for chamado para criar uma nova empresa ou frente de trabalho no interior da Floresta Amazônica, em condições difíceis, mas onde tenha que mostrar o seu espírito empreendedor, irá com entusiasmo. No entanto, quando a empresa já estiver implantada e funcionando normalmente, sem apresentar grandes novidades, ficará inquieto, sentindo necessidade de novos desafios.
                                <br /><br />
                                Na vida passada você adotou uma postura completamente desconexa, solta e irresponsável com a sua própria família e as suas obrigações. Não desejava ajudar ninguém e só pensava em si mesmo, totalmente egoísta, autoagressão.
                                <br /><br />
                                Há uma linha muito tênue que difere egoísmo de amor-próprio. Uma pessoa egoísta é aquela que acredita que seus interesses são os mais importantes, pensa que só a sua opinião é válida e que as suas necessidades devem ser atendidas, muitas vezes, em detrimento das necessidades dos demais.
                                <br /><br />
                                Nesta existência atual, precisa aprender a se relacionar com respeito, compreensão e paciência, assumir os compromissos de sua responsabilidade e daqueles que possam surgir no decorrer dos anos, a cultivar os valores da família, inserindo o cenário mais propício ao progresso material e espiritual de todos.
                                <br /><br />
                                Deverá ser compreensivo nessas ocasiões, pois os “parentes” e amigos farão pouco ou até mesmo nada para te ajudar e, na verdade, será exatamente o contrário: vão sobrecarregá-lo com muitas exigências, até que aprenda definitivamente esta importante lição.
                                <br /><br />
                                Em sua vida passada, não precisava se preocupar com ganhar dinheiro ou mesmo se entregar ao labor necessário a qualquer sobrevivência foi um gastador, esbanjador, dando prioridade a ostentação e não se preocupava com qualquer que fosse a necessidade de quem ganhava dinheiro ou prezava pelo trabalho ou preservação, só querendo gastar e gastar mais! A falta de vontade e a falta de eficiência na condução da vida profissional e no exercício de suas responsabilidades com a justiça, vem prejudicando o bom andamento de seu desenvolvimento espiritual.
                                <br /><br />
                                Necessita desenvolver o senso de justiça, equilibrar as forças de poder dentro de si, evoluir e exercitar suas capacidades para gerar riquezas e dar o justo valor para o dinheiro como meio de troca e energia que promove o progresso da humanidade.
                                <br /><br />
                                Por sua natureza descompromissada na vida passada foi um ser frio, sem amor e compreensão para com o seu semelhante ou com qualquer sentido de preservação a vida. Não demonstrava qualquer tipo de sentimento de afeto ou carinho, era desumano, indiferente, sem qualquer empatia, extremamente sedutor e cativante, mas pouco se importando com os outros, enganando a todos, mentindo e se deixando consumir em abandono de si mesmo, assim como de outras pessoas.
                                <br /><br />
                                Por causa dessa apatia emocional, na existência atual sofre alguns obstáculos na sua vida, com algumas perdas significantes, longos períodos desempregado, doenças diversas e, também decepções com amigos, parentes, sócios, cônjuge ou simplesmente companheiros.
                                <br /><br />
                                Precisa desenvolver a compaixão como sentimento mais elevado do amor, sentimento piedoso de simpatia para com a tragédia pessoal de outrem, acompanhado do desejo de minorá-la; participação espiritual na infelicidade alheia que suscita um impulso altruísta de ternura para com o sofredor e assumir a sua parcela das responsabilidades que dizem respeito ao progresso material e espiritual de toda a humanidade; cultivar a generosidade e o perdão, praticar a caridade moral e material, exercitar a ética, oferecer a outra face da verdade aos que lhe ofendem.
                                <br /><br />
                                A sua dívida cármica representa a morte de várias maneiras. Esta prova de regeneração aponta para os atentados contra a vida humana em geral de toda ordem e natureza cometidos em encarnações passadas com seus reflexos na atualidade. Com absoluta certeza, em vidas passadas cometeu transgressões às Leis Naturais e se suicidou, foi muito passivo e negligente com a própria vida e por vícios apressou a própria morte.
                                <br /><br />
                                Não estamos perante um castigo divino, mas sim, perante uma lei de causalidade, de causa e efeito, onde cada um recolhe, nos escaninhos da alma, tudo o que semeou outrora, de bom e de pior. Cada dificuldade, é, pois, uma oportunidade de retificação, de aprendizagem, de evolução, e o Espírito que reencarna com uma determinada limitação, aprenderá a valorizar aquilo que desperdiçou numa vida passada.
                                <br /><br />
                                Qualquer que tenha sido a causa, ela foi executada no exercício do livre arbítrio e discernimento e atentou contra a sua vida, quer tenha sido por iniciativa própria ou no cumprimento de ordens superiores, porquanto a responsabilidade é intransferível.
                                <br /><br />
                                Nesta existência, em virtude dessas infrações, se não tiver cuidado e amor poderá se tornar preguiçoso, indiferente ao que acontece ao seu redor e inclinar-se para a crítica, seja ela de cunho pessoal, político ou existencial.
                                <br /><br />
                                Precisa desenvolver a disciplina no trabalho, nos estudos, nas atividades diversas, mantendo-se sempre em ocupação a fim de evitar as tentações que levam a reincidir no mesmo erro. Dominar os medos, vigiar os pensamentos e procurar auxílio afetivo na família ou em terapias.
                                <br /><br />
                                É o equilíbrio que aponta para as injustiças diversas praticadas em encarnações passadas eximindo-se das suas responsabilidades perante a justiça humana, mas não da própria consciência, muitas vezes dando as responsabilidades por esses atos a outros que pagaram por eles.
                                <br /><br />
                                Cometeu transgressões no passado, irá pagar por isso. Se você roubou, fraudou ou fez pessoas sofrerem na sua mão em vidas passadas, seja de forma financeira ou moral, você irá pagar por isso. Isso faz com que se não pisar no freio e poderá criar uma espécie de alerta para o sentido contrário. Ou seja, precisa ser tolerante e menos egoísta, pois o que foi plantado lá atrás ainda pode ser colhido agora.
                                <br /><br />
                                E é através de uma vida honesta, reta, de servidão com amor, afeto e bondade que você consegue equilibrar essa dívida cármica e viver em paz consigo mesmo e com o próximo. Agindo assim, o sucesso e a prosperidade serão consequências de como você vem agindo hoje.
                                <br /><br />
                                São suas tendências, desejo ardente por individualidade deixando de levar em consideração as Leis Naturais que pedem a todo instante e por toda a vida “amar ao próximo como a si mesmo”. Mas, existe em você uma predisposição determinante e necessária em ser trabalhada de ser autoritário, dominador, arrogante e egoísta.
                                <br /><br />
                                Desejo de mudança e, também de liberdade pessoal. Existe uma predisposição para viver à custa dos outros, exagerar no sexo, de drogas como cigarro e álcool, para mudanças sem motivo que apareça e para ser afoito e agir na impulsividade.
                                <br /><br />
                                Você reage extremamente voltado para o sentimentalismo que é a emulação de sentimentos de maneira exagerada para alcançar determinado fim. Ele se torna um vício cultural onde as pessoas crescem e se formam aprendendo a serem exageradamente emotivas. O sentimento se torna o centro da vida e algo inviolável, “se eu sinto, logo tenho razão”. Sua primeira preocupação numa crise é com os seus entes queridos, seus objetos de coleção e animais de estimação, e tudo com base no sentimentalismo e muito raramente deixa ser presenteado pelo senso de altruísmo ou mesmo empatia e amor. Com isso a humildade, o companheirismo, a compaixão caem por terra deixando a você a mercê de uma face extremamente difícil de lidar.
                                <br /><br />
                                Os seus desafios consistem em aprender a ter um meio termo entre um excesso de preocupação e questões materiais e precisa praticar o desapego em relação a essa forma de pensar e agir, precisa aprender como usar o dinheiro e o poder, assim como, o que eles podem trazer de bom para você.
                                <br /><br />
                                Você cria uma tendência à sensibilidade em relação aos próprios sentimentos e passa um tempo pensando neles, onde talvez acabe não tomando conhecimento dos sentimentos do próximo. Tem a inclinação a exagerar e fazer tempestade em copo d’água, jamais esquecendo as situações e às vezes deixando de perdoar. É preciso aprender a cuidar de si, cultivar uma atitude mais liberal e tolerante em relação à vida e parar de utilizar os próprios sentimentos e emoções como referência.
                                <br /><br />
                                Este desafio é o mais difícil de ser vencido. Ele pode ressurgir inesperadamente diante de alguma situação um pouco mais complicada em sua vida, independente de qual momento da vida esteja. Porém, como agora você estará ciente e consciente, será mais fácil de resolver. É preciso aprender a ter um meio termo entre ser um “escravo” e ser muito exigente e dominador. É preciso aprender a aceitar as pessoas como são e sem esperar muito do próximo. É preciso entender que o fato de ser você um ser humano extremamente encantador e que ser assim não te dá o direito a ser soberano sobre a vida e nem sobre Deus, seu poder é limitado aos domínios do sagrado que já existia antes mesmo de você existir.
                            </span>
                        
                        </p>
                        {/* <p className="read_more" onClick={() => setCollapse((prev) => !prev)}>
                            Ler Mais...
                        </p> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Carta;
