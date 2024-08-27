import { Component, OnInit } from '@angular/core';
import { CommonServService } from '../common-serv.service';
import { Item } from '../Models/items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {
    childData!: string;

    items: Item[] = [];
    newItem: Item = { id: 0, name: '' };
    editItem: Item | null = null;

   constructor(private itemService:CommonServService) {
   }

   ngOnInit(): void {
    this.loadItems();
  }

  edit(item: Item): void {
    this.editItem = { ...item };
  }

   loadItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id).subscribe(items => this.items = items);
  }
}
