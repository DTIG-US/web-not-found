import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="not-found-container" style="padding: 150px 20px; text-align: center; color: white;">
      <h1 style="font-size: 3rem; margin-bottom: 20px;">404 - Page Not Found</h1>
      <p style="font-size: 1.2rem; margin-bottom: 40px;">The page you are looking for doesn't exist or has been moved.</p>
      <a routerLink="/" style="display: inline-block; padding: 10px 20px; background-color: var(--ih-color-brand-primary, #4A90E2); color: white; text-decoration: none; border-radius: 5px;">Return Home</a>
    </div>
  `
})
export class NotFoundComponent {}
