import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[mydynamiclist]"
})
export class DynamicListDirective {
    @Input('mydynamiclist')
    itemsList !: string[]
    constructor(
        private templateRef: TemplateRef <any>,
        private viewContainerRef: ViewContainerRef,
    ){
        console.log('myDynamiclist directive called')
    }

    ngOnInit() {
        this.viewContainerRef.clear();

        for(const items of this.itemsList){
            const context = {$items : items}
            this.viewContainerRef.createEmbeddedView(this.templateRef, 
                context
            )
        }
    }
}