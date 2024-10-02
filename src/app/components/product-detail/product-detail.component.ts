import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelProducts } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: ModelProducts;
  id!: string;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.id = route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.productService.get(this.id).subscribe(data => {
      this.product = data.result as unknown as ModelProducts; // Cast to unknown first
      console.log(this.product, "Details");
    })
  }

}
