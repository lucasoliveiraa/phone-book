import { ContactRepository } from "../../repositories/ContactRepository";
import { CreateContactController } from "./CreateContactController";
import { CreateContactUseCase } from "./CreateContactUseCase";

const contactRepository = ContactRepository.getInstance();
const createContactUseCase = new CreateContactUseCase(contactRepository);

const createContactController = new CreateContactController(
  createContactUseCase
);

export { createContactController };
