import * as create  from './Create';
import * as getAll  from './GetAll';
import * as getbyid  from './GetById';
import * as updatebyid  from './UpdateById';
import * as deletebyid from './DeleteById';

export const ClientsController = {
    ...create,
    ...getAll,
    ...getbyid,
    ...updatebyid,
    ...deletebyid,
};