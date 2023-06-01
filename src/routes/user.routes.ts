import { Router } from 'express';
import { userController } from '../controllers';

const userRouter = Router();

userRouter.route('/').get(userController.index).post(userController.create);

userRouter.route('/:id').get(userController.show);

export default userRouter;
