import { Hono } from "hono";
import { httpCreateJob, httpDeleteAllJob, httpDeleteJob, httpEditAJob, httpEditJob, httpGetAllJob, httpGetJob } from "../controllers/job";


const jobRouter = new Hono();

jobRouter.route("/").post(httpCreateJob).get(httpGetAllJob).delete(httpDeleteAllJob)
jobRouter.route("/:id").get(httpGetJob).patch(httpEditJob).put(httpEditAJob).delete(httpDeleteJob)


export default jobRouter;