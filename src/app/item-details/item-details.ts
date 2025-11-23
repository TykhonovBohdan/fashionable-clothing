import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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

  public item = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const idStr = params.get('id');
        const id = idStr ? Number(idStr) : NaN;

        if (!isNaN(id)) {
          return this.dataService.getItemById(id);
        }
        return of(undefined);
      })
    ),
    { initialValue: null }
  );

  public notFound = computed(() => {
    return this.item() === undefined;
  });
}
