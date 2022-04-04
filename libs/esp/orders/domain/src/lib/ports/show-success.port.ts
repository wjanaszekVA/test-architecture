import { InjectionToken } from '@angular/core';
import { Order } from '../models/order.model';

export const SHOW_SUCCESS = new InjectionToken<ShowSuccessPort>('show success');

export interface ShowSuccessPort {
  show(order: Order): Promise<void>;
}
