import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaDetaljiComponent } from './ocena-detalji.component';

describe('OcenaDetaljiComponent', () => {
  let component: OcenaDetaljiComponent;
  let fixture: ComponentFixture<OcenaDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenaDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
