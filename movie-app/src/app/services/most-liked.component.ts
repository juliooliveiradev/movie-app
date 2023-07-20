import { Component, OnInit } from '@angular/core';
import { MovieLikesService } from '../services/movie-likes.service';

@Component({
  selector: 'app-most-liked',
  templateUrl: './most-liked.component.html',
  styleUrls: ['./most-liked.component.css']
})
export class MostLikedComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieLikesService: MovieLikesService) {}

  ngOnInit() {
    this.movieLikesService.getMostLikedMovies().subscribe(data => {
      this.movies = data;
    });
  }
}
