import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikOcenaComponent } from './nastavnik-ocena.component';

describe('NastavnikOcenaComponent', () => {
  let component: NastavnikOcenaComponent;
  let fixture: ComponentFixture<NastavnikOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
