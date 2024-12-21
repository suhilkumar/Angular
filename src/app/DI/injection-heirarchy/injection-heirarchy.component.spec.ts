import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionHeirarchyComponent } from './injection-heirarchy.component';

describe('InjectionHeirarchyComponent', () => {
  let component: InjectionHeirarchyComponent;
  let fixture: ComponentFixture<InjectionHeirarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionHeirarchyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionHeirarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
