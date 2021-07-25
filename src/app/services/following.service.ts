import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Following } from '../models/following';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {
  follow!: Following
  followingList:any


  public searchName !:string;



  constructor(private http: HttpClient) {
    this.follow = new Following("", "", "");
   }

  getDefaultFollowing(){
    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;



    }
    const promise = new Promise<void>((resolve, reject) => {
      const promise = new Promise<void>((resolve, reject) => {
        this.http
          .get<ApiResponse>(environment.apiUrl + "MutuaFranklin" + "/following")
          .subscribe(response => {
            this.followingList = response;
              console.log(response)

          });
      });
    });

  }



  // on search event
  getUserFollowing(searchName:string) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      html_url: string;


    }
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl + searchName + "/following" )
        .subscribe(response => {
          this.followingList = response;
          // console.log(response)

        });
    });


  }


}
