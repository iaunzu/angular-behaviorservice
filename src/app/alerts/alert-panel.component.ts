import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { skip, distinctUntilChanged, takeUntil } from "rxjs/operators";

import { AlertStoreService } from "./shared/alert-store.service";

@Component({
  selector: "app-alert-panel",
  template: `
    <div>
      <h3>Nivel de alerta: {{ alertStoreService.state$ | async }}</h3>
    </div>
    <div *ngIf="changed" class="alert alert-warning">
      * El nivel de alerta ha cambiado.
      <button (click)="dismiss()" class="btn btn-success">Aceptar</button>
    </div>
  `
})
export class AlertPanelComponent implements OnDestroy {
  changed = false;

  private destroy = new Subject<void>();

  constructor(private alertStoreService: AlertStoreService) {
    alertStoreService.state$
      .pipe(
        distinctUntilChanged(), // multiple resets
        skip(1),
        takeUntil(this.destroy)
      )
      .subscribe(_ => {
        this.changed = true;
      });
  }

  dismiss(): void {
    this.changed = false;
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }
}
