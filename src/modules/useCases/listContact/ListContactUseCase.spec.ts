import { ContactRepositoryInMemory } from "../../repositories/in-memory/ContactRepositoryInMemory";
import { ListContactUseCase } from "./ListContactUseCase";

describe("List Contact", () => {
  const contactRepositoryInMemory = new ContactRepositoryInMemory();
  const listContactUseCase = new ListContactUseCase(contactRepositoryInMemory);

  it("should return all contacts", async () => {
    const contacts = listContactUseCase.execute();

    expect(contacts).toEqual([]);
  });
});
