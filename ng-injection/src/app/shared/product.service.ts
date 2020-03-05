import { Injectable } from '@angular/core';
import { Product } from 'app/class/product';

@Injectable()
export class ProductService {

    constructor() { }

    getProduct(): Product {
        return new Product(0, "IPhoneX", 5999, "最新款苹果手机")
    }

}
