import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvalToGpsStravaComponent } from './oval-to-gps-strava.component';

describe('OvalToGpsStravaComponent', () => {
  let component: OvalToGpsStravaComponent;
  let fixture: ComponentFixture<OvalToGpsStravaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvalToGpsStravaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvalToGpsStravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
