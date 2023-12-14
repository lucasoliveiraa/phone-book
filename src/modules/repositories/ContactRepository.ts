import { Contact } from "../model/Contact";
import { IContactRepository, ICreateContactDTO } from "./IContactRepository";

class ContactRepository implements IContactRepository {
  private contacts: Contact[];
  constructor() {
    this.contacts = [];
  }

  create({ name, lastName, phoneNumber }: ICreateContactDTO): void {
    const newContact = new Contact();
    Object.assign(newContact, {
      name,
      lastName,
      phoneNumber,
      created_at: new Date(),
    });

    this.contacts.push(newContact);
  }

  findByPhoneNumber(phoneNumber: string): Contact | undefined {
    const contact = this.contacts.find(
      (contact) => contact.phoneNumber === phoneNumber
    );
    return contact;
  }
}

export { ContactRepository };
