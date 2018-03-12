import { Component } from '@angular/core';
import { RouterLink } from '@angular/router/router';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1> Angular CI Example! {{title}}</h1>
    <nav>
      <a routerLink="/red">RED</a>
      <a routerLink="/blue">BLUE</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
