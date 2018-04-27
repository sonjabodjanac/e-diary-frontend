import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljDetaljiComponent } from './roditelj-detalji.component';

describe('RoditeljDetaljiComponent', () => {
  let component: RoditeljDetaljiComponent;
  let fixture: ComponentFixture<RoditeljDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
