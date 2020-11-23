import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DevToolsComponent } from './dev-tools.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [DevToolsComponent],
  imports: [
    // StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.notifications,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DevToolsComponent]
})
export class DevToolsModule { }

