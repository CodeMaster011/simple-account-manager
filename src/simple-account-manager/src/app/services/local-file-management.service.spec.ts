import { TestBed } from '@angular/core/testing';

import { LocalFileManagementService } from './local-file-management.service';

describe('LocalFileManagementService', () => {
  let service: LocalFileManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalFileManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
