import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelCategory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-danh-muc',
  templateUrl: './danh-muc.component.html',
  styleUrls: ['./danh-muc.component.css']
})
export class DanhMucComponent implements OnInit {
  categoryForm: FormGroup;
  categoryFormEdit: FormGroup;
  categories!: ModelCategory[];
  category: ModelCategory;
  isModalVisible = false;
  selectedCategory: any = {};
  // categories!: ModelCategory[];
  // newCategory = { _id: '', name: 'sssa', icon: '', description: 'sss' }; // Added _id property
  viewInitialized = false;
  constructor(private categoryService: CategoryService, private router: Router) {
    this.category = new ModelCategory;
    this.categoryForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'icon': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    });
    this.categoryFormEdit = new FormGroup({
      '_id': new FormControl('', Validators.required),
      'name': new FormControl('', [Validators.required]),
      'icon': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    // Get category
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result;
      console.log(this.categories, "category");
    });
    this.viewInitialized = true;
  }

  formAddCategory() {
    const formAddCate = document.querySelector("#addModalCate") as HTMLElement;
    formAddCate.style.display = "block";
    const cancelBtn = document.querySelector('.btn-cancel') as HTMLButtonElement;
    cancelBtn.addEventListener('click', (event: Event) => {
      event.preventDefault();
      this.categoryForm.reset();
      formAddCate.style.display = 'none';
    });
    const saveAddCategoryBtn = document.querySelector('.btn-save') as HTMLButtonElement;
    console.log(saveAddCategoryBtn, "Save");

    // this.categoryService.add(this.newCategory).subscribe(response => {
    //   // Handle response, e.g., refresh the category list
    //   console.log('Category added:', response);
    // });
  }
  addCategory() {
    if (this.categoryForm.invalid) {
      alert("Vui lòng nhập thông tin hợp lệ")
      return console.log("Không hợp lệ")
    } else {
      let iconCate = (document.getElementById('iconCate') as HTMLInputElement).files?.[0];
      if (iconCate) {
        const formData = new FormData();
        formData.append('icon', iconCate); // Append the file to FormData
        formData.append('name', this.categoryForm.value.name);
        formData.append('description', this.categoryForm.value.description);

        this.categoryService.add(formData).subscribe((res) => {
          if (res) {
            window.location.href = "/admin"
            alert("Thêm thành công")
          } else {
            window.location.href = "/admin"
            alert("Thêm thất bại")
          }
        });
      } else {
        console.error("No file selected for icon.");
      }
    }
  }
  deleteCategory(id: string) {
    if (confirm("Bạn có muốn xoá mục này không?")) {
      this.categoryService.delete(id).subscribe((res) => {
        if (res) {
          window.location.href = "/admin1"
          alert("Xoá thành công")
        } else {
          window.location.href = "/admin1"
          alert("Xoá thất bại")
        }
      })
    }
  }
  formUpdateCategory(id: string) {
    this.categoryService.get(id).subscribe((res) => {
      console.log(res.result, "UPdate")
      this.selectedCategory = res.result;
      console.log(this.selectedCategory, "<sss>")
      this.selectedCategory.iconUrl = `http://localhost:5032/images/${this.selectedCategory.icon}`;
      this.categoryFormEdit.patchValue({
        _id: this.selectedCategory._id,
        name: this.selectedCategory.name,
        icon: this.selectedCategory.icon,
        description: this.selectedCategory.description,
        iconUrl: `http://localhost:5032/images/${this.selectedCategory.icon}`
      });
      const editModalCategory = document.querySelector("#editModalCate") as HTMLElement;
      editModalCategory.style.display = "block";
      const cancelEdit = document.querySelector(".btn-cancel-cate") as HTMLButtonElement;
      cancelEdit.addEventListener("click", (event: Event) => {
        event.preventDefault();
        this.categoryFormEdit.reset();
        editModalCategory.style.display = 'none';
      });
      // const saveEdit = document.querySelector(".btn-save-cate") as HTMLButtonElement;
    });
  }

  updateCategory(id: string) {
    if (this.categoryFormEdit.invalid) {
      alert("Vui lòng nhập thông tin hợp lệ")
      return console.log("Không hợp lệ")
    } else {
      let iconCateEdit = (document.getElementById('iconCate-edit') as HTMLInputElement).files?.[0];
      let checkIcon = iconCateEdit ? iconCateEdit : this.selectedCategory.icon;
      const formData = new FormData();
      formData.append('icon', checkIcon);
      formData.append('name', this.categoryFormEdit.value.name);
      formData.append('description', this.categoryFormEdit.value.description);

      this.categoryService.update(id, formData).subscribe((res) => {
        if (res) {
          window.location.href = "/admin1"
          alert("Sửa thành công")
        } else {
          window.location.href = "/admin1"
          alert("Sửa thất bại")
        }
      });
    }
  }


}

