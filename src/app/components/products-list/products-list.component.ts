import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelProducts } from 'src/app/models/product';

import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //   template: `
  //   <p>Your color preference is {{ theme }}.</p>
  // `,

})
export class ProductsListComponent implements OnInit {
  products!: ModelProducts[]
  theme = 'dark';
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    return this.productService.getAll().subscribe(data => {
      this.products = (data.result) as ModelProducts[];
      console.log(this.products, "Callapi")
    })
  }

}
