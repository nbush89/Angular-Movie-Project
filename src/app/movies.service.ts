import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=7d24a9906311e94df7a1bf45f4e60f2c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

}
