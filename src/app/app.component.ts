import { Component } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component'
import { DataService } from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent {
  title = 'app';
}
