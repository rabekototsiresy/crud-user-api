import { Request,Response } from 'express';
import { IResponse } from '../../../common/interfaces/IResponse';
export const updateUserById = async (req: Request,res: Response)=>{
    try {
        console.log(req.body,'body')
        // const { title,duration,lyrics,id_fiv,type_lyrics,audio}  = req.body.value;
        // const { title,duration,lyrics,id_fiv,type_lyrics } = JSON.parse(req.body.data[0]);
        // const music:any = await MusicModel.create({
        //     title,
        //     duration,
        //     lyrics,
        //     id_fiv,
        //     type_lyrics,
        //     audio: req.file.filename
        // });
        return res.status(201).json({
            message: 'user created successfully',
            code: 201,
            success: true,
            data: ""
        } as IResponse)
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse)
    }
}
