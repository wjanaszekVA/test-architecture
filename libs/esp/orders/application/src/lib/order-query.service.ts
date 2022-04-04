import { Inject, Injectable } from '@angular/core';
import {
  GET_CURRENT_ORDER,
  GetCurrentOrderPort,
  Order,
} from '@wojjan/esp/orders/domain';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderQueryService {
  constructor(
    @Inject(GET_CURRENT_ORDER)
    private readonly getCurrentOrderPort: GetCurrentOrderPort
  ) {}

  selectCurrentOrder(): Observable<Order> {
    return this.getCurrentOrderPort.get();
  }
}
