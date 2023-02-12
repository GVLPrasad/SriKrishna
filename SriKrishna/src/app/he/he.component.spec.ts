import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEComponent } from './he.component';

describe('HEComponent', () => {
  let component: HEComponent;
  let fixture: ComponentFixture<HEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
