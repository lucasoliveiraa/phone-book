import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  name: string;
  lastName: string;
  phoneNumber: string;
}

class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute({ name, lastName, phoneNumber }: IRequest): void {
    const phoneNumberAlreadyExists =
      this.contactRepository.findByPhoneNumber(phoneNumber);

    if (phoneNumberAlreadyExists) {
      throw new Error("PhoneNumber Already exists!");
    }

    this.contactRepository.create({ name, lastName, phoneNumber });
  }
}

export { CreateContactUseCase };
