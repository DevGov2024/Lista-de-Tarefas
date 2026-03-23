# Usando imagem oficial do Node
FROM node:18

# Diretório dentro do container
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta do Next/React
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]