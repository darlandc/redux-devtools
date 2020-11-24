import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log(4);
  }
}
