import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazredDetaljiComponent } from './razred-detalji.component';

describe('RazredDetaljiComponent', () => {
  let component: RazredDetaljiComponent;
  let fixture: ComponentFixture<RazredDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazredDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazredDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
