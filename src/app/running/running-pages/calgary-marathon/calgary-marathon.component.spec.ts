import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalgaryMarathonComponent } from './calgary-marathon.component';

describe('CalgaryMarathonComponent', () => {
  let component: CalgaryMarathonComponent;
  let fixture: ComponentFixture<CalgaryMarathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalgaryMarathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalgaryMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
