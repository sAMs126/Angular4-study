import { Injectable } from '@angular/core';
import { Product } from './class/product';
import { Comment } from './class/comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

  constructor (private http: HttpClient) { }

  /**
   * 获取产品数组
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products");
  }

  /**
   * 根据 id 查询对应产品详情
   * @param id 产品 id
   */
  getProduct(id: number): Product {
    let res: Product;
    this.http.get<Product>('/api/products' + id)
      .subscribe((data: Product) => {
        res = data;
      })
    return res;
  }

  /**
   * 根据 id 查询产品对应评价
   * @param id 产品 id
   */
  getCommentsForProduct(id): Comment[] {
    let res: Comment[];
    this.http.get<Comment[]>('/api/products' + id + '/comments')
      .subscribe((data: Comment[]) => {
        res = data;
      })
    return res;
  }

  /**
   * 查询产品所有分类
   */
  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "外设产品"];
  }

}
