import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = "http://localhost:4200/api/"

  constructor(private http: HttpClient) { }

  getColumns() {
    const getUrl = this.url + 'categories'
    return this.http.get(getUrl).toPromise();
  }

  getTopItemsInCategory() {
    const getUrl = this.url + 'categories/items'
    return this.http.get(getUrl).toPromise();
  }

  getCategoryItems(id) {
    const getUrl = this.url + `categories/${id}/items`
    return this.http.get(getUrl).toPromise();
  }

  getAllItems() {
    const getUrl = this.url + 'categories/items'
    console.log(getUrl);
    return this.http.get(getUrl).toPromise();
  }
}