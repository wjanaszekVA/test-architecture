import { Inject, Injectable } from '@angular/core';
import {
  GET_CURRENT_ORDER,
  GetCurrentOrderPort,
  Order,
  SAVE_ORDER,
  SaveOrderPort,
  SHOW_ERROR,
  SHOW_SUCCESS,
  ShowErrorPort,
  ShowSuccessPort,
} from '@wojjan/esp/orders/domain';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderCommandService {
  constructor(
    @Inject(GET_CURRENT_ORDER)
    private readonly getCurrentOrderPort: GetCurrentOrderPort,
    @Inject(SAVE_ORDER) private readonly saveOrderPort: SaveOrderPort,
    @Inject(SHOW_SUCCESS) private readonly showSuccessPort: ShowSuccessPort,
    @Inject(SHOW_ERROR) private readonly showErrorPort: ShowErrorPort
  ) {}

  async addLineItems(): Promise<void> {
    // @TODO might add a synchronous access to the current order
    const currentOrder = await firstValueFrom(this.getCurrentOrderPort.get());
    const order = new Order(currentOrder);

    order.addLineItems([]);

    this.saveOrderPort
      .save(order)
      .then(() => this.showSuccessPort.show(order))
      .catch(() => this.showErrorPort.show(order));
  }
}
