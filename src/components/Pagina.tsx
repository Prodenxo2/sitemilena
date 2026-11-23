import Visor from "./Visor";
import Celulares from "./Celulares";
import { IconeSeta, IconeWhats } from "./Icones";
import { config, linkWhats } from "../config";

const { nome, linkIndicacao, video } = config;

function BotaoConta({ texto = "Criar minha conta", variante = "" }: { texto?: string; variante?: string }) {
  return (
    <a className={`botao ${variante}`} href={linkIndicacao} target="_blank" rel="noopener">
      {texto} <IconeSeta />
    </a>
  );
}

const passos = [
  {
    titulo: "Crie sua conta pelo link",
    texto: `O cadastro é gratuito e feito direto na plataforma da Hub. Usando o link da ${nome}, a conta já fica vinculada à indicação dela.`,
  },
  {
    titulo: "Veja se o seu celular serve",
    texto: "Confira a lista de modelos aqui embaixo. A confirmação final é feita no próprio cadastro, antes de você gravar qualquer coisa.",
  },
  {
    titulo: "Grave suas tarefas de casa",
    texto: "Com o celular preso na cabeça, você grava o que já ia fazer: lavar louça, dobrar roupa, cozinhar. A Hub informa que manda o kit de suporte de graça.",
  },
  {
    titulo: "Receba pelo que for aprovado",
    texto: "Cada vídeo passa por uma análise. O que for aprovado entra no seu saldo, e o saque é feito por Pix ou transferência.",
  },
];

const perguntas = [
  {
    p: "Preciso pagar alguma coisa?",
    r: "Não. O cadastro é gratuito. Se alguém pedir Pix para liberar tarefa, desbloquear conta ou fazer saque, é golpe. A Hub não cobra nada para você trabalhar.",
  },
  {
    p: "Quanto dá para ganhar de verdade?",
    r: "A Hub divulga R$ 25 (US$ 5) por hora aprovada em tarefas domésticas. O ponto é a palavra aprovada: o tempo de preparar, enviar ou regravar não conta. Se você gravar 3 horas e 2 forem aprovadas, recebe por 2. Os valores podem mudar, então confira no painel do app.",
  },
  {
    p: "Tenho que comprar suporte de cabeça?",
    r: "Não precisa comprar antes. A Hub informa que envia um kit com faixa de cabeça e suporte para o celular. Espere o cadastro confirmar se o seu celular é compatível.",
  },
  {
    p: "O que eu posso gravar?",
    r: "Atividades reais do dia a dia, do começo ao fim e no seu ritmo normal. Não grave crianças, outras pessoas sem autorização, telas com senha ou documentos, nem lugares onde filmar não é permitido.",
  },
  {
    p: "O que acontece com os meus vídeos?",
    r: "Os vídeos aprovados podem ser licenciados para empresas que treinam inteligência artificial e robôs. Depois que entram num conjunto de dados, não dá para tirar. Leia os termos antes do primeiro envio.",
  },
  {
    p: "Esta página é da Hub Data?",
    r: `Não. É uma página independente da ${nome}, feita para explicar como funciona. Cadastro, análise dos vídeos e pagamentos são feitos pela própria plataforma da Hub.`,
  },
];

