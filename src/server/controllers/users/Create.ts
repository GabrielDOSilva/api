import { Request, RequestHandler, Response } from 'express';

import * as yup from 'yup';
import { validation } from '../../sherad/middlewares';
import { StatusCodes } from 'http-status-codes';
import { IUsers } from '../../database/models';



interface IBodyProps extends Omit<IUsers, 'id'> { }

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required(),
        sobrenome: yup.string().required(),
        email: yup.string().required().email(),
        senha: yup.string().required().min(11),
    })),

}));

export const create: RequestHandler = async (req: Request<{}, {}, IUsers>, res: Response) => {
    console.log(req.body);

    return res.status(StatusCodes.CREATED).json(1);
};
