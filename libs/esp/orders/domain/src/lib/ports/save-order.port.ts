import { InjectionToken } from '@angular/core';
import { Order } from '../models/order.model';

export const SAVE_ORDER = new InjectionToken<SaveOrderPort>('save order');

export interface SaveOrderPort {
  save(order: Order): Promise<void>;
}
