import { TestBed } from '@angular/core/testing';

import { ApiMemberService } from './api-member.service';

describe('ApiMemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMemberService = TestBed.get(ApiMemberService);
    expect(service).toBeTruthy();
  });
});
