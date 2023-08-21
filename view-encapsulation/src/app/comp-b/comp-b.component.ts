import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  // shadowDom it creates a separate DOM compare to main DOM that's why the global style is not applying to this component.
})
export class CompBComponent {}
