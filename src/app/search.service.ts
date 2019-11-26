import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }

    search(query: string): Observable<any> {
        const baseUrl = 'http://localhost:8080/animals';
        const url = query
            ? baseUrl + '?query=' + query
            : baseUrl;
        return this.http.get(url);
    }
}
