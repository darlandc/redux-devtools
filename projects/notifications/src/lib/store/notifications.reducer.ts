import * as NotificationActions from './notifications.actions';
import { Notifications } from '../shared/notifications.model';

const initialState = {
  ingredients: [new Notifications('Apples', 5), new Notifications('Tomatoes', 10)]
};

export function notificationsListReducer(
  state = initialState,
  action: NotificationActions.InsertNotification
) {
  switch (action.type) {
    case NotificationActions.ADD_NOTIFICATION:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
