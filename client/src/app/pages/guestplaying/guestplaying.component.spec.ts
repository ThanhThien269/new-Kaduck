import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestplayingComponent } from './guestplaying.component';

describe('GuestplayingComponent', () => {
  let component: GuestplayingComponent;
  let fixture: ComponentFixture<GuestplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestplayingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
