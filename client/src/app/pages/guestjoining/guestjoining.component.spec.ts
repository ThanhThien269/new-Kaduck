import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestjoiningComponent } from './guestjoining.component';

describe('GuestjoiningComponent', () => {
  let component: GuestjoiningComponent;
  let fixture: ComponentFixture<GuestjoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestjoiningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestjoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
