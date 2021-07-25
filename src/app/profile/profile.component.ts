import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Repositories } from '../models/repositories';
import { UserProfile } from '../models/user-profile';
import { UserServiceService } from '../services/user-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!:UserProfile
  repo!:Repositories
  searchName!: string
  searchForm: any;


  searchResults(searchName: string){
    if (searchName !== ''){
      this.userService.getUserData(searchName);
      this.repoService.getRepoInfo(searchName);
      this.userService.updateProfile(searchName)
      // console.log(searchName)

    }
  }

  clearForm(){
    this.searchForm.reset();


  }





  constructor(
    private http: HttpClient,
    private userService: UserServiceService,
    public repoService: UserServiceService,
    public defaultUser: UserServiceService,
    public defaultRepo: UserServiceService,
    ) {
    this.defaultUser.getDefaultUser();
    this.defaultRepo.getDefaultRepo();


  }



  ngOnInit(): void {
    this.user = this.userService.user;
    this.repo = this.userService.repo;
    // console.log(this.repo)
    $('.userForm .userSearchBtn').on('click', function () {
      $('.userForm').find('input').val('');

      if (!$(".userForm input#searchName").val()){
        $(".validate").fadeOut(1000);
        $(".defaultUser").hide();
        $(".onSearch").fadeIn(500);
        $(".onSearch").css("display", "flex");




      }
      else{
        // alert("Search username required!")
        // $(".validate").fadeOut();

      }



    });





  }

}
