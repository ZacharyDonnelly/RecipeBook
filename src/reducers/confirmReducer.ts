import { CONFIRM_ACTION } from '../constants';

const INITIAL_STATE = {
  confirm: '',
};

export default (state = INITIAL_STATE, action: { type: string; confirm: string }) => {
  switch (action.type) {
    case CONFIRM_ACTION:
      return {
        ...state,
        confirm: action.confirm,
      };
    default:
      return state;
  }
};
