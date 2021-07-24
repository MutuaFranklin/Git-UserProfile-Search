import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repositories } from '../models/repositories';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  repo: Repositories;

  user: UserProfile;

  private userName !:string;
  items!:any;


  constructor(private http: HttpClient) {
    this.user = new UserProfile(" ", " ", " ", " ", " ", 0, " ", "","");
    this.repo = new Repositories(" ", " ", " ", " ", "");
   }


  getUserData(searchName: string) {
    interface ApiResponse {
      name: string;
      login: string;
      avatar_url: string;
      bio: string;
      location: string;
      public_repos: number;
      html_url: string;
      following: string;
      followers:string

    }
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + searchName + environment.apikey)
        .toPromise()
        .then(profile => {
          this.user.name = profile.name;
          this.user.login = profile.login;
          this.user.avatar_url = profile.avatar_url;
          this.user.bio = profile.bio;
          this.user.location = profile.location;
          this.user.public_repos = profile.public_repos;
          this.user.html_url = profile.html_url;
          this.user.following = profile.following;
          this.user.followers = profile.followers;





          console.log(profile);

          resolve();
        });
    });


  }

   // updateProfile(searchName:string){
  // 	this.searchName = searchName;
  // }


  getRepoInfo(searchName:string) {
    interface ApiResponse {
      name: string;
      homepage: string;
      description: string;
      html_url: string;

    }
    this.http
      .get<ApiResponse>(environment.apiUrl + searchName + environment.apiRepokey)
      .subscribe(response => {
        this.items = response;
        console.log(response)

      });
  }
}
