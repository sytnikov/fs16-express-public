import { usersController } from '../controllers/users';
import { validate } from '../middlewares/validate';
import { userSchema } from '../schemas/userSchema';

const usersRouter = express.Router();

import { getSingleUser } from "../controllers/users/getSingleUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { createUser } from "../controllers/users/createUser";
import { updateUser } from "../controllers/users/updateUser";
import { getAllUsers } from "../controllers/users/getAllUsers";

usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:userId', usersController.getSingleUser);
usersRouter.post('/', validate(userSchema), usersController.createUser);
usersRouter.put('/:userId', usersController.updateUser);
usersRouter.delete('/:userId', usersController.deleteUser);

export default usersRouter;