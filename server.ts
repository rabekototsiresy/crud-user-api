import express,{ Request,Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './src/routes/router';
import path from 'path';

const app = express();
dotenv.config();
const port = process.env.PORT;



/**
 * database connection
 */
// db.authenticate().then(()=>console.log('► db connected .....☪☻'))
//                     .catch(e=>console.log(e))
//.sync({alter: true}).then(()=>console.log("databese created ....")).catch((e=>console.log(e)));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: '*'}))

/**
 * match all routes
 */
app.use('/api/v1',router)


/**
 * starting server
 */
app.listen(port,()=>{
    console.log('server running'+port)
})


/**
 * for query not match return 404 not found
 */
app.all('/**',(req: Request, res: Response)=>{
    return res.status(404).send('page not found')
})