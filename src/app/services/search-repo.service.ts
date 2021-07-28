// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { SearchRepo } from '../models/search-repo';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchRepoService {

//   repoSearch :SearchRepo[]=[];
//   repoName!: string;
//   numberOfRepos: NumberOfRepositories;

//   constructor( private http:HttpClient ) {
//     this.numberOfRepos = new NumberOfRepositories(0)
//   }

//   repoByNameRequest(repoName: string){
//     interface repoSeaApiResponse{
//       // total_count:number,
//       items: []
//       }
//       const promise = new Promise<void>(((resolve,reject)=>{
//         let arrayLength = this.repoSearch.length;
//         for(let i=0; i<arrayLength; i++){ //removing initial values from array before pushing to the array
//           this.repoSearch.pop()
//         }
//         this.http.get<repoByNameApiResponse>(`https://api.github.com/search/repositories?q=${repoName}`).toPromise().then(response=>{
//           // this.numberOfRepos.repoCount =response.total_count
//           // console.log("Number of repos",this.numberOfRepos)
//           // this.repositories = response.items
//           for(let i=0; i<response.items.length; i++){
//             let repoSearch = new SearchRepo ("","","","",0,new Date());
//           repoSearch.name =  response.items[i]["name"]
//           repoSearch.description =  response.items[i]["description"]
//           repoSearch.language =  response.items[i]["language"]
//           repoSearch.html_url =  response.items[i]["html_url"]
//           // repoByName.forks = response.items[i]["forks"]
//           // repoByName.updated_at = response.items[i]["updated_at"]
//           this.repoSearch.push(repoSearch)
//           }
//           resolve();
//           // console.log(this.reposByName)

//         });
//       })

//   }

//   totalRepos(repoName: string){
//     interface repoByNameNumberApiResponse{
//       total_count:number
//       }
//       let promise = new Promise((resolve,reject)=>{
//         this.http.get<any>(`https://api.github.com/search/repositories?q=${repoName}`).toPromise().then(response=>{
//           this.numberOfRepos.total_count =response.total_count
//           console.log("Number of repos",this.numberOfRepos)
//           resolve()
//           console.log("Numbers",this.numberOfRepos.total_count)
//         },
//         error=>{
//           this.numberOfRepos.total_count= 0;
//           console.log("an error occured")
//           reject(error)
//         })
//       })
//       return promise
//   }
// }

// }
