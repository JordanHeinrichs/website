import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningOverviewComponent } from './running-overview.component';

describe('RunningOverviewComponent', () => {
  let component: RunningOverviewComponent;
  let fixture: ComponentFixture<RunningOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
