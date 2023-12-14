import { ContactRepository } from "../repositories/ContactRepository";

interface IRequest {
  name: string;
  lastName: string;
  phoneNumber: string;
}

class CreateContactService {
  constructor(private contactRepository: ContactRepository) {}

  execute({ name, lastName, phoneNumber }: IRequest): void {
    const phoneNumberAlreadyExists =
      this.contactRepository.findByPhoneNumber(phoneNumber);

    if (phoneNumberAlreadyExists) {
      throw new Error("PhoneNumber Already exists!");
    }

    this.contactRepository.create({ name, lastName, phoneNumber });
  }
}

export { CreateContactService };
