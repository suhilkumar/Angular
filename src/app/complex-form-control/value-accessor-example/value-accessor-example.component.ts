import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LockInputComponent } from "../lock-input/lock-input.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-value-accessor-example',
  imports: [ReactiveFormsModule, MatInputModule, LockInputComponent, MatButtonModule],
  templateUrl: './value-accessor-example.component.html',
  styleUrl: './value-accessor-example.component.scss'
})
export class ValueAccessorExampleComponent {
form !: FormGroup
constructor(private fb: FormBuilder){}

ngOnInit(){
  this.form = this.fb.group({
    itemName: new FormControl(),
    isLocked : new FormControl(true)
  })
}
onSubmit(){
  console.log(this.form.value)
}
}
