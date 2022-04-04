import { InjectionToken } from '@angular/core';
import { Order } from '@wojjan/esp/orders/domain';
import { Observable } from 'rxjs';

export const GET_CURRENT_ORDER = new InjectionToken<GetCurrentOrderPort>('get current order');

export interface GetCurrentOrderPort {
  get(): Observable<Order>;
}
