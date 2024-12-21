import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lock-input',
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './lock-input.component.html',
  styleUrl: './lock-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LockInputComponent,
      multi: true,
    },
  ],
})
export class LockInputComponent implements ControlValueAccessor {
  value = false;
  onChange!: (value: boolean)=> void;

  constructor() {}

  writeValue(obj: boolean): void {
    this.value = obj;
    
    // throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit():void {};

  setValue(){
    this.value = !this.value;
    this.onChange(this.value);
  }
}
