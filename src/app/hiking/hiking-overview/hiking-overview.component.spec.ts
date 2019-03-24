import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikingOverviewComponent } from './hiking-overview.component';

describe('HikingOverviewComponent', () => {
  let component: HikingOverviewComponent;
  let fixture: ComponentFixture<HikingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
