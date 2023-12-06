import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ClientsProvider } from '../../database/providers/clients';
import { validation } from '../../shared/middleware';

interface IQueryProps {
  id?: number | null;
  page?: number | null;
  limit?: number | null;
  filter?: string | null;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().nullable().moreThan(0),
      limit: yup.number().nullable().moreThan(0),
      filter: yup.string().nullable(),
      id: yup.number().nullable().default(0),
    })
  ),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  const { page = 1, limit = 7, filter = '', id } = req.query;

  const result = await ClientsProvider.getAll(page || 1, limit || 7, filter || '', Number(id));
  const count = await ClientsProvider.count(filter !== null ? filter : undefined);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: count.message }
    });
  }

  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', count);

  return res.status(StatusCodes.OK).json(result);
};
