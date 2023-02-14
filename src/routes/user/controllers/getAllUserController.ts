import { IResponse } from 'common/interfaces/IResponse';
import { Request,Response } from 'express';
export const getAllUser = async(req: Request, res: Response)=>{
    try {
        // const musics:any = await MusicModel.findAll({
        //     include: [
        //         {
        //             model: FivondronanaModel,
        //             //as: 'fivList'
        //             attributes: ['name','rang']
        //         }
        //     ]
        // });

        return res.status(201).json({
            message: 'lisitry hira rehetra',
            code: 201,
            success: true,
            data: "musics list"
        })
    } catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        } as IResponse);
    }
}