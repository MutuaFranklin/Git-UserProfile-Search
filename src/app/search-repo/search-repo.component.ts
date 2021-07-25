import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

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
