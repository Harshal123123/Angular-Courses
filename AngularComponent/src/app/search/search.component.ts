import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchvalue: string = '';
  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchvalue = (<HTMLInputElement>eventData.target).value;
  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchvalue);
  }
}
