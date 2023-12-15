import { Request, Response } from "express";
import { UpdateContactUseCase } from "./UpdateContactUseCase";

class UpdateContactController {
  constructor(private updateContactUseCase: UpdateContactUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, lastName, phoneNumber } = request.body;
    const { id } = request.params;

    this.updateContactUseCase.execute({ name, lastName, phoneNumber, id });

    return response.status(201).send();
  }
}

export { UpdateContactController };
