import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public product: Product;

  setProductDetail(product: Product): void {
    this.product = product;
  }

  getProductDetail(): Product {
    return this.product;
  }

  getAllProduct(): Observable<Product[]> {
    const products: Product[] = [];

    const p1 = new Product(
      'https://static.zara.net/photos///2020/I/0/2/p/5551/318/400/2/w/744/5551318400_6_1_1.jpg?ts=1594056064116',
      'BLUE-5551-318',
      'IRREGULAR STRIPE PRINT SHIRT',
      1790.0,
      false,
      3.5
    );
    const p2 = new Product(
      'https://static.zara.net/photos///2020/I/0/2/p/2753/440/401/2/w/744/2753440401_6_1_1.jpg?ts=1594831996408',
      'NAVY-BLUE-2753-440',
      'WATER-REPELLENT COLOUR BLOCK JACKET',
      3490,
      true,
      4.6
    );
    const p3 = new Product(
      'https://static.zara.net/photos///2020/I/1/2/p/3125/520/040/2/w/744/3125520040_2_1_1.jpg?ts=1594237884343',
      'BLACK-3125-20',
      'XL TWO-TONE BOWLING BAG',
      2990.0,
      true,
      2.8
    );
    return of([p1, p2, p3]);
    // return this.http.get<Product[]>('http://165.22.255.58:3000/products');
  }
}
