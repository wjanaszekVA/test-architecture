import { LineItemUtil } from '../utils/line-item.util';
import { LineItem } from './line-item.model';
import { OrderType } from './order-type.model';
import { Product } from './product';

export class Order {
  Id!: number;
  Type!: OrderType;
  LineItems: LineItem[] = [];

  constructor(data: unknown) {
    Object.assign(this, data);
  }

  addLineItems(products: Product[]): void {
    this.LineItems = [
      ...this.LineItems,
      ...LineItemUtil.mapProductsToLineItems(products),
    ];
  }
}
