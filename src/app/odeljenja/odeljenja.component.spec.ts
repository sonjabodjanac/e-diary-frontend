import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdeljenjaComponent } from './odeljenja.component';

describe('OdeljenjaComponent', () => {
  let component: OdeljenjaComponent;
  let fixture: ComponentFixture<OdeljenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdeljenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdeljenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
