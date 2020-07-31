import { Component, OnInit, Input, } from '@angular/core';
import { Child } from '../models/child';
import { Parent } from 'src/app/models/parent'
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})

export class SingleMovieComponent implements OnInit {

  @Input() child: any;
  movie: any;

constructor(private movieService: MoviesService) { }

  ngOnInit()  {
  this.movie = {
    poster: 'https://image.tmdb.org/t/p/original' + this.child.poster_path,
    title: this.child.title,
    release_date: this.child.release_date,
    overview: this.child.overview,
  }
  }


  addToFavorites(movie) {
    this.movieService.favoriteMovies.push(movie);
    console.log(this.movieService.favoriteMovies);
  }
}
