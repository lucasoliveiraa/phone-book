import { Contact } from "../../model/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";

class ListContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  execute(): Contact[] | undefined {
    const all = this.contactRepository.list();
    return all;
  }
}

export { ListContactUseCase };
