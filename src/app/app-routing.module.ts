import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './sub/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  {
    path: 'secondsub',
    loadChildren: () =>
      import('./secondsub/secondsub.module').then((m) => m.SecondsubModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
