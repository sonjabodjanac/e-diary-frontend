import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastavnikPretragaComponent } from './nastavnik-pretraga.component';

describe('NastavnikPretragaComponent', () => {
  let component: NastavnikPretragaComponent;
  let fixture: ComponentFixture<NastavnikPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastavnikPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastavnikPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
