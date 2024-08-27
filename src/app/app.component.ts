import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductsComponent } from "./add-products/add-products.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { CommonServService } from './common-serv.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddProductsComponent, ListProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BasicCRUD';

  message!: string;

  constructor(private myService: CommonServService) {}

  ngOnInit() {
  }

}
