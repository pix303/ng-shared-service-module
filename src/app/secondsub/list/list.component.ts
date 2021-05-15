import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: string[] = [];
  constructor(
    private readonly postsService: PostsService,
    public readonly userService: UsersService
  ) {}

  ngOnInit(): void {
    this.postsService.posts$.subscribe((posts) => {
      this.items = posts;
    });
  }

  onAddClick() {
    this.postsService.addPost('added post ' + Math.round(Math.random() * 1000));
  }

  onAddUserClick() {
    this.userService.addUser('new user ' + Math.round(Math.random() * 1000));
  }
}
