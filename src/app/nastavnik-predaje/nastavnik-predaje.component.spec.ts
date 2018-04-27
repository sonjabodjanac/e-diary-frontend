import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikPredajeComponent } from './nastavnik-predaje.component';

describe('NastavnikPredajeComponent', () => {
  let component: NastavnikPredajeComponent;
  let fixture: ComponentFixture<NastavnikPredajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikPredajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikPredajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
