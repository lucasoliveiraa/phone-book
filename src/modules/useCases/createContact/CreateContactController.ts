import { Request, Response } from "express";
import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateContactController {
  constructor(private createContactService: CreateContactUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, lastName, phoneNumber } = request.body;

    this.createContactService.execute({ name, lastName, phoneNumber });

    return response.status(201).send();
  }
}

export { CreateContactController };
