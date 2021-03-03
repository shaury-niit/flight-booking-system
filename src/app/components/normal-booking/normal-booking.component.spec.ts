import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalBookingComponent } from './normal-booking.component';

describe('NormalBookingComponent', () => {
  let component: NormalBookingComponent;
  let fixture: ComponentFixture<NormalBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
