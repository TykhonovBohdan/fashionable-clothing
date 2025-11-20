import { Component, input, InputSignal } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  item: InputSignal<ClothingItem> = input.required<ClothingItem>();
}
