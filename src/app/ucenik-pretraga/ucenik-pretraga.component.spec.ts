import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikPretragaComponent } from './ucenik-pretraga.component';

describe('UcenikPretragaComponent', () => {
  let component: UcenikPretragaComponent;
  let fixture: ComponentFixture<UcenikPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
