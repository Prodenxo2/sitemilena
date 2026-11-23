# Site de indicação da Milena (Hub Data)

## 1. Preencher os dados
Abra `src/config.ts` e troque:
- `linkIndicacao`: já preenchido com MILLA8
- `whatsapp`: já preenchido (5521999078385). Vazio esconde os botões.
- `urlDoSite`: o domínio final do site

## 2. Rodar no computador
```
npm install
npm run dev
```
Abra http://localhost:3000

## 3. Publicar no Easypanel
Crie um App, aponte para o repositório e escolha **Dockerfile** como forma de build.
Porta do container: **80**. O Dockerfile já gera o site estático e serve com nginx.

## Imagem de compartilhamento
Coloque um `og.png` (1200 x 630) em `public/` para a prévia bonita no WhatsApp e Instagram.

## Vídeo
Baixe https://sejahub.saibamais.site/assets/video-explicativo.mp4 e salve em `public/video-explicativo.mp4`.
Sem o arquivo, a seção aparece com o player vazio. Para esconder, deixe `video: ""` no config.
