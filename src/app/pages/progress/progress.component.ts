import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 25;
  progreso2: number = 75;
  constructor() { }

  ngOnInit() {
  }

  // public actualizarProgreso(event: number) {
  //   this.progreso1 = event;
  // }

}
