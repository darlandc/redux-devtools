
import { Action } from '@ngrx/store';
import { Notifications } from '../shared/notifications.model';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export class InsertNotification implements Action {
  readonly type = ADD_NOTIFICATION;
  payload: Notifications;
}
