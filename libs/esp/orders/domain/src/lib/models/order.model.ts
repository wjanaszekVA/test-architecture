import { SaveOrderPort } from '../ports/save-order.port';
import { LineItemUtil } from '../utils/line-item.util';
import { LineItem } from './line-item.model';
import { OrderType } from './order-type.model';
import { Product } from './product';

export class Order {
  Id!: number;
  Type!: OrderType;
  LineItems: LineItem[] = [];

  addLineItems(products: Product[]): void {
    this.LineItems = [
      ...this.LineItems,
      ...LineItemUtil.mapProductsToLineItems(products),
    ];
  }
}
