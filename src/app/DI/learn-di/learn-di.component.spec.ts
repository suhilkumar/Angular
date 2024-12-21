import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDIComponent } from './learn-di.component';

describe('LearnDIComponent', () => {
  let component: LearnDIComponent;
  let fixture: ComponentFixture<LearnDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
