import { TestBed } from '@angular/core/testing';

import { MycommonlibService } from './mycommonlib.service';

describe('MycommonlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MycommonlibService = TestBed.get(MycommonlibService);
    expect(service).toBeTruthy();
  });
});
