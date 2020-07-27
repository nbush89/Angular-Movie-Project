import { Component, OnInit, Input, } from '@angular/core';
import { Child } from '../models/child';
import { Parent } from 'src/app/models/parent'


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})

export class SingleMovieComponent implements OnInit {

  @Input() child: any; 
  movie: any;

constructor() { }

  ngOnInit()  {
  this.movie = { 
    poster: 'https://image.tmdb.org/t/p/original' + this.child.poster_path,
    title: this.child.title,
    release_date: this.child.release_date,
    overview: this.child.overview,
  }
  }

}
