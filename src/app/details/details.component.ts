import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() child: any;

  constructor(private movieService: MoviesService) { }



  ngOnInit(): void {
      // return this.movieService.movies;
  }



}
