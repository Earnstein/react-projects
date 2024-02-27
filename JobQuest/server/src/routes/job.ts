import { Hono } from "hono";
import { httpCreateJob, httpGetAllJob, httpGetJob } from "../controllers/job";


const jobRouter = new Hono();

jobRouter.post("/create-job", httpCreateJob)

jobRouter.get("/all-jobs", httpGetAllJob);

jobRouter.get("/get-job/:id", httpGetJob)


export default jobRouter;