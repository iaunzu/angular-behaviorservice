import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AlertStoreService } from './shared/alert-store.service'

@Component({
  selector: 'app-alert-inc',
  template: `
    <button (click)="inc()">INC</button>
  `
})
export class AlertIncComponent {
  
  constructor(private alertStoreService: AlertStoreService) {}

  inc(): void {
    this.alertStoreService.inc();
  }

} 