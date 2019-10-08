import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { skip, distinctUntilChanged, takeUntil } from 'rxjs/operators';

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
export class AlertPanelComponent implements OnDestroy {
  
  changed = false;
  
  private destroy = new Subject<void>();
  
  constructor(private alertStoreService: AlertStoreService) {
    alertStoreService.state$.pipe(
      skip(1),
      distinctUntilChanged(), // multiple resets
      takeUntil(this.destroy)
    ).subscribe( _ => {
      this.changed = true;
    })
  }

  dismiss(): void {
    this.changed = false;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
} 