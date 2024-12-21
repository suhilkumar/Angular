import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Dog } from '../types/dog.type';
import { Cat } from '../types/cat.type';
export const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).breed !== undefined;
};
export type Animal = Dog | Cat;
@Directive({
  selector: '[appIsDog]',
})
export class IsDogDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  @Input() set appIsDog(animal: Animal) {
    if (isDog(animal)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
