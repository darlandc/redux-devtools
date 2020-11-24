import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'lib-dev-tools',
  template: `
    <p>
      dev-tools works!
    </p>
    <button (click)="go()">go</button>
    <button (click)="back()">back</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DevToolsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(2);
  }

  go() {
    this.router.navigate(['products']);
  }
  back() {
    this.router.navigate(['/']);
  }
}
