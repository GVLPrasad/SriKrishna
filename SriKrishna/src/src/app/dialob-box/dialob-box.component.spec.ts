import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialobBoxComponent } from './dialob-box.component';

describe('DialobBoxComponent', () => {
  let component: DialobBoxComponent;
  let fixture: ComponentFixture<DialobBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialobBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialobBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
