import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './class/product';
import { Comment } from './class/comment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Search } from './class/search';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ProductService {

  // 作为中间人，创建流
  searchEvent: EventEmitter<Search> = new EventEmitter();

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
  // getProduct(id: number): Product {
  //   let res: Product;
  //   this.http.get<Product>('/api/products/' + id)
  //     .subscribe((data: Product) => {
  //       res = data;
  //     })
  //   return res;
  // }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/products/' + id);
  }

  /**
   * 根据 id 查询产品对应评价
   * @param id 产品 id
   */
  // getCommentsForProduct(id): Comment[] {
  //   let res: Comment[];
  //   this.http.get<Comment[]>('/api/products/' + id + '/comments')
  //     .subscribe((data: Comment[]) => {
  //       res = data;
  //     })
  //   return res;
  // }
  getCommentsForProduct(id): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/products/' + id + '/comments');
  }

  /**
   * 查询商品
   * @param search 
   */
  searchProducts(search: Search): Observable<Product[]> {
    let params;
    params = this.encodeParams(search);
    console.log(params);
    let options = search ? { params: params } : {};
    console.log(options);
    return this.http.get<Product[]>('/api/products', options);
  }

  /**
   * 去除空值属性
   * @param search 查询对象
   */
  private encodeParams(search: Search): HttpParams {
    return Object.keys(search)
      .filter(key => search[key])
      .reduce((prev, curr) => prev.set(curr, search[curr]), new HttpParams())
  }

  /**
   * 查询产品所有分类
   */
  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "外设产品"];
  }

}
