import { Request, RequestHandler, Response } from 'express';

import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IClients } from '../../database/models';
import { ClientsProvider } from '../../database/providers/clients';



interface IBodyProps extends Omit<IClients, 'id'> { }

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required(),
        sobrenome: yup.string().required(),
        email: yup.string().required().email(),
    })),

}));

export const create: RequestHandler = async (req: Request<{}, {}, IClients>, res: Response) => {
    const result = await ClientsProvider.create(req.body);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};
