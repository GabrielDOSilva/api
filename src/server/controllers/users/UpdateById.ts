import { Request, RequestHandler, Response } from 'express';

import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { IUsers } from '../../database/models/Users';
import { UsersProvider } from '../../database/providers/users';



interface IParamsProps {
    id?: number;

}

interface IBodyProps extends Omit<IUsers, 'id'> { }

export const updateByIdValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
      name: yup.string().required(),
      sobrenome: yup.string().required(),
      email: yup.string().required().email(),
      senha: yup.string().required().min(11),
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))

}))




export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });
  }

  const result = await UsersProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};
