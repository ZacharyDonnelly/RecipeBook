import {
  EMAIL_ACTION,
  PASS_ACTION,
  CONFIRM_ACTION,
  TITLE_ACTION,
  TIME_ACTION,
  CATEGORY_ACTION,
  INGREDIENT_ACTION,
} from '../constants';

export interface EmailAction {
  type: typeof EMAIL_ACTION;
  email: string;
}
export interface PassAction {
  type: typeof PASS_ACTION;
  pass: string;
}
export interface ConfirmAction {
  type: typeof CONFIRM_ACTION;
  confirm: string;
}
export interface TitleAction {
  type: typeof TITLE_ACTION;
  title: string;
}
export interface TimeAction {
  type: typeof TIME_ACTION;
  time: string;
}
export interface IngredientAction {
  type: typeof INGREDIENT_ACTION;
  ingredients: string;
}
export interface CategoryAction {
  type: typeof CATEGORY_ACTION;
  category: string;
}
