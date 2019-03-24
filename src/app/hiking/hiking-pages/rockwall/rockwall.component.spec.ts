import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockwallComponent } from './rockwall.component';

describe('RockwallComponent', () => {
  let component: RockwallComponent;
  let fixture: ComponentFixture<RockwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
