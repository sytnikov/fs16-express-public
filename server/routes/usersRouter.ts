import { usersController } from '../controllers/users';
import { validate } from '../middlewares/validate';
import { userSchema } from '../schemas/userSchema';

const usersRouter = require('express').Router();

usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:userId', usersController.getSingleUser);
usersRouter.post('/', validate(userSchema), usersController.createUser);
usersRouter.put('/:userId', usersController.updateUser);
usersRouter.delete('/:userId', usersController.deleteUser);

export default usersRouter;