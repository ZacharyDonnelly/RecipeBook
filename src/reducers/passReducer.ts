import { PASS_ACTION } from '../constants';

const INITIAL_STATE = {
  pass: '',
};

export default (state = INITIAL_STATE, action: { type: string; pass: string }) => {
  switch (action.type) {
    case PASS_ACTION:
      return {
        ...state,
        pass: action.pass,
      };
    default:
      return state;
  }
};
