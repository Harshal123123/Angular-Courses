import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set appStyle(styles: Object) {
    let entries = Object.entries(styles);
    console.log(entries);

    for (let [property, values] of entries) {
      this.renderer.setStyle(this.element.nativeElement, property, values);
    }
  }
}
