# 📘 Blog Frontend - Tech Challenge (Fase 03)

## 📌 Descrição

Este projeto consiste no desenvolvimento de uma interface gráfica para um sistema de blog, utilizando React e integração com uma API REST.

A aplicação permite que usuários visualizem postagens, enquanto usuários autenticados (professores) podem criar, editar e excluir conteúdos.

O projeto foi originalmente baseado em um sistema de gerenciamento de tarefas (To-Do List), sendo adaptado para atender aos requisitos de um sistema de blog.

---

## 🎯 Objetivo

Desenvolver uma aplicação front-end moderna, responsiva e funcional, capaz de consumir endpoints REST e proporcionar uma boa experiência ao usuário.

---

## 🚀 Tecnologias Utilizadas

* React
* TypeScript
* Styled Components
* Axios
* React Router DOM
* JSON Server (simulação de API)

---

## 🏗️ Arquitetura do Projeto

A aplicação está organizada em:

* **components/** → Componentes reutilizáveis (Header, Footer, etc.)
* **pages/** → Páginas da aplicação (AddTask, TaskList, Login, etc.)
* **reducers/** → Gerenciamento de estado com useReducer
* **hooks/** → Hooks customizados (ex: geolocalização)
* **api/** → Comunicação com backend

---

## 📄 Funcionalidades

### 👨‍🎓 Usuários comuns

* Visualizar lista de posts
* Buscar informações básicas (título, autor, descrição)
* Visualizar conteúdo completo do post

### 👨‍🏫 Professores (autenticados)

* Criar novos posts
* Excluir posts existentes
* Acessar funcionalidades administrativas

---

## 🔐 Autenticação

A autenticação foi implementada de forma simplificada utilizando:

* `localStorage`
* Controle de estado (`isAuthenticated`)

Apenas usuários autenticados podem realizar ações de criação e exclusão de posts.

---

## 🔌 Integração com API

A aplicação consome uma API REST simulada com JSON Server.

### Endpoints utilizados:

* `GET /tasks` → listar posts
* `POST /tasks` → criar post
* `DELETE /tasks/:id` → excluir post
* `PUT /tasks/:id` → atualizar post

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd nome-do-projeto
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o JSON Server

```bash
npx json-server --watch db.json
```

### 4. Rodar o projeto

```bash
npm run dev
```

---

## 📱 Responsividade

A interface foi desenvolvida utilizando Styled Components, garantindo adaptação para diferentes tamanhos de tela.

---

## 🎥 Demonstração

A aplicação permite demonstrar:

* Criação de post
* Listagem de posts
* Visualização de conteúdo completo
* Exclusão de post
* Login de professor

---

## 🧠 Desafios Enfrentados

* Adaptação de um sistema de tarefas para um sistema de blog
* Estruturação dos dados (title, author, description, content)
* Controle de autenticação e permissões
* Integração com API REST
* Evitar inconsistência de dados entre frontend e backend

---

## 📈 Melhorias Futuras

* Implementação de edição de posts
* Autenticação com JWT
* Criação de página dedicada para leitura de posts
* Deploy da aplicação
* Melhorias na interface e experiência do usuário

---

## 👨‍💻 Autor

Gabriel Henrique

---

## 📌 Considerações Finais

O projeto atende aos requisitos propostos no Tech Challenge, demonstrando conhecimentos em React, integração com APIs e organização de código.

---
