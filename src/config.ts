import * as dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

assert(process.env.PORT, "PORT is required");
assert(process.env.DB_NAME, "DB_NAME is required");
assert(process.env.DB_USER, "DB_USER is required");
assert(process.env.DB_PASS, "DB_PASS is required");

export const config = {
    port: process.env.PORT,
    dbname: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,

};
