import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genre: Genre;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe((data: any) => {
      this.moviesService.genres = data.genres;
      //console.log(this.moviesService.genres)
    });
  }

  formSubmitted(data: any) {
    console.log(data.keyword)
    console.log(data.with_keywords)
    const parameters: any = {
      keyword: data.keyword,
      genre: data.genre,
    };
    this.moviesService
      .getMovies(parameters)
      .subscribe(this.onSuccess.bind(this), this.onError.bind(this));
    this.moviesService.movies = data.results;
    console.log(data);
  }

  onSuccess(data: any) {
    this.moviesService.movies = data.results;
    console.log(this.moviesService.movies)
  }

  onError(error: Error) {
    console.log(error.message);
  }

  getGenres() {
    //console.log(this.moviesService.genres)
    return this.moviesService.genres;
  }

  changeGenreMethod() {
    //console.log(this.moviesService.genres)
  }
}
