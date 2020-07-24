import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    let data = {};
    this.moviesService.getMovies(data).subscribe((data: any) => {
      console.log(data)
    });
  }

}
