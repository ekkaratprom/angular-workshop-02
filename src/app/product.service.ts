import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    const products: Product[] = [];
    const p1 = new Product('freepik.com', '0001', 'Mani Doe', 500.25, false, 5);
    const p2 = new Product(
      'HeyDesigner.com',
      '0002',
      'Danny Doe',
      780.254,
      true,
      5
    );
    const p3 = new Product('mobbin.design', '0003', 'Mani Doe', 500.2, true, 5);
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
