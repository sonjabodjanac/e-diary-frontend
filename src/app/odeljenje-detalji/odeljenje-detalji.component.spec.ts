import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjeDetaljiComponent } from './odeljenje-detalji.component';

describe('OdeljenjeDetaljiComponent', () => {
  let component: OdeljenjeDetaljiComponent;
  let fixture: ComponentFixture<OdeljenjeDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjeDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjeDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
