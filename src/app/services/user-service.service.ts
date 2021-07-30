import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';
import { Repositories } from '../models/repositories';
import { SearchRepo } from '../models/search-repo';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  filter(arg0: (response: any) => any): UserServiceService {
    throw new Error('Method not implemented.');
  }


  repo: Repositories;

  user: UserProfile;

  repoSearch: SearchRepo;

  items:any;

  repoItems:any[]= [];

  public searchName !:string;
  public repoName !:string;




  constructor(private http: HttpClient) {
    this.user = new UserProfile(" ", " ", " ", " ", " ", 0, " ", "","", new Date());
    this.repo = new Repositories(" ", " ", " ", " ", [], new Date(), "");
    this.repoSearch = new SearchRepo (0, []);

    // this.repoSearch = new SearchRepo ("","","","",0,new Date());
   }


  // on search event
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
      followers:string;
      created_at: Date;


    }
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + searchName)
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
          this.user.created_at = profile.created_at;



          // console.log(profile);

          resolve();
        });
    });


  }

  updateProfile(searchName:string){
  	this.searchName = searchName;
  }


  getRepoInfo(searchName:string) {
    interface ApiResponse {
      repos:[]

    }
    this.http
      .get<ApiResponse>(environment.apiUrl + searchName + environment.apiRepokey)
      .subscribe(response => {
        this.items = response;
        // console.log(response)

      });
  }

  searchLocalRepo(repoTitle:string){
    return this.http.get(` https://api.github.com/users/{user}/repos{?type,page,per_page,sort}`)
  }

  searchRepoName(repoName:string) {

    return this.http.get(` https://api.github.com/search/repositories?q=${repoName}`);


  }

}
