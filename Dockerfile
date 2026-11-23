# Etapa 1: gera o site estático
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: serve com nginx
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
