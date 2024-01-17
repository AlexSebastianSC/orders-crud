import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] =[];
  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) {
  }

  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}

