## 💻 Project

**Backend** - Project proposed by the company SOAP, for a challenge of the an list phone.

## 📚 API document swagger

```bash
$ http://localhost:3333/api-docs
```

## 🚀 How to run the project

```bash
# Clone this repository
$ git clone https://github.com/lucasoliveiraa/phone-book.git

# Install dependencies
$ yarn

# Run command
$ yarn dev

# Route create
POST: http://localhost:3333/
Body: {
  "name": "NAME",
  "lastName": "LASTNAME",
  "phoneNumber": "PHONENUMBER"
}

# Route list
GET: http://localhost:3333/

# Route update
PUT: http://localhost:3333/:id
Body: {
  "name": "NAME",
  "lastName": "LASTNAME",
  "phoneNumber": "PHONENUMBER"
}

# Route delete
DELETE: http://localhost:3333/:id
```
