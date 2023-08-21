import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  //   private element: ElementRef;

  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = 'green';
    this.element = element;
  }

  //Some of the reasons constructor is not good use like this,so we Called ngOnInit() which is initialize after the @Director get initialize.
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
