import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { Genre } from '../models/genre.model';
import movieData from '../../assets/movies.json';




@Component({
  selector: 'app-thriller',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule,MatIconModule],
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css'],
})
export class ThrillerComponent implements OnInit {
  thriller: any = {}; // Initialize thriller as an empty object

  ngOnInit(): void {
    if (movieData.thriller) {
      this.thriller = movieData.thriller; // Load thriller data
      console.log("Thriller Data Loaded:", this.thriller); // Debugging
    } else {
      console.error("Thriller data not found in movies.json");
    }
  }
}
