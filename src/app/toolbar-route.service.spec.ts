import { TestBed } from '@angular/core/testing';

import { ToolbarRouteService } from './toolbar-route.service';

describe('ToolbarRouteService', () => {
  let service: ToolbarRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
