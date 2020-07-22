import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(public service: ProductService) {}
  public product: Product;

  @Input() code: number;

  ngOnInit(): void {
    this.product = this.service.getProductDetail();
    console.log(this.product);
  }
}
