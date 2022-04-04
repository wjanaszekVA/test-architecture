import { InjectionToken } from '@angular/core';
import { Order } from '../models/order.model';

export const SHOW_ERROR = new InjectionToken<ShowErrorPort>('show error');

export interface ShowErrorPort {
  show(order: Order): Promise<void>;
}
