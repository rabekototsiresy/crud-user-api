import { IResponse } from 'common/interfaces/IResponse';
import { Request,Response } from 'express';
export const getUserById = async(req: any, res: Response)=>{
    try {
        const { id } = req.params;
        if(id){
            //const music: any = await MusicModel.findByPk(id);
            var user
            if(user){
                return res.status(200).json({
                    message: `user id : ${id}`,
                    code: 200,
                    success: true,
                    data:'user'
                } as IResponse)
            }else{
                return res.status(404).json({
                    message: `user not found: ${id}`,
                    code: 404,
                    success: false
                } as IResponse)
            }
            
        }else{
            return res.status(404).json({
                message: `id not defined`,
                code: 404,
                success: false
            } as IResponse)
        }
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse);
    }
}
