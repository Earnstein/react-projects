import { Hono } from "hono";
import { httpCreateJob, httpDeleteAllJob, httpDeleteJob, httpEditAJob, httpEditJob, httpGetAllJob, httpGetJob } from "../controllers/job";
import { zValidator } from "@hono/zod-validator";
import { JobSchema, patchSchema } from "../middleware";


const jobRouter = new Hono();

jobRouter.route("/").post(zValidator("json", JobSchema), httpCreateJob).get(httpGetAllJob).delete(httpDeleteAllJob)
jobRouter.route("/:id").get(httpGetJob).patch(zValidator("json", patchSchema), httpEditJob).put(zValidator("json", JobSchema), httpEditAJob).delete(httpDeleteJob)

export default jobRouter;