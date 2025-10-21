import { Component, Input, OnInit } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard implements OnInit {
  @Input() item!: ClothingItem;

  constructor() {}

  ngOnInit(): void {}
}
