import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: ItemsList,
  },
  {
    path: 'items/:id',
    component: ItemDetails,
  },
];
