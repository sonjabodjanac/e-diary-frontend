import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOcenaComponent } from './admin-ocena.component';

describe('AdminOcenaComponent', () => {
  let component: AdminOcenaComponent;
  let fixture: ComponentFixture<AdminOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
