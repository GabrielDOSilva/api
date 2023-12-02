import { Request, RequestHandler, Response } from 'express';

import * as yup from 'yup';
import { validation } from '../../sherad/middlewares';
import { StatusCodes } from 'http-status-codes';



interface IUsers {
    name: string;
    sobrenome: string;
    email: string;
    cpf: number;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IUsers>(yup.object().shape({
        name: yup.string().required(),
        sobrenome: yup.string().required(),
        email: yup.string().required().email(),
        cpf: yup.number().required().min(11)
    })),

}));

export const create: RequestHandler = async (req: Request<{}, {}, IUsers>, res: Response) => {
    console.log(req.body);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};
