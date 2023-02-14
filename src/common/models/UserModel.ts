import { UserClass } from "../classes/UserClass";
import { model,Model,Schema} from "mongoose";

const SchemaUser: Schema<UserClass> = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }, 
   
});


export const UserModel: Model<UserClass> = model('User', SchemaUser);
