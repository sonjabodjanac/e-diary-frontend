import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikOcenaComponent } from './ucenik-ocena.component';

describe('UcenikOcenaComponent', () => {
  let component: UcenikOcenaComponent;
  let fixture: ComponentFixture<UcenikOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
