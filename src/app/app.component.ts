import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition],
  host: {'[@routerTransition]':''}
})
export class AppComponent {

}
