import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notifications } from './shared/notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notificationsChanged = new Subject<Notifications[]>();
  startedEditing = new Subject<number>();

  private notifications: Notifications[] = [
    new Notifications('Test initial title #1', 1),
    new Notifications('Test initial title #2', 2),
  ];

    getNotifications() {
      return this.notifications.slice();
    }

    getNotification(index: number) {
      return this.notifications[index];
    }

    addIngredient(notification: Notifications) {
      this.notifications.push(notification);
      this.notificationsChanged.next(this.notifications.slice());
    }

    addIngredients(notifications: Notifications[]) {
      this.notifications.push(...notifications);
      this.notificationsChanged.next(this.notifications.slice());
    }

    updateIngredient(index: number, newNotification: Notifications) {
      this.notifications[index] = newNotification;
      this.notificationsChanged.next(this.notifications.slice());
    }

    deleteIngredient(index: number) {
      this.notifications.splice(index, 1);
      this.notificationsChanged.next(this.notifications.slice());
    }

  }
