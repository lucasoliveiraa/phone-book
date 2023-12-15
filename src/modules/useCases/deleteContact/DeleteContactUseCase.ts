import { Contact } from "../../model/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";

class DeleteContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute(id: string) {
    const contactAlreadyExists = this.contactRepository.findById(id);

    if (!contactAlreadyExists) {
      throw new Error("Contact no exists!");
    }

    this.contactRepository.delete(id);
  }
}

export { DeleteContactUseCase };
