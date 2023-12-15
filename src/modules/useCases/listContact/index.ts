import { ContactRepository } from "../../repositories/ContactRepository";
import { ListContactController } from "./ListContactController";
import { ListContactUseCase } from "./ListContactUseCase";

const contactRepository = ContactRepository.getInstance();
const listContactUseCase = new ListContactUseCase(contactRepository);

const listContactController = new ListContactController(listContactUseCase);

export { listContactController };
