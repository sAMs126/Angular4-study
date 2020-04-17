import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'app/service/class/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(list: Product[], field: string, keyword: string): any {
    if (field && keyword) {
      return list.filter(item => {
        // 取筛选对应属性值
        let fieldValue = item[field];
        return fieldValue.includes(keyword);
      })
    } else {
      return list;
    }
  }

}
