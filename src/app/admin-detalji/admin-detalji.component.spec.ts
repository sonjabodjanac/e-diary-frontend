import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetaljiComponent } from './admin-detalji.component';

describe('AdminDetaljiComponent', () => {
  let component: AdminDetaljiComponent;
  let fixture: ComponentFixture<AdminDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
