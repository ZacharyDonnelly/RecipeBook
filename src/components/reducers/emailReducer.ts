import { EMAIL_ACTION } from '../constants';

const INITIAL_STATE = {
  email: '',
};

export default (state = INITIAL_STATE, action: { type: string; email: string }) => {
  switch (action.type) {
    case EMAIL_ACTION:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};
