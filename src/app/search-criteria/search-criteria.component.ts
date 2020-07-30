import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Genre } from 'src/app/models/genre';
import { NgForm } from '@angular/forms';

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

  formSubmitted(data: NgForm) {
    let parameters: any;
    let greaterThanRating = data.value.greaterThanRating;
    console.log(greaterThanRating);
    if (greaterThanRating) {
      parameters = {
        genre: data.value.genre,
        year: data.value.year,
        greaterThanRating: data.value.rating
      };
    } else {
      parameters = {
        genre: data.value.genre,
        year: data.value.year,
        lessThanRating: data.value.rating
      };
    }
    
    console.log(parameters);
    this.moviesService
      .getMovies(parameters)
      .subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  onSuccess(data: any) {
    this.moviesService.movies = data.results;
    console.log(this.moviesService.movies)
  }

  onError(error: Error) {
    console.log(error.message);
  }

  getGenres() {
    return this.moviesService.genres;
  }

  next() {
    
  }

}
