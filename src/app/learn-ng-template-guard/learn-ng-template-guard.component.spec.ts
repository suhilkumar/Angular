import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNgTemplateGuardComponent } from './learn-ng-template-guard.component';

describe('LearnNgTemplateGuardComponent', () => {
  let component: LearnNgTemplateGuardComponent;
  let fixture: ComponentFixture<LearnNgTemplateGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnNgTemplateGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNgTemplateGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
