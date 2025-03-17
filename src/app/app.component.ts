import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, provideRouter, RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Import Components
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { ThrillerComponent } from './thriller/thriller.component';

// Define Routes
const routes: Routes = [
  { path: 'action', component: ActionComponent },
  { path: 'thriller', component: ThrillerComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/action', pathMatch: 'full' }, // Default route
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    AboutComponent,
    ActionComponent,
    ThrillerComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
}

