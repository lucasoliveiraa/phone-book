import { Request, Response } from "express";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

class DeleteContactController {
  constructor(private deleteContactUseCase: DeleteContactUseCase) {}
  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteContactUseCase.execute(id);

    return response.status(204).json();
  }
}

export { DeleteContactController };
