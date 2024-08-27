import { Component } from '@angular/core';
import { ListProductsComponent } from "../list-products/list-products.component";
import { FormsModule } from '@angular/forms';
import { CommonServService } from '../common-serv.service';
import { Item } from '../Models/items';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ListProductsComponent, FormsModule, CommonModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  items: Item[] = [];
  newItem: Item = { id: 0, name: '' };
  editItem: Item | null = null;

  constructor(private itemService: CommonServService) {
    this.loadItems();  // Load items initially
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem(): void {
    if (this.newItem.name.trim()) {
      this.newItem.id = this.items.length + 1;
      this.itemService.addItem(this.newItem).subscribe(items => {
        this.items = items;
        this.newItem = { id: 0, name: '' };  // Reset the new item form
        this.loadItems();  // Refresh the list after adding
      });
    }
  }

  updateItem(): void {
    if (this.editItem) {
      this.itemService.updateItem(this.editItem).subscribe(() => {
        this.loadItems();  // Refresh the list after updating
        this.editItem = null;  // Clear the edit form
      });
    }
  }
}
