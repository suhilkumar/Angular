import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {
  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainerRef : ViewContainerRef
  ) { }

  //with ngOnchanges
// @Input("appMyNgIf")
// show !: boolean;

//   ngOnChanges (){
//     if(this.show){
//       this.viewContainerRef.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainerRef.clear();
//     }
//   }


// now with setters and getters;
@Input() 
public set appMyNgIf(v : boolean) {
  if(v){
    this.viewContainerRef.createEmbeddedView(this.templateRef)
  } else {
    this.viewContainerRef.clear()
  }
}


}
