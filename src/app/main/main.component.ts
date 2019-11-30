import {Component, OnInit} from '@angular/core';
import {Animal} from '../animal-details/animal';
import {SearchService} from '../search.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    animals: Animal[];
    loading = true;
    error = '';

    constructor(private searchService: SearchService) {
        this.search('');
    }

    private search(query: string) {
        this.loading = true;
        this.searchService.search(query).subscribe(
            response => {
                this.animals = response.content;
                this.loading = false;
                this.error = '';
            },
            error => {
                this.error = error.error.message;
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
