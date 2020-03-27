import { Injectable } from '@angular/core';
import { Product } from './class/product';
import { Comment } from './class/comment';

@Injectable()
export class ProductService {

    private products: Product[] = [
        new Product(1, "第一个商品", 1.78, 1, "这是商品的描述，第一个商品", [
            "电子产品",
            "硬件设备",
            "外设产品"
        ]),
        new Product(2, "第二个商品", 2.78, 2.5, "这是商品的描述，第二个商品", [
            "硬件设备"
        ]),
        new Product(3, "第三个商品", 3.78, 3, "这是商品的描述，第三个商品", [
            "电子产品",
            "外设产品"
        ]),
        new Product(4, "第四个商品", 4.78, 4, "这是商品的描述，第四个商品", [
            "电子产品",
            "硬件设备",
            "外设产品"
        ]),
        new Product(5, "第五个商品", 5.78, 5, "这是商品的描述，第五个商品", [
            "硬件设备",
            "外设产品"
        ]),
        new Product(6, "第六个商品", 6.78, 3, "这是商品的描述，第六个商品", [
            "电子产品",
            "硬件设备",
            "外设产品"
        ])
    ];

    private comments: Comment[] = [
        new Comment(1, 1, "2018/2/8 16:33:27", 4, "张三", "还行！"),
        new Comment(1, 1, "2019/1/5 11:03:19", 3, "张三", "还行！"),
        new Comment(1, 2, "2018/2/8 16:33:27", 2, "张三", "还行！"),
        new Comment(1, 2, "2019/1/5 11:03:19", 1, "张三", "还行！"),
        new Comment(1, 3, "2018/2/8 16:33:27", 2, "张三", "还行！"),
        new Comment(1, 3, "2019/1/5 11:03:19", 3, "张三", "还行！"),
        new Comment(1, 4, "2018/2/8 16:33:27", 4, "张三", "还行！"),
        new Comment(1, 5, "2019/1/5 11:03:19", 5, "张三", "还行！"),
        new Comment(1, 6, "2018/2/8 16:33:27", 1, "张三", "还行！"),
    ];

    constructor () { }

    /**
     * 获取产品数组
     */
    getProducts() {
        return this.products;
    }

    /**
     * 根据 id 查询对应产品详情
     * @param id 产品 id
     */
    getProduct(id: number): Product {
        return this.products.find((product: Product) => product.id == id);
    }

    /**
     * 根据 id 查询产品对应评价
     * @param id 产品 id
     */
    getCommentsForProduct(id): Comment[] {
        return this.comments.filter((comment: Comment) => comment.productId == id);
    }

}
