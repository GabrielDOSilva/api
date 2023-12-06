import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { OsProvider } from '../../database/providers/os';
import { validation } from '../../shared/middleware';
import { IOs } from '../../database/models';


interface IBodyProps extends Omit<IOs, 'id'> { }

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    model: yup.string().required().min(3).max(150),
    problem: yup.string().required().min(50)
  })),
}));

export const create = async (req: Request<{}, {}, IOs>, res: Response) => {
  const result = await OsProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
