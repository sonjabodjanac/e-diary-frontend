import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaPretragaComponent } from './ocena-pretraga.component';

describe('OcenaPretragaComponent', () => {
  let component: OcenaPretragaComponent;
  let fixture: ComponentFixture<OcenaPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenaPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenaPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
