import passport from "passport";
export const passportCall = (strategy) =>{
    return async(req, res, next) =>{
        passport.authenticate(strategy,function(error, user, info) {
            if (error) return next (error);
            if (!user) {
                return res.status(401).send({error:info.messages?info.messages:info.toStreing()});
            }
            req.user = user;
            next();
        })(req, res, next);
    }
}

app.get('/current',passportCall('jwt'),(req,res)=>{
    res.send(req,user);
}) 