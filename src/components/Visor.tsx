"use client";

import { useEffect, useState } from "react";

const tarefas = [
  "Lavando a louça",
  "Dobrando a roupa",
  "Arrumando a cama",
  "Cortando legumes",
  "Regando as plantas",
  "Guardando as compras",
];

function formatar(segundos: number) {
  const m = Math.floor(segundos / 60).toString().padStart(2, "0");
  const s = (segundos % 60).toString().padStart(2, "0");
  return `00:${m}:${s}`;
}

export default function Visor() {
  const [i, setI] = useState(0);
  const [tempo, setTempo] = useState(754);

  useEffect(() => {
    const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calmo) return;
    const relogio = setInterval(() => setTempo((t) => t + 1), 1000);
    const troca = setInterval(() => setI((n) => (n + 1) % tarefas.length), 2800);
    return () => {
      clearInterval(relogio);
      clearInterval(troca);
    };
  }, []);

  return (
    <figure className="visor" aria-label="Exemplo de gravação de uma tarefa de casa">
      <span className="canto c1" aria-hidden="true" />
      <span className="canto c2" aria-hidden="true" />
      <span className="canto c3" aria-hidden="true" />
      <span className="canto c4" aria-hidden="true" />

      <div className="visor-topo" aria-hidden="true">
        <span className="rec">
          <i /> REC
        </span>
        <span className="tempo">{formatar(tempo)}</span>
      </div>

      <p className="visor-tarefa" aria-live="off">
        <span key={i}>{tarefas[i]}</span>
      </p>

      <figcaption className="visor-rodape">
        <span>Cada hora aprovada</span>
        <strong>R$ 25</strong>
      </figcaption>
    </figure>
  );
}
