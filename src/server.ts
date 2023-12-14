import express from 'express'
import { contactRoutes } from './routes/contact.routes';

const app = express()

app.use(express.json())

app.use(contactRoutes)

app.listen(3333, () => { console.log('Server is running') });