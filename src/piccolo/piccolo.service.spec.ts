import { TestBed } from '@angular/core/testing';

import { PiccoloService } from './piccolo.service';

describe('PiccoloService', () => {
  let service: PiccoloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiccoloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
