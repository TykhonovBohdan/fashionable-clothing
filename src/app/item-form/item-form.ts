import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './item-form.html',
  styleUrl: './item-form.css',
})
export class ItemForm {
  private dataService = inject(DataService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  isSubmitting = signal(false);

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(500)],
    }),
    price: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(1)],
    }),
    imageUrl: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/https?:\/\/.+/)],
    }),
    size: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    color: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const rawValue = this.form.getRawValue();

    const newItemData = {
      ...rawValue,
      price: rawValue.price!,
      size: rawValue.size
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    };

    setTimeout(() => {
      this.dataService.addItem(newItemData);
      this.toastService.success(`Товар "${newItemData.name}" успішно створено!`);
      this.isSubmitting.set(false);
      this.router.navigate(['/items']);
    }, 500);
  }
}
