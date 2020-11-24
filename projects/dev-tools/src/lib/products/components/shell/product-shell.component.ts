import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-product-shell',
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log(4);
  }
}
