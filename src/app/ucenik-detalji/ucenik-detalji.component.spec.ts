import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikDetaljiComponent } from './ucenik-detalji.component';

describe('UcenikDetaljiComponent', () => {
  let component: UcenikDetaljiComponent;
  let fixture: ComponentFixture<UcenikDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
