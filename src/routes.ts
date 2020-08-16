import { Router, Request, Response } from 'express';

import data from './data.json';

const routes = Router();

routes.get('/planets', async (request: Request, response: Response): Promise<Response> => {
    return response.json(data);
  },
);

routes.get('/planet/:id', async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    const planet = data.planets.filter( planet => planet.id === id )[0];

    return response.json(planet);
  },
);

export default routes;
