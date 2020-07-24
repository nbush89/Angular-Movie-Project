import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private movieService: MoviesService) {}
  ngOnInit() {
    this.movieService.genre = 1,
    this.movieService.getMovies({page: 2, year: 1990} ).subscribe((data) => {
      console.log(data)
    }) 
  }
  title = 'movies-project';
}
