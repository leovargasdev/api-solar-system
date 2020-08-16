import { Router, Request, Response } from 'express';

import data from './data.json';

const routes = Router();

routes.get('/', async (request: Request, response: Response): Promise<Response> => {
    return response.json({
      "/planets": "Listando todos os planetas",
      "/planet/:id": "Buscando um planeta atráves do seu id",
      "/find/:string": "É feito uma comparação em cada tag de cada item, testando se esta string consta no array de tags, retornando os objetos que obtiveram sucesso."
    });
  },
);

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
