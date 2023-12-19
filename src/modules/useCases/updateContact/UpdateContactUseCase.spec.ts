import { AppError } from "../../../errors/AppError";
import { ContactRepositoryInMemory } from "../../repositories/in-memory/ContactRepositoryInMemory";
import { CreateContactUseCase } from "../createContact/CreateContactUseCase";
import { UpdateContactUseCase } from "./UpdateContactUseCase";

describe("Update Contact", () => {
  const contactRepositoryInMemory = new ContactRepositoryInMemory();
  const updateContactUseCase = new UpdateContactUseCase(
    contactRepositoryInMemory
  );
  const createContactUseCase = new CreateContactUseCase(
    contactRepositoryInMemory
  );
  it("should update a contact", async () => {
    const contact = {
      name: "Lucas 22222",
      lastName: "Oliveiraaaa",
      phoneNumber: "999999111222",
    };
    createContactUseCase.execute(contact);
    const contactCreate = contactRepositoryInMemory.findByPhoneNumber(
      contact.phoneNumber
    );

    updateContactUseCase.execute({
      id: contactCreate?.id || "",
      name: "NameUpdate",
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
    });

    expect(contactCreate).toHaveProperty("id");
  });

  it("should not update a contact with id no exists", async () => {
    expect(async () => {
      const contact = {
        id: "30190a80-cd2b-4784-8085-2077576ca3f556",
        name: "Lucas 22222",
        lastName: "Oliveiraaaa",
        phoneNumber: "999999111222",
      };
      updateContactUseCase.execute({
        id: contact.id,
        name: contact.name,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
