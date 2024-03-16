import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { JobSchema, patchSchema } from "../middleware";
import {
  httpCreateJob,
  httpDeleteAllJob,
  httpDeleteJob,
  httpEditAJob,
  httpEditJob,
  httpGetAllJob,
  httpGetJob,
} from "../controllers/job";
import { StatusCodes } from "http-status-codes";
import { validateUser } from "../middleware/auth";

const jobRouter = new Hono();

jobRouter
  .route("/")
  .post(
    zValidator("json", JobSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    httpCreateJob
  )
  .get(httpGetAllJob)
  .delete(httpDeleteAllJob);

jobRouter
  .route("/:id")
  .get(validateUser, httpGetJob)
  .patch(
    zValidator("json", patchSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    validateUser,
    httpEditJob
  )
  .put(
    zValidator("json", JobSchema, (result, c) => {
      if (!result.success) {
        return c.json({ error: result.error.issues }, StatusCodes.BAD_REQUEST);
      }
    }),
    validateUser,
    httpEditAJob
  )
  .delete(validateUser, validateUser, httpDeleteJob);

export default jobRouter;
