import { Request,Response } from 'express';
export const createUser = async (req: Request,res: Response)=>{
    return res.send('hello world create uer')
}
