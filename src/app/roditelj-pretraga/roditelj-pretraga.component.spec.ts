import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoditeljPretragaComponent } from './roditelj-pretraga.component';

describe('RoditeljPretragaComponent', () => {
  let component: RoditeljPretragaComponent;
  let fixture: ComponentFixture<RoditeljPretragaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoditeljPretragaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoditeljPretragaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
