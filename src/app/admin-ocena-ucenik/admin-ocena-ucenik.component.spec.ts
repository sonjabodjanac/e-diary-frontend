import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOcenaUcenikComponent } from './admin-ocena-ucenik.component';

describe('AdminOcenaUcenikComponent', () => {
  let component: AdminOcenaUcenikComponent;
  let fixture: ComponentFixture<AdminOcenaUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOcenaUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOcenaUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
