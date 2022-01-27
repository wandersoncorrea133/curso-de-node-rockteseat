import { Router } from 'express';
import { categoriesRepositories } from '../repositories/CategoriesRepositories';

const categoriesRoutes = Router();
const categoryRepositories = new categoriesRepositories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoryRepositories.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoryRepositories.list();

  return response.json(all);
});

export { categoriesRoutes };
