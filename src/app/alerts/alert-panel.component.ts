import { Component } from '@angular/core';
import { skip, distinctUntilChanged } from 'rxjs/operators';

import { AlertStoreService } from './shared/alert-store.service'

@Component({
  selector: 'app-alert-panel',
  template: `
    <div>
      <app-alert-inc></app-alert-inc>
      <app-alert-resetter></app-alert-resetter>
    </div>
    <div>
      Nivel de alerta: {{alertStoreService.state$ | async}}
    </div>
    <div *ngIf="changed">
      * El nivel de alerta ha cambiado <button (click)="dismiss()">Aceptar</button>
    </div>
  `
})
export class AlertPanelComponent {
  
  changed = false;
  
  constructor(private alertStoreService: AlertStoreService) {
    alertStoreService.state$.pipe(
      skip(1),
      distinctUntilChanged() // multiple resets
    ).subscribe( _ => {
      this.changed = true;
    })
  }

  dismiss(): void {
    this.changed = false;
  }
} 