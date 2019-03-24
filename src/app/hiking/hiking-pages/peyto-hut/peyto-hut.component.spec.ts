import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeytoHutComponent } from './peyto-hut.component';

describe('PeytoHutComponent', () => {
  let component: PeytoHutComponent;
  let fixture: ComponentFixture<PeytoHutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeytoHutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeytoHutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
