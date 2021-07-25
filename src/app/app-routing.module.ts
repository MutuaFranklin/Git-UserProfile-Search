import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';

const routes: Routes = [
  { path: '', component: ProfileComponent},
  { path: 'repositories', component: RepoSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
