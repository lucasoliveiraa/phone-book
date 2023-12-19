import { AppError } from "../../../errors/AppError";
import { ContactRepositoryInMemory } from "../../repositories/in-memory/ContactRepositoryInMemory";
import { CreateContactUseCase } from "./CreateContactUseCase";

describe("Create Contact", () => {
  const contactRepositoryInMemory = new ContactRepositoryInMemory();
  const createContactUseCase = new CreateContactUseCase(
    contactRepositoryInMemory
  );
  it("should be able to create a new contact", async () => {
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

    expect(contactCreate).toHaveProperty("id");
  });

  it("should not be able to create a new contact with phone number exists", async () => {
    expect(async () => {
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

      createContactUseCase.execute({
        name: contact.name,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
