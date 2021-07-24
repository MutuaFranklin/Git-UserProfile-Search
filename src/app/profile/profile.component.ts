import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  // form!: FormGroup


  searchResults(searchName: string){
    if (searchName !== ''){
      this.userService.getUserData(searchName);
      this.repoService.getRepoInfo(searchName);
      // console.log(searchName)

    }
  }

  submitQuery(form: NgForm){
    // this.form.reset()
  }



  constructor(private http: HttpClient, private userService: UserServiceService, public repoService: UserServiceService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.repo = this.userService.repo;
    // console.log(this.repo)
   }

}
