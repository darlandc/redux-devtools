import * as NotificationActions from './notifications.actions';
import { Notifications } from '../shared/notifications.model';

const initialState = {
  notifications: [new Notifications('Testing title #1', 5), new Notifications('Testing title #2', 10)]
};

export function notificationsListReducer(
  state = initialState,
  action: NotificationActions.InsertNotification
) {
  switch (action.type) {
    case NotificationActions.ADD_NOTIFICATION:
      return {
        ...state,
        ingredients: [...state.notifications, action.payload]
      };
    default:
      return state;
  }
}
