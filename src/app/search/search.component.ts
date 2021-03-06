import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositorySearchService } from '../repository-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Repository;

  constructor(private RepositorySearchService: RepositorySearchService) { }

  ngOnInit(): void {
    this.RepositorySearchService.gitSearch('python').then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText);

    })
    
  }

  gitSearch = (query: string) => {
    this.RepositorySearchService.gitSearch(query).then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  
}
