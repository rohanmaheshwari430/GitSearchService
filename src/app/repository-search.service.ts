import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepositorySearchService {
  cachedValues: Array<{
    [query: string]: Repository
  }> = [];

  constructor(private http: HttpClient) { }

  gitSearch = (query: string): Promise<Repository> => {
    let promise = new Promise<Repository>((resolve,reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
              resolve(response as Repository)
            }, (error) => {
              reject(error);
            })
        }
    })
    return promise;
  }


  gitSearchUsers = (query: string): Promise<Repository> => {
    let promise = new Promise<Repository>((resolve,reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/users?q=' + query)
            .toPromise()
            .then( (response) => {
              resolve(response as Repository)
            }, (error) => {
              reject(error);
            })
        }
    })
    return promise;
}
  

}

