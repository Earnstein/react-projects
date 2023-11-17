import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

function createToken(id: string, email: string, expiresIn) {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
}

// to verify if user has a set cookie
async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = await req.signedCookies[`${COOKIE_NAME}`];
  const authCondition = !token || token.trim() === "";

  if (authCondition) {
    return res.status(401).json({ message: "token not received" });
  }

  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, success) => {
      if (error) {
        reject(error.message);
        return res.status(401).json({ message: "Token Expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
}

export { createToken, verifyToken };
