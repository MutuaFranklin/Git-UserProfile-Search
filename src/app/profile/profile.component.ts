import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repositories } from '../models/repositories';
import { UserProfile } from '../models/user-profile';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!:UserProfile
  repo!:Repositories
  searchName!: string


  searchResults(searchName: string){
    if (searchName !== ''){
      console.log(searchName)
      this.userService.getUserData(searchName);
      this.repoService.getRepoInfo(searchName);
    }
  }



  constructor(private http: HttpClient, private userService: UserServiceService, public repoService: UserServiceService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.repo = this.userService.repo;
    console.log(this.repo)  }

}
