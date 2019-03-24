import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbiaIcefield2018Component } from './columbia-icefield2018.component';

describe('ColumbiaIcefield2018Component', () => {
  let component: ColumbiaIcefield2018Component;
  let fixture: ComponentFixture<ColumbiaIcefield2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumbiaIcefield2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumbiaIcefield2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
