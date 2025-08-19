import { STATUS_CODES } from "@/shared/constants";
import { ContractInstance } from "@/shared/types";
import {
  BadRequestError,
  ForbiddenError,
  JWTError,
  NotFoundError,
  RequestValidationError,
  ResponseValidationError,
  ServerError,
} from "@/shared/utils";

import {} from "../validation";
import { loadFilesBodySchema, loadFilesResponseSchema } from "../validation/git";

export const gitContract = (c: ContractInstance) =>
  c.router(
    {
      loadFiles: {
        body: loadFilesBodySchema,
        method: "POST",
        path: "/create",
        responses: {
          [STATUS_CODES.BAD_REQUEST]: BadRequestError.zodSchema
            .or(ResponseValidationError.zodSchema)
            .or(RequestValidationError.zodSchema),
          [STATUS_CODES.FORBIDDEN]: ForbiddenError.zodSchema.or(JWTError.zodSchema),
          [STATUS_CODES.NOT_FOUND]: NotFoundError.zodSchema,
          [STATUS_CODES.SERVER_ERROR]: ServerError.zodSchema,
          [STATUS_CODES.SUCCESS]: loadFilesResponseSchema,
        },
      },
    },
    { pathPrefix: "/git" },
  );
