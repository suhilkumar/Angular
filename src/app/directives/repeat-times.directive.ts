import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]'
})
export class RepeatTimesDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
  ) { }
  @Input() set appRepeatTimes (times: number){
    this.viewContainerRef.clear();
    for(let i=0; i <times; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef,  
        {
          index : i
        }
      )
    }
  }


}
