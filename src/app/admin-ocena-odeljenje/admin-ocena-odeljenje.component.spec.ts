import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOcenaOdeljenjeComponent } from './admin-ocena-odeljenje.component';

describe('AdminOcenaOdeljenjeComponent', () => {
  let component: AdminOcenaOdeljenjeComponent;
  let fixture: ComponentFixture<AdminOcenaOdeljenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOcenaOdeljenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOcenaOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
