import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAccessorExampleComponent } from './value-accessor-example.component';

describe('ValueAccessorExampleComponent', () => {
  let component: ValueAccessorExampleComponent;
  let fixture: ComponentFixture<ValueAccessorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueAccessorExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueAccessorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
