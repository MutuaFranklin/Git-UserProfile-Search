import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Repositories } from '../models/repositories';
import { UserProfile } from '../models/user-profile';
import { UserServiceService } from '../services/user-service.service';
import * as $ from 'jquery';
import { UserFollowService } from '../services/userfollow.service';
import { Followers } from '../models/followers';
import { Following } from '../models/following';
import { FollowingService } from '../services/following.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:UserProfile
  repo!:Repositories
  follower!: Followers
  follow!: Following
  searchName!: string
  searchForm: any;


  searchResults(searchName: string){
    if (searchName !== ''){
      this.userService.getUserData(searchName);
      this.repoService.getRepoInfo(searchName);
      this.userFollowers.getUserFollowers(searchName);
      this.userFollowing.getUserFollowing(searchName);


    //  console.log(searchName)

    }
  }

  constructor(
    private http: HttpClient,
    private userService: UserServiceService,
    public repoService: UserServiceService,
    public userFollowers: UserFollowService,
    public userFollowing: FollowingService,

    ) {

  }



  ngOnInit(): void {
    this.user = this.userService.user;
    this.searchResults('MutuaFranklin');




    $('.userForm .userSearchBtn').on('click', function () {

      if(!$(".userForm input#searchName").val()){
        $(".validate").fadeIn(1000);

        $(".onSearch").css("display", "flex");


      }
      else{
        $(".validate").fadeOut();

      }
      
      $('.userForm').find('input').val('');


    });

    $('li .repo-link').on('click', function () {
      $(".repo-list").fadeIn(1000);
      $(".followers-list").hide();
      $(".following-list").hide();


    });

    $('li .followers-link').on('click', function () {
      $(".followers-list").fadeIn(2000);
      $(".repo-list").hide();
      $(".following-list").hide();
      $(".followers-list").css("display", "flex");


    });

    $('li .following-link').on('click', function () {
      $(".following-list").fadeIn(1000);
      $(".followers-list").hide();
      $(".repo-list").hide();
      $(".following-list").css("display", "flex");


    });

  }

}
