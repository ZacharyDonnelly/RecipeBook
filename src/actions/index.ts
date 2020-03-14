import {
  EmailAction,
  PassAction,
  ConfirmAction,
  TitleAction,
  TimeAction,
  IngredientAction,
} from './types';
import {
  PASS_ACTION,
  EMAIL_ACTION,
  CONFIRM_ACTION,
  TITLE_ACTION,
  TIME_ACTION,
  INGREDIENT_ACTION,
} from '../constants';

export const emailAction = (email = ''): EmailAction => ({
  type: EMAIL_ACTION,
  email,
});
export const passAction = (pass = ''): PassAction => ({
  type: PASS_ACTION,
  pass,
});
export const confirmAction = (confirm = ''): ConfirmAction => ({
  type: CONFIRM_ACTION,
  confirm,
});
export const titleAction = (title = ''): TitleAction => ({
  type: TITLE_ACTION,
  title,
});
export const timeAction = (time = ''): TimeAction => ({
  type: TIME_ACTION,
  time,
});
export const ingredientAction = (ingredients = ''): IngredientAction => ({
  type: INGREDIENT_ACTION,
  ingredients,
});