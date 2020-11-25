import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-notifications',
  template: `
    <p>
      notifications works!
    </p>
  `,
  styles: [
  ]
})
export class NotificationsComponent implements OnInit {

  constructor(private store: Store<{ notificationsListReducer: {notifications: Notification[] }}>)
  {
    console.log('store :>> ', store);
   }

  ngOnInit(): void {
    console.log(1);
  }

}
