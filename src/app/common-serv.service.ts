import { Injectable } from '@angular/core';
import { Item } from './Models/items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServService {

  private items: Item[] = [
    { id: 1, name: 'Tech Treats' },
    { id: 2, name: 'Gizmo Giggles' },
    { id: 3, name: 'Gadget Groove' }
  ];

   // Create
  addItem(item: Item): Observable<Item[]> {
    this.items.push(item);
    return of(this.items);
  }

   // Read
   getItems(): Observable<Item[]> {
    return of(this.items);
  }

  // Update
  updateItem(updatedItem: Item): Observable<Item[]> {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
    return of(this.items);
  }

  // Delete
  deleteItem(id: number): Observable<Item[]> {
    this.items = this.items.filter(item => item.id !== id);
    return of(this.items);
  }
  
  

}
