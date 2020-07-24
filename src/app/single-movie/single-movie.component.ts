import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/models/child';
import { Parent } from 'src/app/models/parent';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

movie: Child ;
@Input() movieData: Parent;
  
constructor() { }

  ngOnInit()  {
    let data = {}
    this.movie = this.movieData.results;
    console.log("svsv")
  }

}
