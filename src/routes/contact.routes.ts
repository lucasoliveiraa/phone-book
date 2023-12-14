import { Router } from "express";
import { ContactRepository } from "../repositories/ContactRepository";
import { CreateContactService } from "../services/CreateContactService";

const contactRoutes = Router();
const contactRepository = new ContactRepository();

contactRoutes.post("/", (request, response) => {
  const { name, lastName, phoneNumber } = request.body;

  const createContactService = new CreateContactService(contactRepository);

  createContactService.execute({ name, lastName, phoneNumber });

  return response.status(201).send();
});

export { contactRoutes };
