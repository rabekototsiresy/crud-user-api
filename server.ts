import express,{ Request,Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './src/routes/router';
import path from 'path';
import { dbConnection } from './src/common/services/db';

const app = express();
dotenv.config();
const port = process.env.PORT || 9090;



/**
 * database connection
 */

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: '*'}))

/**
 * database connection
 */
dbConnection();


/**
 * match all routes
 */
app.use('/api/v1',router)


/**
 * starting server
 */
app.listen(port,()=>{
    console.log('server running '+port)
})


/**
 * for query not match return 404 not found
 */
app.all('/**',(req: Request, res: Response)=>{
    return res.status(404).send('page not found')
})