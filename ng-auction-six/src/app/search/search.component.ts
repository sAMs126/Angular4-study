import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'app/service/product.service';
import { positiveNumValidator } from 'app/validator/validators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;

  categories: string[];

  constructor (private fb: FormBuilder, private productService: ProductService) {
    this.formModel = this.fb.group({
      title: ["", Validators.minLength(3)],
      price: [null, positiveNumValidator],
      categ: [-1]
    });
    this.categories = this.productService.getAllCategories();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
