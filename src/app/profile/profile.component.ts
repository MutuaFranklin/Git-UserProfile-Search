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
      // console.log(searchName)

    }
  }

  clearForm(){
    this.searchForm.reset();


  }





  constructor(private http: HttpClient, private userService: UserServiceService, public repoService: UserServiceService) {
    this.searchName = 'MutuaFranklin';

  }

  updateProfile(searchName:string){
  	this.searchName = searchName;
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.repo = this.userService.repo;
    // console.log(this.repo)
    $('.userForm').on('click', function () {
      $('.userForm').find('input').val('');
     


      // $('#addForm').find('input:number').val('');

      });
    }

}
