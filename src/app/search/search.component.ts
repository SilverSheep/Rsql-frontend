import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  search = new EventEmitter<string>();

  query = '';

  constructor() { }

  ngOnInit() {
  }

  find($event) {
    this.query = $event.target.value;
    this.search.emit($event.target.value);
  }
}
