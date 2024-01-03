import OpenAI from "openai";

async function configOpenAi() {
  const openai = new OpenAI({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_KEY,
  });

  return openai;
}

export default configOpenAi;
