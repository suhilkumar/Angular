import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeepDiveComponent } from './service-deep-dive.component';

describe('ServiceDeepDiveComponent', () => {
  let component: ServiceDeepDiveComponent;
  let fixture: ComponentFixture<ServiceDeepDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDeepDiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
