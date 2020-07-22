import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData: string = '';

  constructor() {}

  ngOnInit(): void {
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
    this.products.push(p1, p2, p3);
  }
}
