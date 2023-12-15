import { v4 as uuidV4 } from "uuid";

class Contact {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Contact };
