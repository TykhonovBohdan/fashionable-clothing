import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '../toast/toast';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, ToastComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  title = 'Fashionable Clothing';
  year = new Date().getFullYear();
}
