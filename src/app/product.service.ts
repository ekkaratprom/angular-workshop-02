import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAllProduct(): Product[] {
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
    products.push(p1, p2, p3);
    return products;
  }
}
