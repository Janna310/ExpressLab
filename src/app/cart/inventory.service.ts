import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  //getting all items from the api - no params
  // getItems() {
  //   return this.http.get('/api/items', {
  //     responseType: 'json',
  //   });
  // }

  //return just Max price requests
  // getMaxPrice() {
  //   return this.http.get('/api/items?maxPrice=10', {
  //     responseType: 'json',
  //   });
  // }

  //return all data with specified params
  getItems() {
    return this.http.get('/api/items?maxPrice=10?prefix="shirt"?pageSize=5', {
      responseType: 'json',
    });
  }
}
