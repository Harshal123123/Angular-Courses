import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // ngOnInit(): void {
  //   this.renderer.addClass(this.element.nativeElement, 'c');
  // }

  @HostListener('mouseenter') onmousehover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }

  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
