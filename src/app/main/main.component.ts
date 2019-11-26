import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from '../animal-details/animal';
import {SearchService} from '../search.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private animals: Animal[];
  private loading = true;

  constructor(searchService: SearchService) {
    searchService.search('').subscribe(
        response => {
          this.animals = response;
          this.loading = false;
        }
    );
  }

  ngOnInit() {
  }

  areThereAnyAnimals(): boolean {
    return this.animals && this.animals.length > 0;
  }

}
