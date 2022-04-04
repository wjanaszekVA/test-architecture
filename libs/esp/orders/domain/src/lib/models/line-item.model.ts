export class LineItem {
  ProductId?: number;
  ImageUrl?: string;
}

export class ProductLineItem extends LineItem {}

export class ServiceChangeLineItem extends LineItem {}
