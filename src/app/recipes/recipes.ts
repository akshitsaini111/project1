import { Ingredients } from "../shared/ingredients";

export interface Recipes {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredients[];
}
