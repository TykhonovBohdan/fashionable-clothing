import { Component, input, output, InputSignal, OutputEmitterRef } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  item: InputSignal<ClothingItem> = input.required<ClothingItem>();

  select: OutputEmitterRef<ClothingItem> = output<ClothingItem>();

  constructor() {}

  onShowDetails(): void {
    this.select.emit(this.item());
  }
}
