import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ProductShellComponent } from './components/shell/product-shell.component';
import { ProductListComponent } from './components/list/product-list.component';

const productRoutes: Routes = [
  { path: '/', component: ProductShellComponent },
  { path: 'list', component: ProductListComponent }
];

@NgModule({
  declarations: [ProductListComponent, ProductShellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forChild(productRoutes),
    // StoreModule.forFeature('products', {
    //   productList: listReducer,
    //   productaData: dataReducer
    // }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:  [ProductListComponent, ProductShellComponent]
})
export class ProductsModule { }

