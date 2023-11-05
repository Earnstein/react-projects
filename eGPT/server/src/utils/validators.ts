import { Request, Response, NextFunction } from "express";
import {body, ValidationChain, validationResult } from "express-validator";

const validate = (validations: ValidationChain[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        for (const validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()){
                break;
            }
        }
        const errors = validationResult(req); // validationResults provides the result of all the validations done on the request body
        if (errors.isEmpty()){
            return next();
        }
        res.status(422).json({message: "invalid user details", errors: errors.array()}); // 422  status code implies request could not be processed further.
    };
};

const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
    .trim()
    .isLength({min: 6})
    .withMessage("Password should contain at least 6 characters.")
]


export {
    validate,
    signupValidator
}