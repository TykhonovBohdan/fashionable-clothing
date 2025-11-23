import { inject, Injectable } from '@angular/core';
import { ClothingItem } from '../shared/models/clothing-item';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);
  private toastService = inject(ToastService);

  private itemsSubject = new BehaviorSubject<ClothingItem[]>([]);

  public items$: Observable<ClothingItem[]> = this.itemsSubject.asObservable();

  constructor() {
    this.loadItems();
  }

  private loadItems() {
    this.http
      .get<ClothingItem[]>('items')
      .pipe(
        tap((items) => this.itemsSubject.next(items)),
        catchError(this.handleError<ClothingItem[]>('loadItems', []))
      )
      .subscribe();
  }

  public getItemById(id: number): Observable<ClothingItem | undefined> {
    return this.http
      .get<ClothingItem>(`items/${id}`)
      .pipe(catchError(this.handleError<ClothingItem | undefined>(`getItemById id=${id}`)));
  }

  public filterItems(searchTerm: string): void {
    const url = searchTerm ? `items?q=${searchTerm}` : 'items';

    this.http
      .get<ClothingItem[]>(url)
      .pipe(
        tap((items) => this.itemsSubject.next(items)),
        catchError(this.handleError<ClothingItem[]>('filterItems', []))
      )
      .subscribe();
  }

  public addItem(newItemData: Omit<ClothingItem, 'id'>): void {
    this.http
      .post<ClothingItem>('items', newItemData)
      .pipe(
        tap((newItem) => {
          const currentItems = this.itemsSubject.getValue();
          this.itemsSubject.next([newItem, ...currentItems]);
        }),
        catchError(this.handleError<any>('addItem'))
      )
      .subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      
      this.toastService.error(`Помилка: ${operation}. Спробуйте пізніше.`);

      return of(result as T);
    };
  }
}
