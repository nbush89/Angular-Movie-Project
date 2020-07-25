import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genre: Genre; 

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies({page: 1, sortBy: "popularity.desc"} ).subscribe((data: any) => {
      this.moviesService.movies = data.results;  
    });

    this.moviesService.getGenres().subscribe((data: any) => {
      this.moviesService.genres = data.genres
      console.log(this.moviesService.genres)
    })
  }

    formSubmitted(data: NgForm) {
      console.log(data)
  }

  getGenres() {
    return this.moviesService.genres; 
  }

  changeGenreMethod() {
    console.log(this.genre)
  }
}
