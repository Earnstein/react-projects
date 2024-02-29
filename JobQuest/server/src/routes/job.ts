import { Hono } from "hono";
import { httpCreateJob, httpDeleteAllJob, httpDeleteJob, httpEditAJob, httpEditJob, httpGetAllJob, httpGetJob } from "../controllers/job";
import { zValidator } from "@hono/zod-validator";
import { schema } from "../middleware";


const jobRouter = new Hono();

jobRouter.route("/").post(zValidator('json', schema), httpCreateJob).get(httpGetAllJob).delete(httpDeleteAllJob)
jobRouter.route("/:id").get(httpGetJob).patch(httpEditJob).put(httpEditAJob).delete(httpDeleteJob)


export default jobRouter;