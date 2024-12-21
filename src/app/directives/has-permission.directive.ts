import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective {
@Input("appHasPermission")
hasPermission !: string;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef : ViewContainerRef

  ) { }

  ngOnInit() {
    if (this.hasPermission === 'admin'){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}
