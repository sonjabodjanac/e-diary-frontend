import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetDetaljiComponent } from './predmet-detalji.component';

describe('PredmetDetaljiComponent', () => {
  let component: PredmetDetaljiComponent;
  let fixture: ComponentFixture<PredmetDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
