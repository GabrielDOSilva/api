import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UsersController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
    return res.send('Olá, Dev!');

});

router.post('/users', UsersController.create);


export { router };
