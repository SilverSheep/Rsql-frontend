import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../animal-details/animal';

@Component({
    selector: 'app-animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

    @Input()
    animals: Animal[];

    constructor() {
    }

    ngOnInit() {
    }

}
