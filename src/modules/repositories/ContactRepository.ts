import { Contact } from "../model/Contact";
import { IContactRepository, ICreateContactDTO } from "./IContactRepository";

class ContactRepository implements IContactRepository {
  private contacts: Contact[];

  private static INSTANCE: ContactRepository;

  private constructor() {
    this.contacts = [];
  }

  public static getInstance(): ContactRepository {
    if (!ContactRepository.INSTANCE) {
      ContactRepository.INSTANCE = new ContactRepository();
    }
    return ContactRepository.INSTANCE;
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

  findById(id: string): Contact | undefined {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact;
  }

  delete(id: string): void {
    const repositoryIndex = this.contacts.findIndex(
      (repository) => repository.id === id
    );

    this.contacts.splice(repositoryIndex, 1);
  }

  list(): Contact[] {
    return this.contacts;
  }

  update({
    name,
    lastName,
    phoneNumber,
    id,
  }: ICreateContactDTO): Contact | null {
    const updateUser = Object.assign({
      name,
      lastName,
      phoneNumber,
    });

    const repositoryIndex = this.contacts.findIndex(
      (repository) => repository.id === id
    );

    if (repositoryIndex !== -1) {
      this.contacts[repositoryIndex] = {
        ...this.contacts[repositoryIndex],
        ...updateUser,
      };

      return this.contacts[repositoryIndex];
    }

    return null;
  }
}

export { ContactRepository };
