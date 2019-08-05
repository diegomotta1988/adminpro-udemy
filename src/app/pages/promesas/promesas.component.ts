import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(mensaje => console.log('terminó', mensaje)
    )
      .catch(error => console.error('error', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      let contador = 0;
      const interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });

  }

}
