import { Component, ViewContainerRef } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-create-dynamic',
  imports: [],
  templateUrl: './create-dynamic.component.html',
  styleUrl: './create-dynamic.component.scss'
})
export class CreateDynamicComponent {
  constructor(private viewContainerRef: ViewContainerRef){}
createComponent(value: boolean){
  if(value){
    this.viewContainerRef.createComponent(WidgetComponent)
  }else {
    this.viewContainerRef.clear()
  }
}
}
