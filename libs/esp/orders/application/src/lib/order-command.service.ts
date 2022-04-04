import { Inject, Injectable } from '@angular/core';
import {
  Order,
  SAVE_ORDER,
  SaveOrderPort,
  SHOW_ERROR,
  SHOW_SUCCESS,
  ShowErrorPort,
  ShowSuccessPort,
} from '@wojjan/esp/orders/domain';

@Injectable({ providedIn: 'root' })
export class OrderCommandService {
  constructor(
    @Inject(SAVE_ORDER) private readonly saveOrderPort: SaveOrderPort,
    @Inject(SHOW_SUCCESS) private readonly showSuccessPort: ShowSuccessPort,
    @Inject(SHOW_ERROR) private readonly showErrorPort: ShowErrorPort
  ) {}

  addLineItems(): void {
    const order = new Order();

    order.addLineItems([]);

    this.saveOrderPort
      .save(order)
      .then(() => this.showSuccessPort.show(order))
      .catch(() => this.showErrorPort.show(order));
  }
}
