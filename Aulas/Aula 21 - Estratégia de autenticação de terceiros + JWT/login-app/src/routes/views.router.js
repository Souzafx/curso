import { Router, request, response} from "express"

const router = Router();


router.get('/', async(req,res)=>{
    response.render('home');
})

router.get('/login',async(req,res)=>{
    res.render('/login');
})

export default router;