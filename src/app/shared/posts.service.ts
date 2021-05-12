import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts = ['hello', 'world'];
  posts$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.posts);
  constructor() {}

  addPost(post: string) {
    this.posts = [...this.posts, ...[post]];
    this.posts$.next(this.posts);
  }
}
