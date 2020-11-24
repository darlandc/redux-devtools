import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log(4);
  }
}
