import { Request,Response } from 'express';
export const getUser = async (req: Request,res: Response)=>{
    return res.send('hello world get user')
}
