import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetOceneComponent } from './predmet-ocene.component';

describe('PredmetOceneComponent', () => {
  let component: PredmetOceneComponent;
  let fixture: ComponentFixture<PredmetOceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetOceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetOceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
