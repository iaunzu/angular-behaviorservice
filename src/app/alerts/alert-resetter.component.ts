import { Component } from '@angular/core';
import { AlertStoreService } from './shared/alert-store.service'

@Component({
  selector: 'app-alert-resetter',
  template: `
    <button (click)="reset()">RESET</button>
  `
})
export class AlertResetterComponent {
  
  constructor(private alertStoreService: AlertStoreService) {}

  reset(): void {
    this.alertStoreService.reset();
  }

} 