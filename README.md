## 💻 Projeto

**Backend** - Projeto proposto pela empresa SOAP, para um desafio de uma lista telefonica.

## 🚀 Como rodar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/lucasoliveiraa/phone-book.git

# Instale as dependências
$ yarn

# Execute o comando
$ yarn dev

# Rota criar
POST: http://localhost:3333/
Body: {
  "name": "NAME",
  "lastName": "LASTNAME",
  "phoneNumber": "PHONENUMBER"
}

# Rota listar
GET: http://localhost:3333/

# Rota alterar
PUT: http://localhost:3333/:id
Body: {
  "name": "NAME",
  "lastName": "LASTNAME",
  "phoneNumber": "PHONENUMBER"
}

# Rota deletar
DELETE: http://localhost:3333/:id
```
