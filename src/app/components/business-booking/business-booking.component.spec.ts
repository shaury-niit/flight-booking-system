import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBookingComponent } from './business-booking.component';

describe('BusinessBookingComponent', () => {
  let component: BusinessBookingComponent;
  let fixture: ComponentFixture<BusinessBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
