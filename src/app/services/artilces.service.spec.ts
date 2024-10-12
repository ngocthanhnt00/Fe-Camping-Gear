/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtilcesService } from './artilces.service';

describe('Service: Artilces', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtilcesService]
    });
  });

  it('should ...', inject([ArtilcesService], (service: ArtilcesService) => {
    expect(service).toBeTruthy();
  }));
});
