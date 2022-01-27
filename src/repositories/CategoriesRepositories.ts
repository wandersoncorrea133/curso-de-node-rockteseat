import { Category } from '../model/category';

// DTO => data tranfer object

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class categoriesRepositories {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { categoriesRepositories };
