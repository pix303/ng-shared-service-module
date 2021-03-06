import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { PostsService } from '../shared/posts.service';

const routes: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    /*UsersService, uncomment to stop share*/
    PostsService,
  ],
})
export class SubModule {}
