import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const ALERT_INITIAL_VALUE = 0;

@Injectable({
  providedIn: 'root'
})
export class AlertStoreService {

  private _alertState$ = new BehaviorSubject<number>(ALERT_INITIAL_VALUE);
  
  public state$ = this._alertState$.asObservable();
  
  reset(): void {
    this._alertState$.next(0);
  }

  inc(): void {
    this._alertState$.next(this._alertState$.value + 1);
  }
}