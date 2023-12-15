import { Contact } from "../model/Contact";

interface ICreateContactDTO {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: string;
}

interface IContactRepository {
  findByPhoneNumber(phoneNumber: string): Contact | undefined;
  findById(id: string): Contact | undefined;
  create({ name, lastName, phoneNumber }: ICreateContactDTO): void;
  list(): Contact[];
  delete(id: string): void;
  update({ name, lastName, phoneNumber, id }: Contact): Contact | null;
}

export { IContactRepository, ICreateContactDTO };
