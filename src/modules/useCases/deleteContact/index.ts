import { ContactRepository } from "../../repositories/ContactRepository";
import { DeleteContactController } from "./DeleteContactController";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

const contactRepository = ContactRepository.getInstance();
const deleteContactUseCase = new DeleteContactUseCase(contactRepository);

const deleteContactController = new DeleteContactController(
  deleteContactUseCase
);

export { deleteContactController };
