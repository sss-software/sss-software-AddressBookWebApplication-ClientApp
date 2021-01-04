import { TestBed } from '@angular/core/testing';

import { ContactPostService } from './contact-post.service';

describe('ContactPostService', () => {
  let service: ContactPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
