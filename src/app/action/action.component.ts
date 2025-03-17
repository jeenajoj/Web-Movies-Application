import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Genre } from '../models/genre.model';
import movieData from '../../assets/movies.json';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent implements OnInit {
  action: any = {}; // Initialize action as an empty object

  ngOnInit(): void {
    if (movieData.action) {
      this.action = movieData.action; // Load action movie data
      console.log("Action Data Loaded:", this.action); // Debugging
    } else {
      console.error("Action data not found in movies.json");
    }
  }
}
