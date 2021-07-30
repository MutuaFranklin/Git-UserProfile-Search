import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SearchRepo } from '../models/search-repo';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  repoList: any [] = [];
  repoCount!: any;


  repoResults(repoName: string){
    if (repoName !== ''){
      this.searchRepo.searchRepoName(repoName);


    }
  }



  findRepo(input:string){
    let promise = new Promise((resolve, reject) => {
      this.searchRepo.searchRepoName(input).toPromise().then(
        (response:any) => {
          this.repoList = response.items;
          console.log(response)

          resolve(response);

        },

        (error) => {
          if (error.status) {
            // this.router.navigate(["/err"]);
          }

          reject(error);
        }
        );
    });
    return promise;
  }




  findTotalRepos(input:string){
    this.searchRepo.searchRepoName(input).toPromise().then(
      (response:any) => {
        this.repoCount = response;
        console.log(response)

      }, (error: any) =>{
        this.searchRepo.getUserData('');
      }
    )
  }


  constructor( private http: HttpClient, private searchRepo: UserServiceService, private router: Router) { }

  ngOnInit(): void {

    this.findRepo('portfolio');

    $('.userForm .userSearchBtn').on('click', function () {

      if(!$(".userForm input#repoName").val()){
        $(".validate").fadeIn(1000);

      }
      else{
        $(".validate").fadeOut();

      }

      $('.userForm').find('input').val('');


    });


  }

}
