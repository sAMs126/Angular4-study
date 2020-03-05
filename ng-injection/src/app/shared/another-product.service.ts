import { Injectable } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "app/class/product";
import { LoggerService } from "./logger.service";

@Injectable()
export class AnotherProductService implements ProductService {
    constructor (private loggeer: LoggerService) { }

    getProduct(): Product {
        this.loggeer.log("getProduct() service has been called");
        return new Product(1, "SumsungS10", 7999, "最新款三星手机");
    }
}
