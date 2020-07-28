import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genre';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  apiKey: string = '7d24a9906311e94df7a1bf45f4e60f2c';
  genre: number;
  movies: any; 
  genres: Genre[]; 

  constructor(private http: HttpClient) { }

  getMovies(data: any): Observable<any> {
    let parameters = {
      page: data.page ? data.page : '',
      keyword: data.keyword ? data.keyword : '',
      api_key: this.apiKey,
      with_genres: data.genre ? data.genre : '',
      sort_by: data.sortBy ? data.sortBy : "popularity.desc",
    };
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', {params: parameters});
  }

  getGenres(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list', {params: {api_key: this.apiKey}});
  }

  // findMovieTitle(): Observable<any> {
  //   return this.http.get<any>
  // }
}
