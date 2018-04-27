import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikOdeljenjaComponent } from './nastavnik-odeljenja.component';

describe('NastavnikOdeljenjaComponent', () => {
  let component: NastavnikOdeljenjaComponent;
  let fixture: ComponentFixture<NastavnikOdeljenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikOdeljenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikOdeljenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
