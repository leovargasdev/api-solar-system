import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', async (request: Request, response: Response): Promise<Response> => {
    return response.json({ok: true});
  },
);

export default routes;
