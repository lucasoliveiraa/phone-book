import { AppError } from "../../../errors/AppError";
import { Contact } from "../../model/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  id: string;
  name: string;
  lastName: string;
  phoneNumber: string;
}

class UpdateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute({ name, lastName, phoneNumber, id }: IRequest) {
    const contactAlreadyExists = this.contactRepository.findById(id);

    if (!contactAlreadyExists) {
      throw new AppError("Contact not found!");
    }

    return this.contactRepository.update({ name, lastName, phoneNumber, id });
  }
}

export { UpdateContactUseCase };
