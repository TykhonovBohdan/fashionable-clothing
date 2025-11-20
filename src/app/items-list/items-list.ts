import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ItemCard } from '../item-card/item-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
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
}
