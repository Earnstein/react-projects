import type { Context } from "hono";
import { nanoid } from "nanoid";
import { jobs } from "../constants/job";

async function httpCreateJob(c: Context) {
  const body = await c.req.json();

  if (!body.company || !body.position) {
    return c.json({ message: "Missing property" }, 401);
  }
  const job = {
    id: nanoid(),
    ...body,
  };
  jobs.push(job);
  return c.json(
    {
      message: "created",
      job: body,
    },
    201
  );
}

async function httpGetAllJob(c:Context) {
    return c.json({ jobs })
}
async function httpGetJob(c:Context) {
     const id = c.req.param("id");
    if (!id) {
        return c.json({message: "no id"}, 401)
    }
    const job = jobs.find(f => f.id === id)
    if (!job){
        return c.json({message: "Job does not exist"}, 401)
    }
    return c.json({message: 'success', data: job})
}

export {
    httpCreateJob,
    httpGetAllJob,
    httpGetJob
}