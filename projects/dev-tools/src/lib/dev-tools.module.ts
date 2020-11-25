import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DevToolsComponent } from './dev-tools.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DevtoolsDispatcher } from '@ngrx/store-devtools/src/devtools-dispatcher';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  declarations: [DevToolsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // environment.production ?
    //   [] : HttpClientInMemoryWebApiModule.forRoot(productData),
    // StoreModule.forRoot({}),
    // StoreDevtoolsModule.instrument({
    //   logOnly: environment.notifications,
    //   name: 'Notifications with Redux',
    //   maxAge: 25
    // }),
    // HttpClientInMemoryWebApiModule.forRoot(productData),
    RouterModule.forRoot(routes,  { useHash: true, enableTracing: true }),
    StoreModule.forRoot({}, {})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DevToolsComponent]
})
export class DevToolsModule { }

