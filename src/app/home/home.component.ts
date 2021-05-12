import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  numItems = 0;
  lastItem = 'none';
  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.posts$.subscribe((posts) => {
      this.numItems = posts.length;
      this.lastItem = posts[this.numItems - 1];
    });
  }
}
