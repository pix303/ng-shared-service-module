import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: string[] = [];
  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.posts$.subscribe((posts) => {
      this.items = posts;
    });
  }

  onAddClick() {
    this.postsService.addPost('added post ' + Math.round(Math.random() * 1000));
  }
}
