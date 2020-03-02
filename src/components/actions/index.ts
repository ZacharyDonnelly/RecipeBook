import { EmailAction, PassAction, ConfirmAction } from './types';
import { PASS_ACTION, EMAIL_ACTION, CONFIRM_ACTION } from '../constants';

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
