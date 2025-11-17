import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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

  public items = toSignal(this.dataService.items$, { initialValue: [] });

  onSearchChange(): void {
    this.dataService.filterItems(this.searchTerm);
  }

  constructor() {}

  onItemSelected(item: ClothingItem) {
    console.log('Обраний елемент (з items-list):', item);
  }
}
