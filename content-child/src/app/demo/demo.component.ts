import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit, AfterContentInit {
  constructor() {}
  ngOnInit(): void {
    console.log('g', this.paragraphEl);
  }

  ngAfterContentInit(): void {
    // this.paragraphEl.nativeElement.textContent = 'd';
    console.log('d', this.paragraphEl.nativeElement.textContent);
  }
  @ContentChild('paragraph') paragraphEl!: ElementRef;
}
