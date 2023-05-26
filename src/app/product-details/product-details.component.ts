import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('categoryName');
    this.product = {
      id: productId,
      name: 'Product 1',
      description: 'This is a sample product',
      price: 10.99
    };
  }
  addToCart(product: any) {
    console.log('Adding product to cart:', product);
  }
}
