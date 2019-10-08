import { Component } from '@angular/core';

import { AlertStoreService } from './shared/alert-store.service'

@Component({
  selector: 'app-alert-inc',
  template: `
    <button (click)="alertStoreService.inc()" class="btn btn-primary">INC</button>
  `
})
export class AlertIncComponent {
  
  constructor(private alertStoreService: AlertStoreService) {}

} 