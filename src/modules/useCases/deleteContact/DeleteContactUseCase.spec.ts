import { AppError } from "../../../errors/AppError";
import { ContactRepositoryInMemory } from "../../repositories/in-memory/ContactRepositoryInMemory";
import { CreateContactUseCase } from "../createContact/CreateContactUseCase";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

describe("Delete Contact", () => {
  const contactRepositoryInMemory = new ContactRepositoryInMemory();
  const deleteContactUseCase = new DeleteContactUseCase(
    contactRepositoryInMemory
  );
  const createContactUseCase = new CreateContactUseCase(
    contactRepositoryInMemory
  );

  it("should delete a contact", async () => {
    const contact = {
      name: "Name Example",
      lastName: "LastName Example",
      phoneNumber: "11999887766",
    };
    createContactUseCase.execute({
      name: contact.name,
      lastName: contact.lastName,
      phoneNumber: contact.phoneNumber,
    });

    const contactCreate = contactRepositoryInMemory.findByPhoneNumber(
      contact.phoneNumber
    );

    deleteContactUseCase.execute(contactCreate?.id || "");

    expect(deleteContactUseCase).toBeCalled;
  });

  it("should return erro where delete a contact", async () => {
    expect(async () => {
      const contact = {
        id: "30190a80-cd2b-4784-8085-2077576ca3f55",
        name: "Lucas 22222",
        lastName: "Oliveiraaaa",
        phoneNumber: "999999111222",
        created_at: "2023-12-18T11:20:40.611Z",
      };
      deleteContactUseCase.execute(contact?.id || "");
    }).rejects.toBeInstanceOf(AppError);
  });
});
