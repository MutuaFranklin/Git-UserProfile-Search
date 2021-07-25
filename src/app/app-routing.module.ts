import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';

const routes: Routes = [
  { path: '', component: ProfileComponent},
  { path: 'repositories', component: SearchRepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
