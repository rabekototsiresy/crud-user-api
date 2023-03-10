import { config } from '../../../config';
import mongoose from 'mongoose';

export function dbConnection() {
    const uri = `mongodb+srv://${config.db_user}:${config.db_pass}@cluster0.n8haibj.mongodb.net/${config.dbname}?retryWrites=true&w=majority`;
    mongoose.connect(uri)
        .then(() => {
            console.log('Mongo : Conected ✔️');
        })
        .catch((err) => {
            console.log('Mongo : Not connected ️❌️');
            throw err;
        });
}
