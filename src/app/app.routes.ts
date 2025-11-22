import { Routes } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { ItemDetails } from './item-details/item-details';
import { ItemForm } from './item-form/item-form';

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
    path: 'items/new',
    component: ItemForm,
  },
  {
    path: 'items/:id',
    component: ItemDetails,
  },
];
