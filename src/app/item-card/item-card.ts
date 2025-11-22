import { Component, input, InputSignal } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { HighlightDirective } from '../shared/directives/highlight.directive';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TruncatePipe, HighlightDirective],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  item: InputSignal<ClothingItem> = input.required<ClothingItem>();
}
