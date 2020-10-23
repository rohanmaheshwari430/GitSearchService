import { TestBed } from '@angular/core/testing';

import { RepositorySearchService } from './repository-search.service';

describe('RepositorySearchService', () => {
  let service: RepositorySearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorySearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
