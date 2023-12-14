import { Router } from "express";
import { ContactRepository } from "../modules/repositories/ContactRepository";
import { createContactController } from "../modules/useCases/createContact";

const contactRoutes = Router();
const contactRepository = new ContactRepository();

contactRoutes.post("/", (request, response) => {
  return createContactController.handle(request, response);
});

export { contactRoutes };
