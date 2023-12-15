import { Router } from "express";
import { createContactController } from "../modules/useCases/createContact";
import { listContactController } from "../modules/useCases/listContact";
import { deleteContactController } from "../modules/useCases/deleteContact";

const contactRoutes = Router();

contactRoutes.post("/", (request, response) => {
  return createContactController.handle(request, response);
});

contactRoutes.get("/", (request, response) => {
  return listContactController.handle(request, response);
});

contactRoutes.delete("/:id", (request, response) => {
  return deleteContactController.handle(request, response);
});

export { contactRoutes };
