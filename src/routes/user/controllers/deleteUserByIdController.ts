import { Request,Response } from 'express';
import { IResponse } from '../../../common/interfaces/IResponse';
export const deleteUserById = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        if(id){
            //const music: any = await MusicModel.findByPk(id);
            let user
            if(user){

            
                // deleteMusicFile(music.audio)
                // music.destroy();
                return res.status(200).json({
                    message: `user removed successfully : ${id}`,
                    code: 200,
                    success: true
                } as IResponse)
            }else{
                return res.status(404).json({
                    message: `user not found: ${id}`,
                    code: 404,
                    success: false
                } as IResponse);
            }
            
        }else{
            return res.status(404).json({
                message: `id not defined`,
                code: 404,
                success: false
            } as IResponse);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse);
    }
}