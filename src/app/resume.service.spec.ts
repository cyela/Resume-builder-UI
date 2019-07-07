import { TestBed, inject } from '@angular/core/testing';

import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeService]
    });
  });

  it('should be created', inject([ResumeService], (service: ResumeService) => {
    expect(service).toBeTruthy();
  }));
});
