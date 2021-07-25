import { TestBed } from '@angular/core/testing';

import { UserfollowService } from './userfollow.service';

describe('UserfollowService', () => {
  let service: UserfollowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfollowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
