import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepositories';
import { ListaCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listaCategoriesController = new ListaCategoriesController(
  listCategoriesUseCase,
);

export { listaCategoriesController };
