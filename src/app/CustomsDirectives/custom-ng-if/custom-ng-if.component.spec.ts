import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgIfComponent } from './custom-ng-if.component';

describe('CustomNgIfComponent', () => {
  let component: CustomNgIfComponent;
  let fixture: ComponentFixture<CustomNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
