import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikDodavanjeComponent } from './ucenik-dodavanje.component';

describe('UcenikDodavanjeComponent', () => {
  let component: UcenikDodavanjeComponent;
  let fixture: ComponentFixture<UcenikDodavanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikDodavanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
