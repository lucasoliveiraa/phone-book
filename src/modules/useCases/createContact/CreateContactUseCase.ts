import { AppError } from "../../../errors/AppError";
import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  name: string;
  lastName: string;
  phoneNumber: string;
}

class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute({ name, lastName, phoneNumber }: IRequest): void {
    if (!name || !lastName || !phoneNumber) {
      throw new AppError(
        "Completed request with name or last name or phone number!"
      );
    }
    const phoneNumberAlreadyExists =
      this.contactRepository.findByPhoneNumber(phoneNumber);

    if (phoneNumberAlreadyExists) {
      throw new AppError("PhoneNumber already exists!");
    }

    this.contactRepository.create({ name, lastName, phoneNumber });
  }
}

export { CreateContactUseCase };
