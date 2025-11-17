import { Component, inject } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items-list',
  imports: [ItemCard, CommonModule, FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  public searchTerm: string = '';

  private dataService = inject(DataService);

  private allClothingItems: ClothingItem[] = this.dataService.getItems();

  get filteredItems(): ClothingItem[] {
    if (!this.searchTerm) {
      return this.allClothingItems;
    }

    const term = this.searchTerm.toLowerCase();

    return this.allClothingItems.filter(
      (item) => item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)
    );
  }

  constructor() {}

  onItemSelected(item: ClothingItem) {
    console.log('Обраний елемент (з items-list):', item);
  }
}
