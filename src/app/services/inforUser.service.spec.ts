/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InforUserService } from './inforUser.service';

describe('Service: InforUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InforUserService]
    });
  });

  it('should ...', inject([InforUserService], (service: InforUserService) => {
    expect(service).toBeTruthy();
  }));
});
