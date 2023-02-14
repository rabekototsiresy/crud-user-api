import { FivondronanaModel } from '../../common/models/Fivondronana';
import * as dotenv from 'dotenv';
import passport from 'passport'
import { IResponseSeq } from 'common/interfaces/IResponseSeq';
import { IFiv } from 'common/interfaces/IFiv';
dotenv.config();
export const passportService = (passport)=>{

    const PRIVATE_KEY = process.env.PRIVATE_KEY_JWT;
    const ISS_JWT = process.env.ISS_JWT;
    const JwtStrategy = require('passport-jwt').Strategy;
    const ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts:any = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = PRIVATE_KEY;
    opts.issuer = ISS_JWT;
return passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        const fivResult:any = await FivondronanaModel.findByPk(jwt_payload.sub.id_fiv);
        const { dataValues } = fivResult as IResponseSeq;
        const fiv: IFiv = dataValues
        return done(null, fiv);
    } catch (error) {
        console.log(error);
        return done(null, false);

    }
}));
}