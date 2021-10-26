<h1 align="center" style="color: #000;">
  <img src="https://github.com/MicaelRiboura/timesheetApp/blob/main/images/timesheet.png" alt="Logo" height="200">
</h1>

<h3 align="center">
  Timesheet - Seu WebApp para gerência de horários
</h3>


<h1 align="center" style="color: #000;">
  <img src="https://github.com/MicaelRiboura/timesheetApp/blob/main/images/timesheet-presentation.jpg" alt="Logo">
</h1>


## 🌟 Time
<table>
  <tr>
    <td align="center"><a href="https://github.com/MicaelRiboura"><img src="https://avatars.githubusercontent.com/u/53049385?v=4" width="100px;" alt=""/><br /><sub><b>Micael Riboura</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/TheusDias"><img src="https://avatars.githubusercontent.com/u/66037020?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Dias</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/messias-barreto"><img src="https://avatars.githubusercontent.com/u/60475024?v=4" width="100px;" alt=""/><br /><sub><b>Messias Barreto</b></sub></a><br /></td>
  </tr>
</table>

## 🚀 Tecnologias

### Backend

- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)

### Frontend

- [ReactJS](https://reactjs.org)
- [Tailwindcss](https://tailwindcss.com/docs)

## 💻 Começando

### Clone esse projeto e acesse sua pasta:

Para clonar e rodar a aplicação, você precisará [Git](https://git-scm.com/), [Node.js v14.18](https://nodejs.org) ou maior + [Yarn v1.22](https://yarnpkg.com/) ou maior instalados no seu computador.

```bash
$ git clone git@github.com:MicaelRiboura/timesheetApp.git
```

### Backend


```bash
# Acesse a pasta do backend
$ cd backend

# Instale as dependências
$ yarn install

# Crie o banco no Postgres
$ yarn sequelize db:create

# Cria as tabelas no banco conforme os arquivos migrations
$ yarn sequelize db:migrate

# para finalizar, inicie o servidor
$ yarn dev
```

#### Comandos do Sequelize:


```bash
# Cria o banco no Postgres
$ yarn sequelize db:create

# Cria as tabelas no banco conforme os arquivos migrations
$ yarn sequelize db:migrate

# Cria uma migration
$ yarn sequelize migration:create --name=nome-da-migration
```

### Frontend

```bash
# Acesse a pasta do frontend
$ cd frontend

# Instale as dependências
$ yarn install

# para finalizar, inicie a aplicação web
$ yarn start
```


## Comandos GIT

```bash
# Acessa os status dos arquivos
$ git status

# Prepara os arquivos modificados para o commit naquela pasta
$ git add .

# Cria um novo commit
$ git commit -am 'Meu commit'

# Cria uma nova branch
$ git branch nome-da-branch

# Lista as branches
$ git branch

# Navega para uma branch
$ git checkout nome-da-branch

# Cria e navega para uma nova branch
$ git checkout -b nome-da-branch

# Deleta uma branch
$ git branch -d nome-da-branch

# Envia seus commits para o repositório remoto
$ git push

# Atualiza seu repositório local com alterações do remoto
$ git pull
```