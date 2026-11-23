import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { config } from "../config";
import "./globals.css";

const titulos = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--fonte-titulo",
  display: "swap",
});

const texto = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fonte-texto",
  display: "swap",
});

const titulo = `Ganhe gravando tarefas de casa | Indicação da ${config.nome}`;
const descricao =
  "Grave tarefas do dia a dia com o celular e receba por cada hora de vídeo aprovado na Hub Data. Veja como funciona e crie sua conta.";

export const metadata: Metadata = {
  metadataBase: new URL(config.urlDoSite),
  title: titulo,
  description: descricao,
  robots: { index: true, follow: true },
  openGraph: {
    title: titulo,
    description: descricao,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: titulo, description: descricao, images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#070e0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulos.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
