type Marca = {
  nome: string;
  inclui: string;
  modelos: string[];
  aviso?: string;
};

const marcas: Marca[] = [
  {
    nome: "Apple iPhone",
    inclui: "vale para as versões mini, Plus, Pro e Pro Max",
    modelos: ["iPhone 12, 13 e 14", "iPhone 15, 16 e 17"],
    aviso: "iPhone 16e e 17e podem não ser aceitos. Precisa estar no iOS 17.4 ou mais novo.",
  },
  {
    nome: "Samsung Galaxy",
    inclui: "só a linha S, incluindo as versões + e Ultra",
    modelos: ["Galaxy S21, S22 e S23", "Galaxy S24, S25 e S26"],
    aviso: "A linha FE pode não ser aceita.",
  },
  {
    nome: "Google Pixel",
    inclui: "inclusive as versões a e Pro",
    modelos: ["Pixel 6, 7 e 8", "Pixel 9, 10 e 11"],
  },
];

const fora = ["iPhone 11, XR, X e anteriores", "iPhone SE (todos)", "Galaxy das linhas A, M e Z"];

function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <rect width="22" height="22" rx="6" fill="var(--verde)" />
      <path d="m6 11.5 3.2 3L16 7.5" fill="none" stroke="var(--escuro)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Xis() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <path d="m6.5 6.5 9 9m0-9-9 9" stroke="var(--vermelho)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Celulares() {
  return (
    <div className="celulares">
      {marcas.map((m) => (
        <div className="marca-cel" key={m.nome}>
          <h3>
            {m.nome} <small>{m.inclui}</small>
          </h3>
          <ul>
            {m.modelos.map((mod) => (
              <li key={mod}>
                <Check /> {mod}
              </li>
            ))}
          </ul>
          {m.aviso && <p className="cel-aviso">{m.aviso}</p>}
        </div>
      ))}
      <div className="marca-cel marca-fora">
        <h3>Não funcionam</h3>
        <ul>
          {fora.map((mod) => (
            <li key={mod}>
              <Xis /> {mod}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
