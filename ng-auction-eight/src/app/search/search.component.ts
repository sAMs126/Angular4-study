import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'app/service/product.service';
import { positiveNumValidator } from 'app/validator/validators';
import { Search } from 'app/service/class/search';

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
      let search: Search = this.formModel.value;
      console.log(search);
      // 激活中间人的事件流
      this.productService.searchEvent.emit(search);
    }
  }

}
