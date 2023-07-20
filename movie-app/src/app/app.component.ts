import { Component, OnInit } from '@angular/core';
import { MovieService } from '../app/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

  title = 'movie-app';
}
