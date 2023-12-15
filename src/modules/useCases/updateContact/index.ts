import { ContactRepository } from "../../repositories/ContactRepository";
import { UpdateContactController } from "./UpdateContactController";
import { UpdateContactUseCase } from "./UpdateContactUseCase";

const contactRepository = ContactRepository.getInstance();
const updateContactUseCase = new UpdateContactUseCase(contactRepository);

const updateContactController = new UpdateContactController(
  updateContactUseCase
);

export { updateContactController };
