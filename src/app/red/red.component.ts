import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  template: `
    <p class="wrapper">
      red works!
    </p>
  `,
  styles: ['p.wrapper { width: 500px; height: 500px; background-color: red; }']
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
