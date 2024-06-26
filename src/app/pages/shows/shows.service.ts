import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShowsService {
    constructor(private http: HttpClient) { }

    getShows() {
      return this.http.get('/api/fetchShows');
    }
}
