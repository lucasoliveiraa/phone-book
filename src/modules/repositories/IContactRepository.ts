import { Contact } from "../model/Contact";

interface ICreateContactDTO {
  name: string;
  lastName: string;
  phoneNumber: string;
}

interface IContactRepository {
  findByPhoneNumber(phoneNumber: string): Contact | undefined;
  create({ name, lastName, phoneNumber }: ICreateContactDTO): void;
}

export { IContactRepository, ICreateContactDTO };
