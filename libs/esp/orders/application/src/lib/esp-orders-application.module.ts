import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class EspOrdersApplicationModule {
  static forRoot(): ModuleWithProviders<EspOrdersApplicationModule> {
    return {
      ngModule: EspOrdersApplicationModule,
      providers: [
        // provide all ports
      ]
    }
  }
}
