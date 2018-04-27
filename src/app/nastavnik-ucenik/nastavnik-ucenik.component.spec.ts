import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikUcenikComponent } from './nastavnik-ucenik.component';

describe('NastavnikUcenikComponent', () => {
  let component: NastavnikUcenikComponent;
  let fixture: ComponentFixture<NastavnikUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
