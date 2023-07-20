import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieLikesService {
  constructor(private http: HttpClient) {}

  getMostLikedMovies(): Observable<any> {
    const url = '/api/movies/most-liked';
    return this.http.get(url);
  }
}
