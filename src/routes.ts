import { Router, Request, Response } from 'express';

import data from './data.json';

const routes = Router();

routes.get('/planets', async (request: Request, response: Response): Promise<Response> => {
    return response.json(data);
  },
);

routes.get('/planet/:id', async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    const planetIndex = data.planets.findIndex( planet => planet.id === id );
    const planet = data.planets[planetIndex];

    return response.json(planet);
  },
);

routes.get('/find/:name', async (request: Request, response: Response): Promise<Response> => {
    const { name } = request.params;
    // Converte em lowcase e remove os possíveis acentos da string
    const nameFormatted = name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const planets = data.planets.filter( planet => {
      const match = planet.searchTags.some( tag => tag.includes(nameFormatted) );
      if (match) return planet;
    });

    return response.json(planets);
  },
);

export default routes;
