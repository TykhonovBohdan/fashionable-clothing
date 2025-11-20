import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  private params = toSignal(this.route.paramMap, { initialValue: null });

  private itemId = computed(() => {
    const p = this.params();
    if (!p) return undefined;
    const idStr = p.get('id');
    const id = idStr ? Number(idStr) : NaN;
    return !isNaN(id) ? id : undefined;
  });

  public item = computed(() => {
    const id = this.itemId();
    return id !== undefined ? this.dataService.getItemById(id) : undefined;
  });

  public notFound = computed(() => {
    const p = this.params();
    if (!p) return false;

    return this.item() === undefined;
  });
}
