import { Router } from 'express';

import { UsersController, OsController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});


router.get('/users', UsersController.getAllValidation, UsersController.getAll);
router.post('/users', UsersController.createValidation, UsersController.create);
router.get('/users/:id', UsersController.getByIdValidation, UsersController.getById);
router.put('/users/:id', UsersController.updateByIdValidation, UsersController.updateById);
router.delete('/users/:id', UsersController.deleteByIdValidation, UsersController.deleteById);
router.get('/os', OsController.getAllValidation, OsController.getAll);
router.post('/os', OsController.createValidation, OsController.create);
router.get('/os/:id', OsController.getByIdValidation, OsController.getById);
router.put('/os/:id', OsController.updateByIdValidation, OsController.updateById);
router.delete('/os/:id', OsController.deleteByIdValidation, OsController.deleteById);


export { router };
