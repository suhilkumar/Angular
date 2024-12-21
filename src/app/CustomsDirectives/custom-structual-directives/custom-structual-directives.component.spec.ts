import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructualDirectivesComponent } from './custom-structual-directives.component';

describe('CustomStructualDirectivesComponent', () => {
  let component: CustomStructualDirectivesComponent;
  let fixture: ComponentFixture<CustomStructualDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomStructualDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomStructualDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
