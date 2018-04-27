import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikPredajeDetaljComponent } from './nastavnik-predaje-detalj.component';

describe('NastavnikPredajeDetaljComponent', () => {
  let component: NastavnikPredajeDetaljComponent;
  let fixture: ComponentFixture<NastavnikPredajeDetaljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikPredajeDetaljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikPredajeDetaljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
