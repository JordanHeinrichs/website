import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BostonMarathonComponent } from './boston-marathon.component';

describe('BostonMarathonComponent', () => {
  let component: BostonMarathonComponent;
  let fixture: ComponentFixture<BostonMarathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BostonMarathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BostonMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
