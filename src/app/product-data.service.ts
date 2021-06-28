import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products-list/Product';

const URL= 'https://postman-echo.com/get?test=123';// mi mock

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    
   return this.http.get<Product[]>(URL);

  }
}
