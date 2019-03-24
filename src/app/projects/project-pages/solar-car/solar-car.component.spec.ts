import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCarComponent } from './solar-car.component';

describe('SolarCarComponent', () => {
  let component: SolarCarComponent;
  let fixture: ComponentFixture<SolarCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
