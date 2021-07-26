import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Followers } from '../models/followers';

@Injectable({
  providedIn: 'root'
})
export class UserFollowService {


  follower!: Followers
  followersList:any


  public searchName !:string;



  constructor(private http: HttpClient) {
    this.follower = new Followers("", "", "");
   }


  // on search event
  getUserFollowers(searchName:string) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;


    }
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + searchName + "/followers" )
        .subscribe(response => {
          this.followersList = response;
          // console.log(response)

        });
    });


  }



}
