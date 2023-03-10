import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionKitStoredComponent } from './question-kit-stored.component';

describe('QuestionKitStoredComponent', () => {
  let component: QuestionKitStoredComponent;
  let fixture: ComponentFixture<QuestionKitStoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionKitStoredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionKitStoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
