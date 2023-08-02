import { passport } from 'passport'; // Importa a biblioteca Passport.js, que é um framework para autenticação em aplicativos Node.js.
import { jwt } from 'passport-jwt' // Importa a estratégia JWT (JSON Web Token) do Passport.js, que é usada para autenticar usuários com base em tokens JWT.
import { UserModel } from '..models/user.models.js';

//Configuração do JWT Strategy:

const JWTStrategy = jwt.Strategy; //  Define a estratégia JWT.
const ExtractJWT = jwt.ExtractJwt; //  Define o extrator JWT, que é usado para obter o token do cabeçalho da solicitação (ou de outros locais).
const initializePassport = () => {

    passport.use('jwt',new //função use do Passport para definir uma nova estratégia de autenticação chamada 'jwt'
        JWTStrategy({ jwtFromRequest:ExtractJWT.fromExtractors([cookieExtractor]),
        secretKey: 'coderSecret', 
    },  async(token, done)=>{
        try{
            return done(null,token);
        }
        catch(cerror) {
            return done(error);
        }
    }));
}    

const cookieExtractor = req => { // função chamada cookieExtractor que recebe o objeto de solicitação req como parâmetro.
    let token = null;
    if (req && req.cookies) { // confirma que existe um cookie para retornar
        token = req.cookies['coderCookieToken']; // pega apenas o cookie necessario
    }
    return token;
}

export default initializePassport; // é uma instrução de exportação em JavaScript que torna a função initializePassport disponível para outros módulos ou arquivos do projeto.