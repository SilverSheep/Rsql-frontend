import {Component, Input, OnInit} from '@angular/core';
import {Animal} from './animal';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {

  @Input()
  animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
