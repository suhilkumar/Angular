import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
})
export class HighlightDirective {
  @Input('myHighlight')
  value !: string;
  constructor( private elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.color = "lightGreen"
  }
  private highlight(color:string){
    this.elementRef.nativeElement.style.backgroundColor = "whiteSmoke";
    this.elementRef.nativeElement.style.color = color;

  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight(" rgb(35, 4, 89)")
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.value)
  }
}
