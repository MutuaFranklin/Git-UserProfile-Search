import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchRepo } from '../models/search-repo';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  repoList: any [] = [];


  repoResults(repoName: string){
    if (repoName !== ''){
      this.searchRepo.searchRepoName(repoName);


    }
  }



  findRepo(input:string){
    this.searchRepo.searchRepoName(input).toPromise().then(
      (response:any) => {
        this.repoList = response.items;
        console.log(response)

      }, (error: any) =>{
        this.searchRepo.getUserData('');
      }
    )
  }


  constructor( private http: HttpClient, private searchRepo: UserServiceService) { }

  ngOnInit(): void {

  }

}
