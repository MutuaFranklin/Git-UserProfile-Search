import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repositories } from '../models/repositories';
import { UserProfile } from '../models/user-profile';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  user!:UserProfile
  repo!:Repositories
  searchName!: string

  searchResults(searchName: string){
    if (searchName !== ''){
      this.userService.getUserData(searchName);
      this.repoService.getRepoInfo(searchName);



    //  console.log(searchName)

    }
  }



  constructor(
    private http: HttpClient,
    private userService: UserServiceService,
    public repoService: UserServiceService,

  ) {

   }

  ngOnInit(): void {
    this.user = this.userService.user;

  }

}
