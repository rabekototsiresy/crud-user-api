import { cryptPassword } from '../../../common/helpers/cryptoPassword';
import { IUser } from '../../../common/interfaces/IUser';
import { UserModel } from '../../../common/models/UserModel';
import { Request,Response } from 'express';
import { IResponse } from '../../../common/interfaces/IResponse';
export const createUser = async (req: Request,res: Response)=>{
    try {
        const { firstName, lastName, username, password}  = req.body;
        const user = new UserModel({
            firstName,
            lastName,
            username,
            password: cryptPassword(password) // crypt password
        });
        const userCreatd = await user.save();
        return res.status(201).json({
            message: 'user created successfully',
            code: 201,
            success: true,
            data: userCreatd
        } as IResponse)
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse)
    }
}
