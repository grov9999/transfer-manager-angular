import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  // private ptcodeFilterSubject = new BehaviorSubject<string>('');
  // ptcodeFilter$ = this.ptcodeFilterSubject.asObservable();

  // setPtcodeFilter(filter: string): void {
  //   this.ptcodeFilterSubject.next(filter);
  // }

  private terminoBusquedaSubject = new BehaviorSubject<string>('');
  terminoBusqueda$ = this.terminoBusquedaSubject.asObservable();

  actualizarTerminoBusqueda(valor: string): void {
    this.terminoBusquedaSubject.next(valor);
  }
}
