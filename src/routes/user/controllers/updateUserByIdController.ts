import { Request,Response } from 'express';
import { IResponse } from '../../../common/interfaces/IResponse';
import { UserModel } from '../../../common/models/UserModel';

export const updateUserById = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        const { firstName, lastName, username } = req.body;
        const user = await UserModel.findById(id);
        if(user) {
            Object.assign(user,req.body);
            await user.save();
            return res.status(201).json({
                message: 'user updated successfully',
                code: 201,
                success: true,
                data: user
            } as IResponse)
        } else {
            return res.status(404).json({
                message: `user not found: ${id}`,
                code: 404,
                success: false
            } as IResponse);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse)
    }
}
