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
    public defaultUser: UserServiceService,
    public defaultRepo: UserServiceService,
    public defaultUserFollowers: UserFollowService,
    public userFollowers: UserFollowService,
    public userFollowing: FollowingService,
    public defaultUserFollowing: FollowingService,




    ) {
    this.defaultUser.getDefaultUser();
    this.defaultRepo.getDefaultRepo();
    this.defaultUserFollowers.getDefaultUserFollowers();
    this.defaultUserFollowing.getDefaultFollowing();




  }



  ngOnInit(): void {
    this.user = this.userService.user;
    // this.repo = this.userService.repo;
    this.follower = this.defaultUserFollowers.follower;
    this.follow = this.defaultUserFollowing.follow;

    // console.log(this.follower)
    $('.userForm .userSearchBtn').on('click', function () {
      $('.userForm').find('input').val('');

      if (!$(".userForm input#searchName").val()){
        $(".validate").fadeOut(1000);
        $(".defaultUser").hide();
        $(".onSearch").fadeIn(500);
        $(".onSearch").css("display", "flex");
        $(".after-search").css("display", "flex");


      }
      else{
        // alert("Search username required!")
        // $(".validate").fadeOut();

      }

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
