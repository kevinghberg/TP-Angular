import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products-list/Product';

const URL = 'https://60da34835f7bf100175479e1.mockapi.io/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {

    return this.http.get<Product[]>(URL);

  }
}
