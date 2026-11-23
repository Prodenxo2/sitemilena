// ============================================================
//  CONFIGURAÇÃO DA PÁGINA
//  Troque só o que está aqui. O resto do site se ajusta sozinho.
// ============================================================

export const config = {
  // Primeiro nome que aparece na página
  nome: "Milena",

  // Link de indicação dela na Hub Data (cole o link completo)
  linkIndicacao: "https://app.hub.xyz/r/MILLA8",

  // WhatsApp com DDI + DDD + número, só números. Ex: 5521999998888
  // Deixe vazio ("") para esconder os botões de WhatsApp.
  whatsapp: "5521999078385",

  // Mensagem que já vem escrita quando a pessoa abre o WhatsApp
  mensagemWhatsapp:
    "Oi Milena, vi sua página da Hub Data e fiquei com uma dúvida sobre o cadastro.",

  // Vídeo explicativo (arquivo dentro da pasta public). Deixe "" para esconder a seção.
  video: "/video-explicativo.mp4",

  // Endereço final do site (usado na prévia de link do WhatsApp/Instagram)
  urlDoSite: "https://seusite.com.br",
};

export const linkWhats = config.whatsapp
  ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.mensagemWhatsapp)}`
  : "";
