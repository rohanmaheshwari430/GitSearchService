import { Component } from '@angular/core';
import { RepositorySearchService } from './repository-search.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RepositorySearchService]
})
export class AppComponent {
  title = 'GitSearchApp';

  constructor(private RepositorySearchService: RepositorySearchService) {

  }
}
