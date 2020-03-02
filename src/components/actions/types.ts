import { EMAIL_ACTION, PASS_ACTION, CONFIRM_ACTION } from '../constants';

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
