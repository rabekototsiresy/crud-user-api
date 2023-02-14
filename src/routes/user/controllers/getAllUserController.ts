import { IResponse } from '../../../common/interfaces/IResponse';
import { UserModel } from '../../../common/models/UserModel';
import { Request,Response } from 'express';
export const getAllUser = async(req: Request, res: Response)=>{
    try {
        const users = await UserModel.find();
        return res.status(201).json({
            message: 'list all user',
            code: 201,
            success: true,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse);
    }
}