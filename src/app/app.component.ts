import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  template: `<main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="logonemi.png"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nemi-test';
}
