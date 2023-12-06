import { Request, RequestHandler, Response } from 'express';

import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IUsers } from '../../database/models';
import { UsersProvider } from '../../database/providers/users';



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
    const result = await UsersProvider.create(req.body);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};
