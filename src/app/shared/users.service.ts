import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  users = ['john', 'sam'];
  user$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.users);
  constructor() {}

  addUser(user: string) {
    this.users = [...this.users, ...[user]];
    this.user$.next(this.users);
  }
}
