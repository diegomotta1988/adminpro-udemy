import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  constructor() {

    const suscripcion =
      this.regresaObservable()
        .subscribe(numero => {
          console.log('subs', numero);
        }, error => {
          console.log('error', error);

        },
          () => {
            console.log('terminó!');
          });

    this.subscriptions.add(suscripcion);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Cerrando la página');
    this.subscriptions.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable<any>((observer: Subscriber<any>) => {
      let contador = 1;
      const intervalo = setInterval(() => {

        const salida = {
          valor: contador
        }
        contador += 1;
        observer.next(salida);
      }, 1000);
    }).pipe(map(respuesta => respuesta.valor
    ), filter((valor, index) => {
      if ((valor % 2) === 1) {
        return true;
      } else {
        return false;
      }
    }));

  }

}
