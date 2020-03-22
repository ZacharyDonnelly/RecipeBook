import {
  TITLE_ACTION,
  TIME_ACTION,
  INGREDIENT_ACTION,
  CATEGORY_ACTION,
  DIRECTIONS_ACTION,
} from '../constants';

const INITIAL_STATE = {
  title: '',
  time: '',
  ingredients: '',
  directions: '',
  category: '',
};

export default (
  state = INITIAL_STATE,
  action: {
    type: string;
    title: string;
    time: string;
    ingredients: string;
    category: string;
    directions: string;
  },
) => {
  switch (action.type) {
    case TITLE_ACTION:
      return {
        ...state,
        title: action.title,
      };
    case CATEGORY_ACTION:
      return {
        ...state,
        category: action.category,
      };
    case TIME_ACTION:
      return {
        ...state,
        time: action.time,
      };
    case INGREDIENT_ACTION:
      return {
        ...state,
        ingredients: action.ingredients,
      };
    case DIRECTIONS_ACTION:
      return {
        ...state,
        directions: action.directions,
      };
    default:
      return state;
  }
};
