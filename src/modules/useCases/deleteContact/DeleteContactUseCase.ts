import { AppError } from "../../../errors/AppError";
import { IContactRepository } from "../../repositories/IContactRepository";

class DeleteContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute(id: string) {
    const contactAlreadyExists = this.contactRepository.findById(id);

    if (!contactAlreadyExists) {
      throw new AppError("Contact not found!");
    }

    this.contactRepository.delete(id);
  }
}

export { DeleteContactUseCase };
