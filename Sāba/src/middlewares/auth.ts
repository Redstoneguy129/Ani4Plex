import {Request, Response, NextFunction} from "express";

export default function Auth(req: Request, res: Response, next: NextFunction) {
    console.log("passed auth");
    next();
}