import { Schema,ValidationResult } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { IResponse } from '../interfaces/IResponse';

/**
 * 
 * @param schema 
 * @returns objectt: invalidate form
 */
export const validateFormMid = (schema: Schema)=>{
    return (req: Request, res: Response,next: NextFunction)=>{
        const result: ValidationResult = schema.validate(req.body);
        if(!(result.error)){
            req.body.value = result.value;
            return next();
        }
        const { details }  = result.error;
        const message= details.map((i:any)=>i.message).join('');
        return res.status(200).json({status: 403,message: message,success: false} as unknown as IResponse);
    }
}