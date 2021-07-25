import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  repoResults(searchName: string){
    if (searchName !== ''){
      // this.userService.getUserData(searchName);
      // this.repoService.getRepoInfo(searchName);
      // this.userFollowers.getUserFollowers(searchName);
      // this.userFollowing.getUserFollowing(searchName);


    //  console.log(searchName)

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
