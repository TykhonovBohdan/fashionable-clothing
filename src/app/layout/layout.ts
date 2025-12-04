import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '../toast/toast';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, ToastComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  authService = inject(AuthService);
  title = 'Fashionable Clothing';
  year = new Date().getFullYear();
}
