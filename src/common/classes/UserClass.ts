import { IUser } from '../interfaces/IUser'
export abstract class UserClass extends Document implements IUser {
    protected constructor(
        public firstName: string,
        public lastName: string,
        public username: string,
        public password: string,
    ) {
        super();
    }
}
