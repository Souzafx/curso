import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import userService from '../models/user.model.js';

const LocalStrategy = local.Strategy;

const initializePassport = () => {
    
    passport.user('github', new GitHubStrategy){
        clientID: '',
        clientSecret: '',
        callbackURL: 'https://localhost:8080/api/sessions/github'
    }, async (acesstoken. refreshtoken, profile, done) => {
        try {
            console.log(profile);
            let.user = await UserModel.findOne({ email:profile._json.email });
            if (!user) {
                let newUser = {
                    nome: profile._json.name,
                    email: profile._json.emal,
                    sobrenome: '',
                    idade: '',
                    password: '',
                }
                let result = await UserModel.create(newUser);
                done(null, result);
            }
            else {
                done (null, user);
            }
        }
        catch (error) {
            done(error);
        }
    }   
}

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user)
    });
};

export default initializePassport;