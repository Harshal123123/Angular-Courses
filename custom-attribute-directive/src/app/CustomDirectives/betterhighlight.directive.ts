import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() title: string = 'This is anglar course';
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = this.highlightColor;

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter() {
    this.background = this.highlightColor;
    this.border = '2px solid red';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
