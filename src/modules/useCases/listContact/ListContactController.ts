import { Request, Response } from "express";
import { ListContactUseCase } from "./ListContactUseCase";

class ListContactController {
  constructor(private listContactUseCase: ListContactUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listContactUseCase.execute();

    return response.json(all);
  }
}

export { ListContactController };
