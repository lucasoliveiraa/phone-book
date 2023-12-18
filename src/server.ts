import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { contactRoutes } from "./routes/contact.routes";
import { AppError } from "./errors/AppError";
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(contactRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running! 🚀"));
