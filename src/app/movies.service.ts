import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  apiKey: string = '7d24a9906311e94df7a1bf45f4e60f2c';
  genre: number ;

  constructor(private http: HttpClient) { }

  getMovies(data: any): Observable<any> {
    let parameters = {
      page: data.page ? data.page : '1',
      year: data.year ? data.year : '',
      api_key: this.apiKey,
      genre: this.genre,
      sort_by: data.sortBy ? data.sortBy : 'Genre',
      kaljsdflkj: '',

    };
    return this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list', {params: {api_key: this.apiKey}});
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', {params: parameters});
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=7d24a9906311e94df7a1bf45f4e60f2c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }

}
