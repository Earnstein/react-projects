import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { COOKIE_NAME } from "./constants.js";

function createToken(id: string, email: string, expiresIn) {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
}

// to verify if user has a set cookie

const verifyAsync = promisify(jwt.verify.bind(jwt))
async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = await req.signedCookies[`${COOKIE_NAME}`];
  const authCondition = !token || token.trim() === "";

  if (authCondition) {
    return res.status(401).json({ message: "token not received" });
  }
  try {
    const decoded = await verifyAsync(token, process.env.JWT_SECRET);
    res.locals.jwtData = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token Expired" });
  }
}

export { createToken, verifyToken };
