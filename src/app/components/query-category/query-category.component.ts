import { ActivatedRoute, Router } from '@angular/router';
import { ModelProducts } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-query-category',
  templateUrl: './query-category.component.html',
  styleUrls: ['./query-category.component.css']
})
export class QueryCategoryComponent implements OnInit {
  products: any[] = [];
  id!: string;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.id = route.snapshot.params['id'];
    console.log("ID from route: ", this.id); // Log the ID to check if it's being retrieved correctly
  }

  ngOnInit() {
    this.getIdCategory();
  }

  getIdCategory() {
    console.log("Fetching products for ID: ", this.id); // Log the ID before making the request
    this.productsService.getProductEqualCategory(this.id).subscribe((data: any) => {
      this.products = data.result; // Cast to unknown first
      console.log(this.products, "CategoryProducts"); // Log the products array
    }, error => {
      console.error("Error fetching products: ", error); // Log any errors
    });
  }
}
