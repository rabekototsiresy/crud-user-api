import bcrypt from 'bcrypt';
export const cryptPassword = (password: string): string =>{
    const salt = bcrypt.genSaltSync(10);
    return  bcrypt.hashSync(password, salt);
}