export default function Pagina() {
  return (
    <>
      <a className="pular" href="#principal">Ir para o conteúdo</a>

      <header className="topo">
        <div className="largura topo-linha">
          <p className="marca">
            <img src="/hub-logo.png" alt="" width={34} height={32} />
            <span className="marca-textos">
              <span className="marca-nome">Hub Data</span>
              <span className="marca-sub">indicação da {nome}</span>
            </span>
          </p>
          <nav aria-label="Seções">
            <a href="#como-funciona">Como funciona</a>
            <a href="#celulares">Celulares compatíveis</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <BotaoConta texto="Criar conta" variante="pequeno" />
        </div>
      </header>

      <main id="principal">
        <section className="hero">
          <div className="largura hero-grade">
            <div className="hero-texto">
              <h1>Você já lava a louça todo dia. Agora pode receber por isso.</h1>
              <p className="hero-sub">
                A Hub Data paga para você gravar tarefas comuns de casa com o celular. Esses vídeos
                ajudam a ensinar robôs e inteligência artificial a fazer o que a gente faz.
              </p>
              <div className="hero-acoes">
                <BotaoConta />
                <a className="botao-texto" href={video ? "#video" : "#como-funciona"}>Ver como funciona</a>
              </div>
              <p className="aviso">
                O pagamento depende da aprovação de cada vídeo e das regras da plataforma.
              </p>
            </div>
            <Visor />
          </div>
        </section>

        {video && (
          <section id="video" className="bloco bloco-video">
            <div className="largura video-grade">
              <div>
                <h2>Veja em 15 segundos</h2>
                <p className="intro">
                  O vídeo da própria Hub mostra a ideia: você grava o que já faz, em casa ou no
                  trabalho, e esses vídeos viram material para treinar inteligência artificial.
                </p>
                <div className="video-acao">
                  <BotaoConta />
                </div>
              </div>
              <div className="video-moldura">
                <video src={video} controls playsInline preload="metadata" muted>
                  Seu navegador não conseguiu abrir o vídeo.
                </video>
              </div>
            </div>
          </section>
        )}

        <section id="como-funciona" className="bloco">
          <div className="largura">
            <h2>Como funciona</h2>
            <p className="intro">Quatro etapas, e as duas primeiras levam poucos minutos.</p>
            <ol className="passos">
              {passos.map((passo, n) => (
                <li key={passo.titulo}>
                  <span className="passo-num" aria-hidden="true">{n + 1}</span>
                  <h3>{passo.titulo}</h3>
                  <p>{passo.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ganhos">
          <div className="largura ganhos-grade">
            <div>
              <h2>Quanto paga</h2>
              <p className="ganhos-valor">
                R$ 25 <span>por hora de vídeo aprovado em tarefas de casa</span>
              </p>
            </div>
            <div className="ganhos-conta">
              <p>
                Conta honesta: você recebe só pelo tempo aprovado. Se gravar 3 horas e 2 passarem
                na análise, entram R$ 50. Não é salário fixo, mas é dinheiro por uma coisa que você
                já faz em casa.
              </p>
              <p className="pequeno-texto">
                Valor divulgado pela Hub para tarefas domésticas (US$ 5 por hora). Pode mudar, e o
                valor de cada atividade aparece no painel.
              </p>
            </div>
          </div>
        </section>

        <section className="bloco">
          <div className="largura">
            <h2>Para o vídeo ser aprovado</h2>
            <p className="intro">A maioria das reprovações vem de detalhes fáceis de evitar.</p>
            <div className="regras">
              <div className="regra regra-sim">
                <h3>Faça assim</h3>
                <ul>
                  <li>Grave a tarefa inteira, do começo ao fim</li>
                  <li>Mantenha o ritmo natural, sem pressa e sem teatro</li>
                  <li>Deixe as mãos aparecendo no vídeo</li>
                  <li>Escolha um lugar bem iluminado</li>
                  <li>Prenda bem o celular para a imagem não tremer</li>
                </ul>
              </div>
              <div className="regra regra-nao">
                <h3>Evite</h3>
                <ul>
                  <li>Pausas longas no meio da gravação</li>
                  <li>Tarefas inventadas só para gravar</li>
                  <li>Filmar crianças ou outras pessoas</li>
                  <li>Mostrar documentos, cartões ou senhas</li>
                  <li>Lugares escuros ou contra a luz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="celulares" className="bloco bloco-celular">
          <div className="largura">
            <h2>Seu celular é compatível?</h2>
            <p className="intro">
              Esta lista é informativa e pode mudar. A confirmação final aparece no cadastro, quando
              você informa o modelo do seu aparelho.
            </p>
            <Celulares />
            <div className="cel-cta">
              <BotaoConta texto="Conferir no cadastro" />
            </div>
          </div>
        </section>

        <section id="duvidas" className="bloco">
          <div className="largura estreito">
            <h2>Dúvidas comuns</h2>
            <div className="faq">
              {perguntas.map((item) => (
                <details key={item.p}>
                  <summary>{item.p}</summary>
                  <p>{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="recado">
          <div className="largura estreito">
            <p className="recado-oi">Oi, aqui é a {nome}.</p>
            <p className="recado-texto">
              Montei esta página para explicar a Hub Data sem enrolação. Se você travar em alguma
              parte do cadastro ou quiser saber mais antes de começar, me chama que eu te ajudo.
            </p>
            <div className="recado-acoes">
              <BotaoConta texto="Criar minha conta" variante="claro" />
              {linkWhats && (
                <a className="botao botao-whats" href={linkWhats} target="_blank" rel="noopener">
                  <IconeWhats tamanho={20} /> Falar com a {nome}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="largura">
          <p>
            Página independente de indicação, feita pela {nome}. Este não é o site oficial da Hub
            Data. Cadastro, análise de vídeos e pagamentos são feitos pela plataforma Hub.
          </p>
          <p>© {new Date().getFullYear()} {nome}</p>
        </div>
      </footer>

      {linkWhats && (
        <a className="whats-flutuante" href={linkWhats} target="_blank" rel="noopener" aria-label={`Falar com a ${nome} no WhatsApp`}>
          <IconeWhats tamanho={28} />
        </a>
      )}
    </>
  );
}
