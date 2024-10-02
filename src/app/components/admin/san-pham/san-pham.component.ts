import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelCategory } from 'src/app/models/category';
import { ModelProducts } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-san-pham',
  templateUrl: './san-pham.component.html',
  styleUrls: ['./san-pham.component.css']
})
export class SanPhamComponent implements OnInit {
  productForm!: FormGroup;
  productFormEdit: FormGroup;
  product!: ModelProducts;
  products!: ModelProducts[];
  categories!: ModelCategory[];
  selectedProduct: any = {};

  constructor(private productService: ProductsService, private categoryService: CategoryService, private router: Router) {
    this.product = new ModelProducts;
    this.productForm = new FormGroup({
      'name': new FormControl('Lều Cắm trại test', [Validators.required]),
      'brand': new FormControl('Maxfox', [Validators.required]),
      'quantity': new FormControl('12', [Validators.required]),
      'star': new FormControl(3, [Validators.required]),
      'priceOld': new FormControl(1200, [Validators.required]),
      'priceNew': new FormControl(1000, [Validators.required]),
      'description': new FormControl('Day la mo ta san pham', [Validators.required]),
      'img': new FormControl("", [Validators.required]),
      'nameCategory': new FormControl("", [Validators.required])
    })
    this.productFormEdit = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'brand': new FormControl('', [Validators.required]),
      'quantity': new FormControl('', [Validators.required]),
      'star': new FormControl(0, [Validators.required]),
      'priceOld': new FormControl(0, [Validators.required]),
      'priceNew': new FormControl(0, [Validators.required]),
      'description': new FormControl('Day la mo ta san pham', [Validators.required]),
      'img': new FormControl("", [Validators.required]),
      'nameCategory': new FormControl("", [Validators.required])

    })
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.products = data.result
      console.log(this.products, "CheckData")
    })
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
      console.log(this.categories, "CheckCate")
    })
  }
  formAddProduct() {
    const myModal = document.getElementById('myModal') as HTMLElement;
    myModal.style.display = "block";
    this.productForm.patchValue({
      nameCategory: this.categories[0]._id // Giá trị _id của category mà bạn muốn chọn
    });

    const cancelBtn = document.querySelector('.btn-secondary') as HTMLButtonElement;
    cancelBtn.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.productForm.reset();
      myModal.style.display = 'none';
    });
    const saveAddProductBtn = document.getElementById('saveAddProduct') as HTMLButtonElement;

    // this.categoryService.add(this.newCategory).subscribe(response => {
    //   // Handle response, e.g., refresh the category list
    //   console.log('Category added:', response);
    // });
  }
  addProduct() {
    if (this.productForm.invalid) {
      alert("Vui lòng nhập thông tin hợp lệ")
      return console.log("Không hợp lệ")
    } else {
      let imageProduct = (document.getElementById('img') as HTMLInputElement).files?.[0];
      if (imageProduct) {
        const formData = new FormData();
        formData.append('img', imageProduct);
        formData.append('name', this.productForm.value.name);
        formData.append('brand', this.productForm.value.brand);
        formData.append('quantity', this.productForm.value.quantity);
        formData.append('star', this.productForm.value.star);
        formData.append('priceOld', this.productForm.value.priceOld);
        formData.append('priceNew', this.productForm.value.priceNew);
        formData.append('description', this.productForm.value.description);
        formData.append('categoryId', this.productForm.value.nameCategory);

        this.productService.add(formData).subscribe((res) => {
          if (res) {
            window.location.href = "/admin2"
            alert("Thêm thành công")
          } else {
            2
            window.location.href = "/admin2"
            alert("Thêm thất bại")
          }
        });
      } else {
        console.error("No file selected for icon.");
      }
    }
  }
  deleteProduct(id: string) {
    if (confirm("Bạn có muốn xoá sản phẩm này không")) {
      this.productService.delete(id).subscribe((res) => {
        if (res) {
          window.location.href = "/admin2"
          alert("Xoá thành công");
        } else {
          window.location.href = "/admin2"
          alert("Xoá thất bại")
        }
      })
    }
  }
  formUpdateProduct(id: string) {
    this.productService.get(id).subscribe((res) => {
      console.log(res.result, "UpdateProduct");
      this.selectedProduct = res.result;
      this.productFormEdit.patchValue({
        _id: this.selectedProduct._id,
        name: this.selectedProduct.name,
        brand: this.selectedProduct.brand,
        quantity: this.selectedProduct.quantity,
        star: this.selectedProduct.star,
        priceOld: this.selectedProduct.priceOld,
        priceNew: this.selectedProduct.priceNew,
        description: this.selectedProduct.description,
        img: this.selectedProduct.img,
        nameCategory: this.selectedProduct.categoryId
      })
    })
    console.log(this.productFormEdit.value.nameCategory, ">sss")
    const editModalProduct = document.querySelector("#myEditModal") as HTMLElement;
    editModalProduct.style.display = "block";
    const cancelEdit = document.querySelector(".btn-secondary-edit") as HTMLButtonElement;
    cancelEdit.addEventListener("click", (event: Event) => {
      event.preventDefault();
      this.productFormEdit.reset();
      editModalProduct.style.display = "none";
    })
  }
  updateProduct(id: string) {
    if (this.productFormEdit.invalid) {
      alert("Vui lòng nhập thông tin hợp lệ")
      return console.log("Không hợp lệ")
    } else {
      let productData = new FormData();
      const img = (document.querySelector("#img-edit") as HTMLInputElement).files?.[0];
      const checkImg = img ? img : this.selectedProduct.img
      productData.append('img', checkImg);
      productData.append('name', this.productFormEdit.value.name);
      productData.append('brand', this.productFormEdit.value.brand);
      productData.append('quantity', this.productFormEdit.value.quantity);
      productData.append('star', this.productFormEdit.value.star);
      productData.append('priceOld', this.productFormEdit.value.priceOld);
      productData.append('priceNew', this.productFormEdit.value.priceNew);
      productData.append('description', this.productFormEdit.value.description);
      productData.append('categoryId', this.productFormEdit.value.nameCategory);
      this.productService.update(id, productData).subscribe((res) => {
        if (res) {
          window.location.href = "/admin2";
          alert("Sửa thành công")
        } else {
          window.location.href = "/admin2";
          alert("Sửa thất bại")
        }
      })


    }
  }
}
