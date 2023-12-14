import { Contact } from "../model/Contact";

interface ICreateContactDTO {
  name: string;
  lastName: string;
  phoneNumber: string;
}

class ContactRepository {
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
