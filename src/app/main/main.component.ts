import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from '../animal-details/animal';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private animals: Animal[];
  private loading = true;

  constructor(http: HttpClient) {
    http.get('localhost:8080/findAll').subscribe(
        response => {
          this.animals = response['_embedded'];
          this.loading = false;
        }
    );
  }

  ngOnInit() {
  }

}
