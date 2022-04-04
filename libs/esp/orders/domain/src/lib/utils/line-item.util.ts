import { LineItem } from '../models/line-item.model';
import { Product } from '../models/product';

export class LineItemUtil {
  static mapProductsToLineItems(products: Product[]): LineItem[] {
    return products.map((product) => {
      return {} as LineItem;
    });
  }
}
