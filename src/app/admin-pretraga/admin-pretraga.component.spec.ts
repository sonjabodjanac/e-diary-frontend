import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPretragaComponent } from './admin-pretraga.component';

describe('AdminPretragaComponent', () => {
  let component: AdminPretragaComponent;
  let fixture: ComponentFixture<AdminPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
