import { Router } from 'express';
//import { StatusCodes } from 'http-status-codes';
import { UsersController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
    return res.send('Olá, Dev!');
});

router.post('/users',
    UsersController.createValidation,
    UsersController.create);
router.get('/users',
    UsersController.getAllValidation,
    UsersController.getAll);
router.get('/users/:id',
    UsersController.getByIdAllValidation,
    UsersController.getById);
router.put('/users/:id',
    UsersController.updateByIdValidation,
    UsersController.updateById);
router.delete('/users/:id',
    UsersController.deleteByIdAllValidation,
    UsersController.deleteById);


export { router };
