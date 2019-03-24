import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenUltraComponent } from './golden-ultra.component';

describe('GoldenUltraComponent', () => {
  let component: GoldenUltraComponent;
  let fixture: ComponentFixture<GoldenUltraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenUltraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenUltraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
