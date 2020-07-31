import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  getMovies() {
    return this.movieService.favoriteMovies;
  }
}
